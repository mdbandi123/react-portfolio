import Card from './UI/Card';
import styles from './styles/Projects.module.css';
import servisAdmin from '../assets/servis-admin.jpg';
import portfolio from '../assets/portfolio.jpg';
import rentABike from '../assets/rent-a-bike.jpg';
import { useState } from 'react';
import useObserver from './hooks/useObserver';

const Projects = () => {
    const [containerRefOne, isVisibleOne] = useObserver();
    const [containerRefTwo, isVisibleTwo] = useObserver();
    const [containerRefThree, isVisibleThree] = useObserver();

    return(
        <>
            <section className={styles.projectsSection} id='projects-page'>
                <div className={`${styles.skillBodyContainer} ${isVisibleOne?styles.show:styles.hidden}`} ref={containerRefOne}>
                    <div className={styles.skillsContainer}>
                        <div className={styles.headerContainer}>
                            <div className={styles.titleContainer}>
                                <h3>SerVIS</h3>
                            </div>
                            <div className={styles.linkContainer}>
                                <a href="https://github.com/mdbandi123/servis" target='_blank' rel="noopener noreferrer">
                                    <i className="devicon-github-original-wordmark"></i>
                                </a>
                            </div>
                        </div>
                        <div className={styles.descriptionContainer}>
                            <p>A smart menu order-taking application built using the MERN stack as a collaborative capstone project. </p>
                        </div>
                    </div>
                    <div className={styles.bodyContainer}>
                        <div className={styles.imageContainer}>
                            <img className={styles.imgOne} src={servisAdmin} alt="servis-admin" />
                        </div>
                    </div>
                </div>
                <div className={`${styles.skillBodyContainer} ${isVisibleTwo?styles.show:styles.hidden}`} ref={containerRefTwo}>
                    <div className={styles.skillsContainer}>
                        <div className={styles.headerContainer}>
                            <div className={styles.titleContainer}>
                                <h3>Rent-a-bike</h3>
                            </div>
                            <div className={styles.linkContainer}>
                                <a href="https://github.com/mdbandi123/bchain-app" target='_blank' rel="noopener noreferrer">
                                    <i className="devicon-github-original-wordmark"></i>
                                </a>
                            </div>
                        </div>
                        <div className={styles.descriptionContainer}>
                            <p>A blockchain-based bike rental application built using React and Solidity. </p>
                        </div>
                    </div>
                    <div className={styles.bodyContainer}>
                        <div className={styles.imageContainer}>
                            <img className={styles.imgOne} src={rentABike} alt="rent-a-bike" />
                        </div>
                    </div>
                </div>

                <div className={`${styles.skillBodyContainer} ${isVisibleThree?styles.show:styles.hidden}`} ref={containerRefThree}>
                    <div className={styles.skillsContainer}>
                        <div className={styles.headerContainer}>
                            <div className={styles.titleContainer}>
                                <h3>Personal Portfolio</h3>
                            </div>
                            <div className={styles.linkContainer}>
                                <a href="https://github.com/mdbandi123/react-portfolio" target='_blank' rel="noopener noreferrer">
                                    <i className="devicon-github-original-wordmark"></i>
                                </a>
                            </div>
                        </div>
                        <div className={styles.descriptionContainer}>
                            <p>My personal portfolio website that you&apos;re on right now. Built using React and Node.js </p>
                        </div>
                    </div>
                    <div className={styles.bodyContainer}>
                        <div className={styles.imageContainer}>
                            <img className={styles.imgOne} src={portfolio} alt="portfolio" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default Projects;