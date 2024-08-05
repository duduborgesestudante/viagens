import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Destino from '../components/destino';
import FormDestino from '../components/formDestino';
import '../App.css'

function Contato() {


    return (
        <div className="App">
            <Header />
            <div className='contatos'>
                <h3>Whatsapp:</h3>
                <p>(48) 99100-2911</p>
                <a href="wa.me/51985836686"><button className='contate-me'>Contate-me</button></a>
            </div>
            <Footer />
        </div>
    );
}

export default Contato;