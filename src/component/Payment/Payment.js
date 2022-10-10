import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addPayment } from "../../store/favorite";
import './Payment.css'
import { toast } from 'react-toastify';
export default function Payment() {


    let cardNumberRef = useRef(null);

    const cvvRef = useRef(null);
    const dispatch = useDispatch();

    const handlePayment = (e)=>{
        e.preventDefault()
        cardNumberRef.current.value = Math.floor((cardNumberRef.current.value-'')/100000000 )
        const data = {
            cardNumber:cardNumberRef.current.value,
            cvv:cvvRef.current.value,
            expirationDate:"2024-2-2"
        }
   dispatch(addPayment(data))
   cardNumberRef.current.value = null
   cvvRef.current.value = null
    }
    return(
      
      <div className='payment-container'>
        {/* { toast.error(`To add more services You should upgrade Your subscription`)} */}
 
  <div id="wrapper">
    <div id="container">
      <div id="left-col">
        <div id="left-col-cont">
          <h2>Summary</h2>
          <div className="item">
            <div className="img-col">
              <img src="https://img.icons8.com/doodle/48/000000/last-24-hours--v1.png" alt="" />
            </div>
            <div className="meta-col">
              <h3>Our Services</h3>
              <p className="price">24 hrs available</p>
            </div>
          </div>
          <div className="item">
            <div className="img-col">
              <img src="https://img.icons8.com/officel/80/000000/card-security.png" alt="" />
            </div>
            <div className="meta-col">
              <h3>Payment</h3>
              <p className="price">Secured</p>
            </div>
          </div>
          <div className="item">
            <div className="img-col">
              <img src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/32/000000/external-infinity-design-thinking-kmg-design-glyph-kmg-design.png" alt="" />
            </div>
            <div className="meta-col">
              <h3>Premium Subscription</h3>
              <p className="price">$10</p>
            </div>
          </div>
          
        </div>
      </div>
      <div id="right-col">
        <h2>Payment</h2>
        <div id="logotype">
          <img
            id="mastercard"
            src="http://emilcarlsson.se/assets/MasterCard_Logo.png"
            alt=""
          />
        </div>
        <form action="" onSubmit={handlePayment}>
          <label htmlFor="" >Cardnumber</label>
          <div id="cardnumber">
            <input
              placeholder={'4040 xxxx xxxx xxxx'}
              ref={cardNumberRef}
      
            />
        
          </div>
          <label htmlFor="">Cardholder</label>
          <input id="cardholder" type="text" placeholder="John Doe" />
          <div className="left">
            <label htmlFor="">Expiration Date</label>
            <select name="month" id="month" onchange="" size={1}>
              <option value={0}>Month</option>
              <option value={1}>January</option>
              <option value={2}>February</option>
              <option value={3}>March</option>
              <option value={4}>April</option>
              <option value={5}>May</option>
              <option value={6}>June</option>
              <option value={7}>July</option>
              <option value={8}>August</option>
              <option value={9}>September</option>
              <option value={10}>October</option>
              <option value={11}>November</option>
              <option value={12}>December</option>
            </select>
            <select name="year" id="year" onchange="" size={1}>
              <option value={0}>Year</option>
              <option value={1}>2016</option>
              <option value={2}>2017</option>
              <option value={3}>2018</option>
              <option value={4}>2019</option>
              <option value={5}>2020</option>
              <option value={6}>2021</option>
              <option value={7}>2022</option>
              <option value={8}>2023</option>
              <option value={9}>2024</option>
              <option value={10}>2025</option>
            </select>
          </div>
          <div className="right">
            <label id="cvc-label" htmlFor="">
              CVC <i className="fa fa-question-circle-o" aria-hidden="true" />
            </label>
            <input id="cvc" type="text" placeholder={123} maxLength={3} ref={cvvRef} />
          </div>
          <button id="purchase">Purchase</button>
          <button id="paypal">
            <i className="fa fa-paypal" aria-hidden="true" /> Pay with PayPal
          </button>
          <p id="support">
            Having problem with checkout? <a href="#">Contact our support</a>.
          </p>
        </form>
      </div>
    </div>
  </div>
</div>

       
    )
}