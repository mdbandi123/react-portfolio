import { useRef, useState } from 'react';
import styles from './styles/Hero.module.css';
import { useEffect } from 'react';
import useObserver from './hooks/useObserver';

const Hero = () => {
    const [isBlinking, setIsBlinking] = useState(false);
    const [containerRef, isVisible] = useObserver();
    

    useEffect(()=>{
        const interval = setInterval(()=>{
            setIsBlinking(!isBlinking);
        },1000);

        return () => clearInterval(interval);
    },[isBlinking])

    return(
        <>
            <section className={styles.heroSection} id='hero-page' ref={containerRef}>
                <div className={`${styles.flexContainer}`}>
                    <div className={`${styles.heroTextOne} ${isVisible?styles.show:styles.hiddenLeft}`}>
                        <span>Hello, World!</span>
                    </div>
                    <div className={`${styles.heroTextTwo} ${isVisible?styles.show:styles.hiddenRight}`}>
                        <span>
                            <span className={styles.lastNameText}>I&apos;m MD Sumang</span>
                        </span>
                    </div>
                    <div className={`${styles.heroTextThree} ${isVisible?styles.show:styles.hiddenLeft}`}>
                        <span>{'<'}web developer{'/>'} <span className={isBlinking?styles.isBlinkingOn: styles.isBlinkingOff}>|</span></span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;