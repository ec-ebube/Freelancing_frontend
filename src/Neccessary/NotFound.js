import React, { useState, useEffect } from 'react';
import '../Styles/NotFound.css';

const NotFound = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 3000); // Slight delay before scaling down
    }, 6000); // 10 seconds delay before each animation starts

    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <div className="not-found-page">
      <div className="notFound">
        <h1 className="four04">404</h1>
        <h2 className={animate ? 'shaking' : 'shake'}>Page Not Found</h2>
        <p className="noContent">
          Go back to <a href="/">Home Page</a>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
