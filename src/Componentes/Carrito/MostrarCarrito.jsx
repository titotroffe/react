import { useState, useEffect } from 'react';
import './Carrito.css';

function MostrarCarrito() {
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        const datosGuardados = JSON.parse(localStorage.getItem("carrito")) || [];
        setCarrito(datosGuardados);
    }, []);

    const eliminarItem = (index) => {
        const nuevoCarrito = carrito.filter((_, i) => i !== index);
        setCarrito(nuevoCarrito);
        localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    };

    const confirmarCompra = () => {
        if (window.confirm("¿Confirmás tu compra?")) {
            setCarrito([]);
            localStorage.removeItem("carrito");
            alert("¡Compra confirmada!");
        }
    };

    return (
        <article className='productos-oficiales' id='carrito'>
            <h2>Productos oficiales</h2>

            {carrito.length === 0 ? (
                <p>Tu carrito está vacío.</p>
            ) : (
                <>
                    <ul>
                        {carrito.map((item, index) => (
                            <li key={index}>
                                {item.titulo} - Cantidad: {item.cantidad} - Total: ${item.cantidad * item.precio}
                                <button onClick={() => eliminarItem(index)} className='btn-eliminar'>
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                    <button onClick={confirmarCompra} className='btn-confirmar'>
                        Confirmar compra
                    </button>
                </>
            )}
        </article>
    );
}

export default MostrarCarrito;
