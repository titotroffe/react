import './Header.css';

function Header({}) {
return(
    <header className="header">
        <h1>Argentino Oeste y su historia</h1>
        <nav>
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#campania">Campaña destacada</a></li>
                <li><a href="#carrito">Tienda oficial</a></li>
                <li><a href="#buscar">Buscar jugador</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>
);
}
export default Header;