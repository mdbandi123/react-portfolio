import Card from './UI/Card';
import styles from './styles/ContactMe.module.css';

const ContactMe =  () => {
    return(
        <>
            <section className={styles.ContactMeSection} id='contact-page'>
                <Card isBlack='true'>
                    <div>
                        <h2>Contact Me</h2>
                        <div>
                            <form className={styles.contactForm}>
                                <input type="text" id="name" placeholder='Full Name'/>
                                <input type="email" id="email" placeholder='Email' />
                                <input type="text" id="subject" placeholder='Subject'/>
                                <textarea id="message" placeholder="Message" cols="30" rows="10"></textarea>
                                <button type="submit">Send Message</button>
                            </form>
                        </div>
                    </div>
                </Card>
            </section>
        </>
    )
}

export default ContactMe;
