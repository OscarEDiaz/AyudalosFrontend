import { useNavigate } from "react-router-dom";
import React, { useState} from "react";
import { Navbar } from '../../components/navbar/Navbar';
import { initMercadoPago, CardPayment } from "@mercadopago/sdk-react";
import axios from 'axios';


import '../../styles/lading_page/landingPage.css';
import { useEffect } from "react";

export const PruebaPage = () => {
    const navigate = useNavigate();
    initMercadoPago('APP_USR-a3d6b4ae-180f-4fb9-8a43-d825dc5796f1'); 
    
    
    
        
                return (
        <div className='landing-page-main-frame'>
            <Navbar />
            <main className='hero-banner-main-frame'>
                <CardPayment initialization={{ amount: 50}} onSubmit={async (param) => {
                    axios({
                        method: 'post',
                        url: 'http://localhost:3000/process_payment',
                        data: param
                    })
                    .then(console.log(JSON.stringify(param)))}}/>
            </main>
        </div>
    )

}
