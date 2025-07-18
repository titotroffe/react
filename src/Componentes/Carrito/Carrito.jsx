import './Carrito.css'

function Carrito ({id, titulo, imagen, detalle, precio}){

    const handleAgregar = () => {
    
    const producto = {id, titulo, imagen, detalle, precio};

    const carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];


    const existente = carritoActual.find((item) => item.id === id);

    if (existente) {
        existente.cantidad += 1;
    } else {
        carritoActual.push({ ...producto, cantidad: 1 });
    }

    localStorage.setItem("carrito", JSON.stringify(carritoActual));
    alert(`"${titulo}" agregado al carrito.`);
    };

    return (
        <div className='Card-Carrito'>
            <h3>{titulo}</h3>
            <img src={imagen} alt="" />
            <p>{detalle}</p>
            <b>${precio}</b>
            <button onClick={handleAgregar}>Agregar al carrito</button>
        </div>
    )
}

export default Carrito;