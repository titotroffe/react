import './App.css';
import Header from './Componentes/Header/Header';
import Efemerides from './Componentes/Efemerides/Efemerides';
import ProximosPartidos from './Componentes/Partidos/ProximosPartidos';
import UltimosPartidos from './Componentes/Partidos/UltimosPartidos';
import Campania from './Componentes/Campania/Campania';
import proxPartidos from './Data/proxPartidos';
import ultPartidos from './Data/ultPartidos';
import dataEfemerides from './Data/dataEfemerides';
import dataCampania from './Data/dataCampania';
import Buscar from './Componentes/Buscar/Buscar';
import Carrito from './Componentes/Carrito/Carrito';
import dataCarrito from './Data/dataCarrito';
import Contacto from './Componentes/Contacto/Contacto';
import Footer from './Componentes/Footer/Footer';
import MostrarCarrito from './Componentes/Carrito/MostrarCarrito';

function App() {
  return (
    <>
      <Header />
      <section id='inicio'>
        <Efemerides data={dataEfemerides} />
        <div className="partidos">
          <ProximosPartidos data={proxPartidos} />
          <UltimosPartidos data={ultPartidos} />
        </div>
        <Campania data={dataCampania}/>
        <MostrarCarrito/>
        {dataCarrito.map((carrito, index) => (
          <Carrito key={index} id={carrito.id}titulo={carrito.titulo} imagen={carrito.imagen} detalle={carrito.detalle} precio={carrito.precio} />
        ))}
        <Buscar/>
        <Contacto/>
        <Footer />
      </section>
    </>
  );
}

export default App;
