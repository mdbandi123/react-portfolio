import styles from './styles/AboutMe.module.css';
import mdPic from '../assets/md-pic.png';
import Card from './UI/Card';
import { useRef, useState, useEffect} from 'react';
import useObserver from './hooks/useObserver'

const AboutMe = () => {

    const [containerRef, isVisible] = useObserver();

    return(
        <>
        <section id='about-page' className={`${styles.aboutMeSection} ${isVisible?styles.show:styles.hidden}`}>
                <div className={`${styles.aboutMeCard}`} ref={containerRef}>
                        <div className={styles.explainerContainer} >
                            <h2>About Me</h2>
                            <p>Hey there! I&apos;m Michael Dave Sumang {'('}but most people just call me MD{')'}. With a degree in Bachelor of Science in Information Technology, I&apos;m a web developer based out in San Fernando, Pampanga, Philippines. I am interested in making modern and sleek looking websites.</p>
                        </div>
                        <div className={styles.pfpContainer}>    
                            <img className={styles.pfpImg} src={mdPic} alt="md-pic" />
                        </div>
                    </div>
                <div className={styles.skillsCard}>
                    <div className={styles.skillsContainer}>
                    <h3>Technical Skills</h3>
                        <ul>
                            <li>
                                <i className="devicon-html5-plain"></i>
                            </li>
                            <li>
                                <i className="devicon-css3-plain"></i>
                            </li>
                            <li>
                                <i className="devicon-javascript-plain"></i>
                            </li>
                            <li>
                                <i className="devicon-react-original"></i> 
                            </li>
                            <li>
                                <i className="devicon-nodejs-plain"></i>
                            </li>
                            <li>
                                <i className="devicon-git-plain"></i> 
                            </li>
                            <li>
                                <i className="devicon-java-plain"></i>
                            </li>
                            <li>
                                <i className="devicon-python-plain"></i>
                            </li>
                            <li>
                                <i className="devicon-mysql-plain"></i>
                            </li>
                        </ul>
                    </div>
                </div>
        </section> 
        </>
    )
}

export default AboutMe;