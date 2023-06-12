import Card from './UI/Card';
import styles from './styles/Projects.module.css';
import servisAdmin from '../assets/servis-admin.jpg';
import servisCustomer from '../assets/servis-customer.jpg';
import rentABike from '../assets/rent-a-bike.jpg';

const Projects = () => {
    return(
        <>
            <section className={styles.projectsSection} id='projects-page'>
                <Card>
                    <div className={styles.skillsContainer}>
                        <div className={styles.headerContainer}>
                            <div className={styles.titleContainer}>
                                <h3>SerVIS</h3>
                            </div>
                            <div className={styles.linkContainer}>
                                <a href="">
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
                </Card>

                <Card>
                    <div className={styles.skillsContainer}>
                        <div className={styles.headerContainer}>
                            <div className={styles.titleContainer}>
                                <h3>Rent-a-bike</h3>
                            </div>
                            <div className={styles.linkContainer}>
                                <a href="">
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
                </Card>

                <Card>
                    <div className={styles.skillsContainer}>
                        <div className={styles.headerContainer}>
                            <div className={styles.titleContainer}>
                                <h3>Personal Portfolio</h3>
                            </div>
                            <div className={styles.linkContainer}>
                                <a href="">
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
                            <img className={styles.imgOne} src={rentABike} alt="portfolio" />
                        </div>
                    </div>
                </Card>
            </section>
        </>
    )
};

export default Projects;