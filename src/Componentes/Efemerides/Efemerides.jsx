import { useState } from 'react';
import './Efemerides.css';

function Efemerides({ data }) {
const [index, setIndex] = useState(0);

const handleNext = () => {
    setIndex((prev) => (prev + 1) % data.length);
};

const handlePrev = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
};

const efemeride = data[index];

return (
    <article className="efemerides">
        <h2>{efemeride.titulo}</h2>
        <img src={efemeride.imagen} alt={`Foto ${efemeride.titulo}`} />
        <p>{efemeride.descripcion}</p>
        <div className="Botones">
            <button onClick={handlePrev}>⬅️</button>
            <button onClick={handleNext}>➡️</button>
        </div>
    </article>
);
}

export default Efemerides;
