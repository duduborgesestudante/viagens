import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Destino from '../components/destino';
import FormDestino from '../components/formDestino';
import '../App.css'
const calcularCustos = (distancia, dataIda, dataVolta, tipoEstalagem, participantes) => {
    const hoje = new Date();
    const ida = new Date(dataIda);
    const volta = new Date(dataVolta);
    const diasEstadia = (volta - ida) / (1000 * 60 * 60 * 24);
    const semanasEstadia = Math.ceil(diasEstadia / 7);
    let custoVoo = distancia > 2000 ? 2 * 1500 : 1500;
    if ((ida - hoje) < (2 * 30 * 24 * 60 * 60 * 1000)) {
        custoVoo = 1500;
    }
    if (distancia > 2000) {
        custoVoo += (distancia - 2000);
    }

    const custoEstalagem = tipoEstalagem === 'luxo' ? 700 : 400;
    const custoTotalEstalagem = semanasEstadia * custoEstalagem * (1 + (participantes - 1) * 0.25);

    return custoVoo + custoTotalEstalagem;
};

function Destinos() {
    const [destinos, setDestinos] = useState([
        { nome: 'Paris', descricao: 'A cidade do amor.', distancia: 9377 },
        { nome: 'Nova York', descricao: 'A cidade que nunca dorme.', distancia: 7681 },
        { nome: 'Tóquio', descricao: 'A capital do Japão.', distancia: 18400 },
        { nome: 'Rio de Janeiro', descricao: 'Cidade maravilhosa.', distancia: 436 },
        { nome: 'Londres', descricao: 'A capital da Inglaterra.', distancia: 9350 },
        { nome: 'Roma', descricao: 'A cidade eterna.', distancia: 9211 },
        { nome: 'Sydney', descricao: 'A capital da Nova Gales do Sul.', distancia: 13851 },
        { nome: 'Cairo', descricao: 'A maior cidade do mundo árabe.', distancia: 10263 },
        { nome: 'Moscou', descricao: 'A capital da Rússia.', distancia: 11795 },
        { nome: 'Pequim', descricao: 'A capital da China.', distancia: 17856 }
    ]);
    const adicionarDestino = (novoDestino) => {
        setDestinos([...destinos, novoDestino]);
    };

    return (
        <div className="App">
            <Header />
            <FormDestino adicionarDestino={adicionarDestino} />
            {destinos.map((destino, index) => (
                <Destino key={index} nome={destino.nome} descricao={destino.descricao} />
            ))}
            <Footer />
        </div>
    );
}

export default Destinos;