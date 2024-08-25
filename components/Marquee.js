// components/ContinuousMarquee.js
"use client"
import React from 'react';
import Marquee from 'react-marquee-slider';
// import styles from './ContinuousMarquee.module.css';

const ContinuousMarquee = () => {
  return (
    <div className="overflow-hidden">
    <Marquee velocity={25} scatterRandomly={false} resetAfterTries={200} loop={0}>
      <div className="inline-block  mx-16 font-semibold rounded-md text-center">3% Off on UPI Payment</div>
      <div className="inline-block  mx-16 font-semibold rounded-md text-center">18% GST benefits on Business Purchases</div>
      <div className="inline-block  mx-16 font-semibold rounded-md text-center">3% Off on UPI Payment</div>
      <div className="inline-block  mx-16 font-semibold rounded-md text-center">18% GST benefits on Business Purchases</div>
      <div className="inline-block  mx-16 font-semibold rounded-md text-center">3% Off on UPI Payment</div>
      <div className="inline-block  mx-16 font-semibold rounded-md text-center">18% GST benefits on Business Purchases</div>
      {/* Add more items as needed */}
    </Marquee>
  </div>
  );
};

export default ContinuousMarquee;
