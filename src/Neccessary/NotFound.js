import React, { useState, useEffect } from 'react';
import '../Styles/NotFound.css'; 

const NotFound = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 1000); // Slight delay before scaling down
    }, 4000); // 10 seconds delay before each animation starts

    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <div className="not-found-page">
      <h1 className={animate ? 'shake' : ''}>404 Page Not Found</h1>
      {/* Add any additional content you want on your 404 page */}
    </div>
  );
};

export default NotFound;
