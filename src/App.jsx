import { useState } from 'react';
import FeedbackCard from './components/FeedbackCard/FeedbackCard';
import ThankYouCard from './components/ThankYouCard/ThankYouCard';

function App() {
  const [submited, setSubmited] = useState(false);
  const [valoration, setValoration] = useState('');

  const submitValoration = (evt) => {
    evt.preventDefault();
    if (valoration !== '') setSubmited(true);
  };

  const handleChange = (evt) => {
    setValoration(evt.target.value);
  };

  return (
    <div className='app-container'>
      {!submited ? (
        <FeedbackCard handleChange={handleChange} valoration={valoration} submitValoration={submitValoration} />
      ) : (
        <ThankYouCard valoration={valoration} />
      )}
    </div>
  );
}

export default App;
