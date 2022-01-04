import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Menu from './components/Menu';
import Header from './components/Header';
import WeeklySpecials from './components/WeeklySpecials';

export default function Home() {
    return (
        <div className="main-container">
            <Header/>
            <div className='intro'>
                
            </div>
            <WeeklySpecials/>
            <Menu/>
        </div>
    )
}
