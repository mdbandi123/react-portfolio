import styles from '../styles/Card.module.css';

const Card = (props) => {
    return(
        <>
            <div className={props.isBlack ? styles.cardBlack : styles.card}>
                {props.children}
            </div>
        </>
    )
};

export default Card;