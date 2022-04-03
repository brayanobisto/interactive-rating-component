import { useState, useEffect } from 'react';
import img from '../../images/illustration-thank-you.svg';
import styles from './ThankYouCard.module.css';

function ThankyouCard({ valoration }) {
  const [fadeIn, setfadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setfadeIn(true);
    }, 500);
  }, []);

  const className = fadeIn
    ? `card ${styles['thankyou-card']} ${styles['fade-in']}`
    : `card ${styles['thankyou-card']}`;

  return (
    <div className={className}>
      <div>
        <img src={img} alt="Thank you ilustration" />
        <span>You selected {valoration} out of 5</span>
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need more support,
          don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}

export default ThankyouCard;
