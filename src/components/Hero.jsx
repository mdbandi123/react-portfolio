import styles from './styles/Hero.module.css';

const Hero = () => {

    return(
        <>
            <section className={styles.heroSection}>
                <div className={styles.flexContainer}>
                    <div className={styles.heroTextOne}>
                        <span>Hello, World! I&apos;m</span>
                    </div>
                    <div className={styles.heroTextTwo}>
                        <span>
                            <span className={styles.lastNameText}>Sumang </span> {'<'}md{'/>'}
                        </span>
                    </div>
                    <div className={styles.heroTextThree}>
                        <span>a web developer</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;