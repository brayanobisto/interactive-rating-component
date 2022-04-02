import { useState } from 'react';
import Circle from '../Circle/Circle';
import star from '../../images/icon-star.svg';
import styles from './FeedbackCard.module.css';

function FeedbackCard({ handleChange, valoration, submitValoration }) {
  return (
    <form className={`card ${styles['feedback-card']}`} onSubmit={submitValoration}>
      <Circle>
        <img src={star} alt='Star' />
      </Circle>
      <h2>How did we do?</h2>
      <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <div className={styles['valoration-container']}>
        <Circle checked={valoration === '1' ? true : false}>
          <label htmlFor='one'>
            <input
              type='radio'
              id='one'
              name='valoration'
              value='1'
              checked={valoration === '1' ? true : false}
              onChange={handleChange}
            />
            1
          </label>
        </Circle>
        <Circle checked={valoration === '2' ? true : false}>
          <label htmlFor='two'>
            <input
              type='radio'
              id='two'
              name='valoration'
              value='2'
              checked={valoration === '2' ? true : false}
              onChange={handleChange}
            />
            2
          </label>
        </Circle>
        <Circle checked={valoration === '3' ? true : false}>
          <label htmlFor='three'>
            <input
              type='radio'
              id='three'
              name='valoration'
              value='3'
              checked={valoration === '3' ? true : false}
              onChange={handleChange}
            />
            3
          </label>
        </Circle>
        <Circle checked={valoration === '4' ? true : false}>
          <label htmlFor='three'>
            <input
              type='radio'
              id='three'
              name='valoration'
              value='4'
              checked={valoration === '4' ? true : false}
              onChange={handleChange}
            />
            4
          </label>
        </Circle>
        <Circle checked={valoration === '5' ? true : false}>
          <label htmlFor='three'>
            <input
              type='radio'
              id='three'
              name='valoration'
              value='5'
              checked={valoration === '5' ? true : false}
              onChange={handleChange}
            />
            5
          </label>
        </Circle>
      </div>
      <button>Submit</button>
    </form>
  );
}

export default FeedbackCard;
