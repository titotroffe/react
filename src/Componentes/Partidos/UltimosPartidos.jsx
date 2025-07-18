import { useState } from 'react';
import './Partidos.css';

function UltimosPartidos({ data }) {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % data.length);
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + data.length) % data.length);
    };

    const partido = data[index];

    return (
            <aside className="ultpartido">
                <h2>Ultimos Partidos</h2>
                <h3>{partido.fecha}</h3>
                <div className="equipos">
                    <div className="equipo">
                        <img src={partido.escudoL} alt={`Escudo ${partido.nombreL}`} />
                        <p className="local">{partido.nombreL}</p>
                        <p className="golL">{partido.golL}</p>
                    </div>
                    <div className="equipo">
                        <img src={partido.escudoV} alt={`Escudo ${partido.nombreV}`} />
                        <p className="visitante">{partido.nombreV}</p>
                        <p className="golV">{partido.golV}</p>
                    </div>
                </div>
                <p className="resultado">{partido.detalle}</p>
                <div className="Botones">
                    <button onClick={handleNext}>⬅️</button>
                    <button onClick={handlePrev}>➡️</button>
                </div>
            </aside>
    );
}

export default UltimosPartidos;
