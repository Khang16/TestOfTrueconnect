import React, { useState, useEffect, useCallback } from 'react';
import dayjs from 'dayjs';
import { JSX } from 'react/jsx-runtime';

interface CountdownTimerProps {
  targetDate: string; 
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const calculateTimeLeft = useCallback(() => {
    const difference = dayjs(targetDate).diff(dayjs());
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }; 
    }

    return timeLeft;
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, calculateTimeLeft]);

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval, index) => {
    const value = timeLeft[interval as keyof typeof timeLeft];
    if (value !== undefined) {
      timerComponents.push(
        <div key={interval} className="flex flex-col items-center mx-8 px-28">
          <span className="text-white text-6xl  font-bold leading-none">
            {String(value).padStart(2, '0')}
          </span>
          <span className="text-white text-[2rem] md:text-xl uppercase font-semibold mt-2">
            {interval === 'days' ? 'Days' : interval === 'hours' ? 'Hour' : interval === 'minutes' ? 'Minutes' : 'Seconds'}
          </span>
        </div>
      );
    }
  });

  return (
    <div className="flex justify-center items-center">
      {timerComponents.length ? timerComponents : <span>Countdown Finished!</span>}
    </div>
  );
}