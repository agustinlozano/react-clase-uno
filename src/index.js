// import { Welcome } from './components/Welcome.js';

// ReactDOM.render(<Welcome nombre="Julián" />, document.getElementById('react-app'));

// import { Button } from './components/Button.js';

// ReactDOM.render(
//   <Button onClick={event => alert(event.target.value)}>Hacé click!</Button>,
//   document.getElementById('react-app')
// );

// import { Page } from './components/Page.js';

// ReactDOM.render(
//   <Page
//     titulo="Mi diario"
//     articulos={[
//       { titulo: 'Dia uno', cuerpo: 'Hoy vi una ardilla.' },
//       { titulo: 'Dia dos', cuerpo: 'Hoy vi otra ardilla, pero capaz sea la misma.' },
//     ]}
//   />,
//   document.getElementById('react-app')
// );


// import { ToDoList } from './components/ToDoList.js';

// ReactDOM.render(<ToDoList />, document.getElementById('react-app'));

import { Tarjeta } from "./components/Tarjeta.js";

ReactDOM.render(
    <Tarjeta 
        imgUrl="https://avatars.githubusercontent.com/u/73617542?v=4"
        nombre="Agustin Lozano"
        titulo="Front End Software Engineer"
    />,
     document.getElementById('react-app')
);
