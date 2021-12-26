import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import formatTimer from '../../utils/FormatTimer';
import './styles/CountdownContainer.css';

function CountdownContainer({ count, handleDetails, id }) {
  const [seconds, setSeconds] = useState(count);

  const [timer, setTimer] = useState(formatTimer(seconds));

  const [mounted, setMounted] = useState(true);

  useEffect(() => {
      setMounted(true)
      if (mounted) {
        setTimer(formatTimer(seconds));
        if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
        }
      }
      return function cleanup() {
          setMounted(false)
      }
  }, [seconds]);
  return (
    <div className="countdown-container__wrapper">
      <span>{timer}</span>
      <Button onClick={() => handleDetails(id, seconds)} variant="danger">
        Go To Detail
      </Button>
    </div>
  );
};

CountdownContainer.propTypes = {
    count: PropTypes.number.isRequired,
    handleDetails: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
};

export default CountdownContainer;
