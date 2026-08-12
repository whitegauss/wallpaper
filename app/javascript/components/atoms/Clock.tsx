import React, { useEffect, useState } from 'react';

const TIME_ZONE = 'Asia/Tokyo';

const timeFormatter = new Intl.DateTimeFormat('ja-JP', {
  timeZone: TIME_ZONE,
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
});

const dateFormatter = new Intl.DateTimeFormat('ja-JP', {
  timeZone: TIME_ZONE,
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'short',
});

const Clock: React.FC = () => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock-widget text-white">
      <div className="text-6xl font-bold tracking-tighter tabular-nums">
        {timeFormatter.format(now)}
      </div>
      <div className="text-sm font-medium text-gray-300">
        {dateFormatter.format(now)}
      </div>
    </div>
  );
};

export default Clock;
