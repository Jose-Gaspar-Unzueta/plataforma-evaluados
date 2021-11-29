import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div >
            <h1 className="titulohome">Bienvenido a nuestro protal de Pruebas Psicolaborales</h1>
            <div className="bienvenida">
            <p>Estimado participante, a continuación encontrarás un grupo de pruebas que deberás resolver para la posición que postula.</p>
            <p>Te pedimos que las resuelvas con prontitud para poder continuar con el proceso. Al ingresar, recibirás una serie de instrucciones para que
                puedas responder las preguntas sin inconvenientes. Te deseamos un buen resultado
            </p>
            <p>Para Iniciar con el proceso de evaluación, debes dar en Iniciar</p>
            

            <Link to="/introbarsit">
            <button className="btn btn-success">   
            Iniciar Prueba
            </button>
            </Link>
            </div>

        </div>
    )
}
