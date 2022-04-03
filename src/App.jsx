import { useState, useEffect } from 'react';
import FeedbackCard from './components/FeedbackCard/FeedbackCard';
import ThankYouCard from './components/ThankYouCard/ThankYouCard';
import AttributionFooter from './components/AttributionFooter/AttributionFooter';

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [valoration, setValoration] = useState('');
  const [fadeOut, setFadeOut] = useState(false);

  const submitValoration = (evt) => {
    evt.preventDefault();
    if (valoration !== '') {
      setTimeout(() => {
        setFadeOut(true);

        setTimeout(() => {
          setSubmitted(true);
        }, 1000);
      }, 1000);
    }
  };

  const handleChangeValoration = (evt) => {
    setValoration(evt.target.value);
  };

  return (
    <div className="app-container">
      {!submitted ? (
        <FeedbackCard
          handleChangeValoration={handleChangeValoration}
          valoration={valoration}
          submitValoration={submitValoration}
          fadeOut={fadeOut}
        />
      ) : (
        <ThankYouCard valoration={valoration} />
      )}
      <AttributionFooter />
    </div>
  );
}

export default App;
