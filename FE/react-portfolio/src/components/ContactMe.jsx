import { useState } from 'react';
import Card from './UI/Card';
import styles from './styles/ContactMe.module.css';
import axios from 'axios';
import useObserver from './hooks/useObserver'

const ContactMe =  () => {
    const [containerRef, isVisible] = useObserver();

    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [subject,setSubject] = useState();
    const [message,setMessage] = useState();
    const [buttonTitle, setButtonTitle] = useState('Send Message');
    const [isDisabled, setIsDisabled] = useState(false);

    const nameHandler = (e) => {
        setName(e.target.value);
    }
    const emailHandler = (e) => {
        setEmail(e.target.value);
    }
    const subjectHandler = (e) => {
        setSubject(e.target.value);
    }
    const messageHandler = (e) => {
        setMessage(e.target.value);
    }


    const submitHandler = (e) => {
        e.preventDefault();

        setIsDisabled(true);

        let formData = {
            name: name,
            email: email,
            subject: subject,
            message: message,
        }

        axios.post(import.meta.env.VITE_PORT, formData)
        .then(res => {
            console.log('Request Succeeded');
            setButtonTitle('Message Sent');
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
    
            setTimeout(()=>{
                setIsDisabled(false);
            },300)

            setTimeout(()=>{
                setButtonTitle('Send Message');
            }, 2000);
        })
        .catch(err => {
            console.log(err);
            setButtonTitle('Message Not Sent');
            setTimeout(()=>{
                setIsDisabled(false);
            },300)

            setTimeout(()=>{
                setButtonTitle('Send Message');
            }, 2000);
        })
    }


    return(
    <>
        <section className={`${styles.ContactMeSection} ${isVisible?styles.show:styles.hidden}`} id='contact-page' ref={containerRef}>
            <div className={styles.formContainer}>
                <h2>Contact Me</h2>
                <div>
                    <form className={styles.contactForm} onSubmit={submitHandler} >
                        <input type="text" id="name" placeholder='Full Name' onChange={nameHandler} value={name} disabled={isDisabled} required/>
                        <input type="email" id="email" placeholder='Email' onChange={emailHandler} value={email} disabled={isDisabled} required/>
                        <input type="text" id="subject" placeholder='Subject' onChange={subjectHandler} value={subject} disabled={isDisabled} required/>
                        <textarea id="message" placeholder="Message" cols="30" rows="10" onChange={messageHandler} value={message} disabled={isDisabled} required></textarea>
                        <button type="submit" disabled={isDisabled}>{buttonTitle}</button>
                    </form>
                    </div><div className = {`${styles.overlay} ${isDisabled?styles.overlayShown:''}`}>
                </div>
            </div>
        </section>
    </>
    )
}

export default ContactMe;
