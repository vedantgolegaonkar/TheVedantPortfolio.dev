import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const Loader = () => {
  const [fadeOut, setFadeOut] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    
    const fadeTimer = setTimeout(() => {
      setFadeOut(true); 
    }, 9050);

    
    const redirectTimer = setTimeout(() => {
      navigate('/home');
    }, 10000);

    
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <div className={`loader-container ${fadeOut ? 'fade-out' : ''}`}>
      <div className='loader'>
        <div className='finger finger-1'>
          <div className='finger-item'>
            <span></span><i></i>
          </div>
        </div>
        <div className='finger finger-2'>
          <div className='finger-item'>
            <span></span><i></i>
          </div>
        </div>
        <div className='finger finger-3'>
          <div className='finger-item'>
            <span></span><i></i>
          </div>
        </div>
        <div className='finger finger-4'>
          <div className='finger-item'>
            <span></span><i></i>
          </div>
        </div>
        <div className='last-finger'>
          <div className='last-finger-item'><i></i></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
