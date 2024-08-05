import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Destino from '../components/destino';
import FormDestino from '../components/formDestino';
import '../App.css'

function Home() {


    return (
        <div className="App">
            <Header />
            <h1>Bem vindo ao sistema de viagens!</h1>
            <Footer />
        </div>
    );
}

export default Home;