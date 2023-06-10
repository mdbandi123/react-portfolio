import { useState } from 'react';
import styles from './styles/Hero.module.css';
import { useEffect } from 'react';

const Hero = () => {
    const [isBlinking, setIsBlinking] = useState(false);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setIsBlinking(!isBlinking);
        },1000);

        return () => clearInterval(interval);
    },[isBlinking])
    return(
        <>
            <section className={styles.heroSection}>
                <div className={styles.flexContainer}>
                    <div className={styles.heroTextOne}>
                        <span>Hello, World!</span>
                    </div>
                    <div className={styles.heroTextTwo}>
                        <span>
                            <span className={styles.lastNameText}>I&apos;m MD Sumang</span>
                        </span>
                    </div>
                    <div className={styles.heroTextThree}>
                        <span>{'<'}web developer{'/>'} <span className={isBlinking?styles.isBlinkingOn: styles.isBlinkingOff}>|</span></span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;