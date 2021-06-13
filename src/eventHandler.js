const nombre = 'Agustin';

const elemento = (
  <button
    onClick={event => alert(`Hiciste click en el botón con texto "${event.target.innerText}" y el nombre es ${nombre}`)}
  >
    Hacé click
  </button>
);

const app = document.getElementById('react-app');

ReactDOM.render(elemento, app);
