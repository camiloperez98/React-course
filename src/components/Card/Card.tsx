// Importación de ReactNode desde la biblioteca react, utilizado para tipificar los hijos en los componentes de React.
import { ReactNode } from "react";

// Interface Props define las propiedades que el componente Card espera recibir.
// En este caso, solo espera un hijo (ReactNode), que puede ser cualquier cosa válida en React (texto, elementos JSX, etc.).
interface Props {
  children: ReactNode;
}

// Función Card que acepta las Props definidas anteriormente.
// Desestructura las props para extraer los hijos y luego los renderiza dentro de un div con clase "card".
function Card(props: Props) {
  const { children } = props; // Extrae los hijos del objeto props.
  return (
    <div
      className="card" // Clase CSS para estilizar el contenedor principal.
      style={{
        // Estilo inline para especificar el ancho del card.
        width: "350px",
      }}
    >
      <div className="card-body">
        {" "}
        {/* Contenedor interno donde se colocan los hijos. */}
        {children} {/* Renderiza los hijos pasados al componente Card. */}
      </div>
    </div>
  );
}

// Interface CardBodyProps define las propiedades opcionales que el componente CardBody espera recibir.
// Puede tener un título (string) y un texto (string), ambos opcionales.
interface CardBodyProps {
  title?: string;
  text?: string;
}

// Función CardBody que acepta las CardBodyProps definidas anteriormente.
// Desestructura las props para extraer el título y el texto, y luego los renderiza dentro de un fragmento de React.
export function CardBody(props: CardBodyProps) {
  const { title, text } = props; // Extrae el título y el texto del objeto props.
  return (
    <>
      <h5 className="card-title">{title}</h5> {/* Renderiza el título. */}
      <p className="card-text">{text}</p> {/* Renderiza el texto. */}
    </>
  );
}

// Exportación del componente Card para que pueda ser importado y utilizado en otros archivos.
export default Card;
