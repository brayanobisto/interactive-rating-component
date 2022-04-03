import Circle from '../Circle/Circle';
import star from '../../images/icon-star.svg';
import styles from './FeedbackCard.module.css';

function FeedbackCard({ handleChangeValoration, valoration, submitValoration, fadeOut }) {
  const clasName = fadeOut
    ? `card ${styles['feedback-card']} ${styles['fade-out']}`
    : `card ${styles['feedback-card']}`;

  return (
    <form className={clasName} onSubmit={submitValoration}>
      <Circle>
        <img src={star} alt="Star" />
      </Circle>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is appreciated
        to help us improve our offering!
      </p>
      <div className={styles['valoration-container']}>
        <Circle>
          <label htmlFor="one" className={valoration === '1' ? styles.checked : ''}>
            <input
              type="radio"
              id="one"
              name="valoration"
              value="1"
              checked={valoration === '1' ? true : false}
              onChange={handleChangeValoration}
            />
            1
          </label>
        </Circle>
        <Circle>
          <label htmlFor="two" className={valoration === '2' ? styles.checked : ''}>
            <input
              type="radio"
              id="two"
              name="valoration"
              value="2"
              checked={valoration === '2' ? true : false}
              onChange={handleChangeValoration}
            />
            2
          </label>
        </Circle>
        <Circle>
          <label htmlFor="three" className={valoration === '3' ? styles.checked : ''}>
            <input
              type="radio"
              id="three"
              name="valoration"
              value="3"
              checked={valoration === '3' ? true : false}
              onChange={handleChangeValoration}
            />
            3
          </label>
        </Circle>
        <Circle>
          <label htmlFor="four" className={valoration === '4' ? styles.checked : ''}>
            <input
              type="radio"
              id="four"
              name="valoration"
              value="4"
              checked={valoration === '4' ? true : false}
              onChange={handleChangeValoration}
            />
            4
          </label>
        </Circle>
        <Circle>
          <label htmlFor="five" className={valoration === '5' ? styles.checked : ''}>
            <input
              type="radio"
              id="five"
              name="valoration"
              value="5"
              checked={valoration === '5' ? true : false}
              onChange={handleChangeValoration}
            />
            5
          </label>
        </Circle>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FeedbackCard;
