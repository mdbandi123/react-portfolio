import styles from '../components/styles/Navbar.module.css';
import linkedinIcon from '../assets/linkedin-icon.svg';
import githubIcon from '../assets/github-icon.svg';
import discordIcon from '../assets/discord-icon.svg';
import siteIcon from '../assets/site-icon-bw.svg';

const Navbar = () => {
    return(
        <>
            <nav className={styles.navContainer}>
                <div className={styles.logoContainer}>
                    <a href="" target='blank'>
                        <img src={siteIcon} alt="site-icon" />
                    </a>
                </div>
                <div className={styles.linkContainer}>
                    <a id={styles.contactLink} href="">Contact</a>
                    <a id={styles.projectsLink} href="">Projects</a>
                    <a id={styles.aboutLink} href="">About</a>
                </div>
                <div className={styles.socialsContainer}>
                    <a href="https://www.linkedin.com/in/michael-dave-sumang-0532b2259/" target='blank'>
                        <img src={linkedinIcon} alt="linkedin-logo" />
                    </a>
                    <a href="https://github.com/mdbandi123" target='blank'>
                        <img src={githubIcon} alt="github-logo" />
                    </a>
                    <a href="https://discordapp.com/users/172165007222505472" target='blank'>
                        <img src={discordIcon} alt="discord-logo" />
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Navbar;