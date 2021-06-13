
export function Tarjeta(props) {
    return (
        <div className="tajeta">
            <img
                src={props.imgUrl}
                alt="Foto de perfil"
                className="tarjeta-img"
            />
            <div className="tarjeta-data">
            <header className="tarjeta-data-header">{props.nombre}</header>
            <span>{props.titulo}</span>
            </div>
        </div>
    );
}
