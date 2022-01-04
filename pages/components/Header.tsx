import { useState, useEffect } from 'react';
import logo from '../../public/logo_transparent.png'
import luke from '../../public/luke.png';
import Image from 'next/image';

export default function Header() {
    const [navOpen, setNavOpen] = useState(false)
    const [screenDimensions, setScreenDimensions] = useState([1000,1000])
    const openNav = () => {
        setNavOpen(!navOpen)
    }

    useEffect(() => {
        setScreenDimensions([window.innerWidth, window.innerHeight])
    }, []);

    console.log(screenDimensions[0])

    return(
        <div className="header-container">
            <div className="header">
                <Image src={logo} alt={"Picture of Luke"} width={100} height={50} />

                <div className="menu-icon" onClick={openNav} style={{display: screenDimensions[0] <= 550 ? "flex" : "none"}}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </div>

            <div className='overlay' style={{height: (screenDimensions[0] <= 550 && navOpen) ? (screenDimensions[1] - 170) : 0}}>
                <div className="overlay-content">
                    <a className="header-item">
                        Home
                    </a>

                    <a className="header-item">
                        Weekly Specials
                    </a>

                    <a className="header-item">
                        Menu
                    </a>
                </div>

                <div className="overlay-footer" style={{display: navOpen ? "flex" : "none"}}>
                    <Image src={luke} alt={"Picture of Luke"} width={50} height={50} />
                    <p>Created by Jared Min</p>
                </div>
            </div>
        </div>
    )
}