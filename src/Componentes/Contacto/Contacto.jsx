import './Contacto.css'

function Contacto (){
    return (
        <article className="contacto" id='contacto'>
            <h2>Contacto</h2>
            <form action="post">
                <fieldset>
                    <input type="text" name="nombreyapellido" placeholder="Nombre y Apellido"/>
                    <input type="text" name="correo" placeholder="Correo"/><br/>    
                    <textarea name="comentario" id="comentario" cols="30" rows="8"></textarea>
                    <input type="checkbox" name="termycond"/>Aceptar terminos y condiciones<br/><br/>
                    <input type="submit" value="Enviar comentario" name="enviar"/>
                </fieldset>
            </form>
        </article>
    )
}

export default Contacto;