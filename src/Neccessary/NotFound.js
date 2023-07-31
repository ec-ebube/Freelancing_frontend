import React, { useState, useEffect } from 'react';
import '../Styles/NotFound.css'; 

const NotFound = () => {
    const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const animationInterval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 1000); // Duration of each animation shake
    }, 10000); // 10 seconds delay before each animation starts

    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <div className={`not-found-page ${animate ? 'shake' : ''}`}>
      <h1>404 Page Not Found</h1>
      {/* Add any additional content you want on your 404 page */}
    </div>
  );
};

 
export default NotFound;