import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (height > 0) {
        const scrolled = (winScroll / height) * 100;
        setScroll(scrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="progress-bar-container">
      <div
        className="h-full bg-gradient-to-r from-violet-600 via-purple-500 to-indigo-400 transition-all duration-100 ease-out shadow-[0_0_10px_rgba(139,92,246,0.6)]"
        style={{ width: `${scroll}%` }}
      />
    </div>
  );
};

export default ProgressBar;
