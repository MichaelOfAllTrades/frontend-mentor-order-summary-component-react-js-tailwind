import React from 'react';
import classnames from 'classnames';

import IllustrationHero from '../images/illustration-hero.svg';
import IconMusic from '../images/icon-music.svg';


export default function OrderSummary() {
  return (
    <div className={classnames(`mx-auto my-auto h-[580px] w-[350px] rounded-[20px] bg-[#ffffff] overflow-hidden text-center`)}>
      <div className={classnames(``)}>
        <img className={classnames(``)} src={IllustrationHero} alt="illustration hero" />
      </div>
      <div className={classnames(`p-[20px] bg-white h-full flex flex-col`)}>
        <h1 className={classnames(`text-[22px] mb-[20px] font-order-summary`)}>Order Summary</h1>
        <p className={classnames(`w-[90%] mx-auto mb-[20px] text-[#7280a7]`)}>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>

        <div className={classnames(`flex justify-between bg-[#f8f9fe] rounded-[15px] p-[18px] mb-[20px]`)}>
          <img className={classnames(``)} src={IconMusic} alt="iconmusic" />
          <div className={classnames(`relative right-[10px]`)}>
            <h4 className={classnames(`font-annual-plan`)}>Annual Plan</h4>
            <h4 className={classnames(`text-[#7280a7] text-[18px]`)}>$59.99/year</h4>
          </div>
          <a className={classnames(`flex`)}>
            <span className={classnames(`text-[#1f1294] underline my-auto`)}>Change</span>
          </a>
        </div>

        <button id="proceed-to-payment" className={classnames(`bg-[#382ae1] rounded-[10px] p-[13px] text-[#FFFFFF] mb-[20px] shadow-[0_0_35px_-15px_rgba(8,8,8,8)] font-proceed-to-payment`)}>Proceed to Payment</button>

        <a className={classnames(``)}><span>Cancel Order</span></a>
      </div>
    </div>
  );
}