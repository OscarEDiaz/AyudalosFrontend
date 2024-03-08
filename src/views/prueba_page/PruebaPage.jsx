import { useNavigate } from "react-router-dom";
import React, { useState} from "react";
import { Navbar } from '../../components/navbar/Navbar';
import { initMercadoPago, CardPayment } from "@mercadopago/sdk-react";
import axios from 'axios';


import '../../styles/lading_page/landingPage.css';
import { useEffect } from "react";

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);


export const PruebaPage = () => {
        const navigate = useNavigate();
        
 
        const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []); 



  return message ? (
    <Message message={message} />
  ) : (
      <div>
      <Navbar />
      <div className='landing-page-main-frame'>
            <main className='hero-banner-main-frame'>
                <section>
                <div className="product">
                <img
                    src="https://i.imgur.com/EHyR2nP.png"
                    alt="The cover of Stubborn Attachments"
                />
                <div className="description">
                <h3>Stubborn Attachments</h3>
                <h5>$20.00</h5>
                </div>
                </div>
                <form action="http://localhost:3000/create-checkout-session" method="POST">
                    <button type="submit">
                        Checkout
                    </button>
                </form>
                </section>
            </main>
        </div>
      </div>
  );

    
        
};


export default function App() {
  }
