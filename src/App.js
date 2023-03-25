import logo from './logo.svg';
import './App.css';

function App() {

  function mostrar(evento) {
    evento.preventDefault();
    const texto = evento.target.texto.value
    alert('Usted escribio: ' + texto);

  }


  return (
    <div className="App">
      <form onSubmit={mostrar}>
        <p className="Texto">Ingrese un texto:</p>
        <input className="Form" type="text" name="texto" />
        <br />
        <button className="Boton" type="submit">Mostrar</button>

      </form>
    </div>
  );
}

export default App;
