// Importación de useState desde la biblioteca react, utilizado para manejar el estado local en componentes funcionales.
import { useState } from "react";

// Definición de un tipo personalizado llamado Props, que describe las propiedades esperadas por el componente List.
type Props = {
  // Propiedad data, que es un array de strings.
  data: string[];
  // Propiedad opcional onSelect, que es una función que recibe un string como argumento.
  onSelect?: (elemento: string) => void;
};

// Función List que acepta las Props definidas anteriormente.
function List({ data, onSelect }: Props) {
  // Uso de useState para mantener un índice seleccionado en el array data.
  const [index, setIndex] = useState(1); // Inicialmente se establece el índice en 1.

  // Función handleClick que se ejecuta cuando se hace clic en un elemento de la lista.
  // Recibe el índice del elemento y el elemento mismo como argumentos.
  const handleClick = (i: number, elemento: string) => {
    // Actualiza el índice seleccionado.
    setIndex(i);

    // Verifica si la función onSelect está definida y, si es así, la ejecuta pasando el elemento seleccionado.
    onSelect?.(elemento);
  };

  // Retorna un elemento ul con la clase "list-group", que contiene varios elementos li.
  return (
    <ul className="list-group">
      {data.map((elemento, i) => (
        // Cada elemento li tiene un manejador de eventos onClick que llama a handleClick con el índice y el elemento.
        <li
          onClick={() => handleClick(i, elemento)} // Al hacer clic, se actualiza el índice y se ejecuta onSelect si está definida.
          key={elemento} // Usa el elemento como clave única para cada elemento li.
          className={`list-group-item ${index == i ? "active" : ""}`} // Aplica la clase "active" al elemento seleccionado.
        >
          {elemento} {/* Muestra el contenido del elemento. */}
        </li>
      ))}
    </ul>
  );
}

// Exportación del componente List para que pueda ser importado y utilizado en otros archivos.
export default List;
