import React from 'react';

const Pagamento = ({ subtotal, finalizarCompra }) => {
    return (
        <div className='pagamentos'>
            <h2>Pagamento</h2>
            <p>Total: R${subtotal}</p>
            <div>
                <button onClick={finalizarCompra}>Finalizar Compra com PIX</button>
                <button onClick={finalizarCompra}>Finalizar Compra com Cartão de Crédito</button>
            </div>
        </div>
    );
};

export default Pagamento;