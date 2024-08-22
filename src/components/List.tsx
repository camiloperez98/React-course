import { useState } from "react";

type Props = {
  data: string[];
  //Función opcional en el componente
  onSelect?: (elemento: string) => void;
};

function List({ data, onSelect }: Props) {
  const [index, setIndex] = useState(1);

  const handleClick = (i: number, elemento: string) => {
    setIndex(i);

    //Si se encuentra definida entonces ejecuta
    onSelect?.(elemento);
  };

  return (
    <ul className="list-group">
      {data.map((elemento, i) => (
        <li
          onClick={() => handleClick(i, elemento)}
          key={elemento}
          className={`list-group-item ${index == i ? "active" : ""}`}
        >
          {elemento}
        </li>
      ))}
    </ul>
  );
}

export default List;
