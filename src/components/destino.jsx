import React from 'react';
import '../App.css'
const Destino = ({ nome, descricao, distancia }) => {
    const [dataIda, setDataIda] = useState('');
    const [dataVolta, setDataVolta] = useState('');
    const [tipoEstalagem, setTipoEstalagem] = useState('padrão');
    const [participantes, setParticipantes] = useState(1);
    const [subtotal, setSubtotal] = useState(0);
    useEffect(() => {
        if (dataIda && dataVolta) {
            const custo = calcularCustos(distancia, dataIda, dataVolta, tipoEstalagem, participantes);
            setSubtotal(custo);
        }
    }, [dataIda, dataVolta, tipoEstalagem, participantes]);

    return (
        <div className="destino">
            <h2>{nome}</h2>
            <p>{descricao}</p>
            <p>Distância: {distancia} km</p>
            <label>Data de Ida:
                <input type="date" value={dataIda} onChange={(e) => setDataIda(e.target.value)} />
            </label>
            <label>Data de Volta:
                <input type="date" value={dataVolta} onChange={(e) => setDataVolta(e.target.value)} />
            </label>
            <label>Tipo de Estalagem:
                <select value={tipoEstalagem} onChange={(e) => setTipoEstalagem(e.target.value)}>
                    <option value="padrão">Padrão</option>
                    <option value="luxo">Luxo</option>
                </select>
            </label>
            <label>Número de Participantes:
                <input type="number" value={participantes} onChange={(e) => setParticipantes(e.target.value)} min="1" />
            </label>
            <p>Subtotal: R${subtotal}</p>
        </div>
    );
};


export default Destino;
