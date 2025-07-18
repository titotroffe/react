import './Campania.css'

function Campania ({data}){

    const { titulo, descripcion } = data[0]; 

    return(
        <article className="campania" id='campania'>
            <h2>Campaña Destacada del Mes</h2>
            <h3 className='titulo-campania'>{titulo}</h3>
            <p>{descripcion}</p>
            <table>
                <caption>Estadísticas de la Temporada 1958</caption>
                <thead>
                    <tr>
                        <th>Fase</th>
                        <th>Jugados</th>
                        <th>Ganados</th>
                        <th>Empates</th>
                        <th>Perdidos</th>
                        <th>Puntos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Preparación</td>
                        <td>1</td>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Fase Regular*</td>
                        <td>9</td>
                        <td>6</td>
                        <td>1</td>
                        <td>2</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>Desempate</td>
                        <td>3</td>
                        <td>2</td>
                        <td>0</td>
                        <td>1</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td>13</td>
                        <td>8</td>
                        <td>1</td>
                        <td>4</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>                    
            <table>
                <caption>Goleadores por Fase</caption>
                <thead>
                    <tr>
                        <th>Jugador</th>
                        <th>Preparación</th>
                        <th>Fase Regular</th>
                        <th>Desempate</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ezquerra</td>
                        <td>1</td>
                        <td>11</td>
                        <td>6</td>
                        <td>18</td>
                    </tr>
                    <tr>
                        <td>Maccalucci</td>
                        <td>0</td>
                        <td>3</td>
                        <td>1</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Oyolas</td>
                        <td>1</td>
                        <td>3</td>
                        <td>0</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Gorrassi</td>
                        <td>0</td>
                        <td>3</td>
                        <td>1</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Otranto</td>
                        <td>0</td>
                        <td>2</td>
                        <td>2</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>Casella</td>
                        <td>0</td>
                        <td>2</td>
                        <td>0</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>Catalano</td>
                        <td>0</td>
                        <td>1</td>
                        <td>0</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>            
            <p>* La última fecha Siderurgia Argentina no se presentó.</p>
            <p>Total de goles: A favor 37, En contra 30</p>
        </article>
    );
}

export default Campania;