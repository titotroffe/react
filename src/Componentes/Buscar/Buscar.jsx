import { useState } from 'react';
import './Buscar.css'
import datosGoleadores from '../../Data/dataEstadisticas'

function Buscar() {
    const [busqueda, setBusqueda] = useState("");

    const jugadoresFiltrados = datosGoleadores.filter((jugador) =>
        jugador.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div className="buscador" id='buscar'>
            <h2>Buscar Jugadores</h2>
            <input
                type="text"
                placeholder="Buscar por nombre..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="buscador-input"
            />
            <table className="tabla-jugadores">
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Goles</th>
                    <th>Partidos</th>
                </tr>
                </thead>
                <tbody>
                {jugadoresFiltrados.length > 0 ? (
                    jugadoresFiltrados.map((jugador, index) => (
                    <tr key={index}>
                    <td>{jugador.nombre}</td>
                    <td>{jugador.goles}</td>
                    <td>{jugador.partidos}</td>
                    </tr>
                ))) : (
                    <tr>
                    <td colSpan="3">No se encontraron resultados.</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
    }

export default Buscar;