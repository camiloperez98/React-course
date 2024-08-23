// import Card, { CardBody } from "./components/Card";
import Card from "./components/Card/Card";
import List from "./components/List/List";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  //Manejo de estado para darle un valor inicial al array data y la funcion setData para actualizar el valor a lo largo de la ejecución
  const [data, setData] = useState(["Orion", "Molly", "Luigi"]);

  //Función para agregar elementos
  const addElement = () => {
    //Actualiza el valor de data creando una copia de data y agregando el 'elemento' al final
    setData([...data, "elemento"]);
  };

  //Función para eliminar elementos
  const deleteElement = () => {
    //Actualiza el valor de data atraves del metodo 'slice' para indicarle que queremos el valor de data desde la posicion 0 y que se eliminara el ultimo elemento
    setData(data.slice(0, -1));
  };

  // const [isLoading, setIsLoading] = useState(false);
  // const handleClick = () => setIsLoading(!isLoading)

  // const list: string[] = ["Orion", "Molly", "Luigi"];

  // const handleSelect = (elemento: string) => {
  //   console.log("Imprimiendo", elemento);
  // };

  // //Renderizado condicional
  // // const contenido = list.length ? (
  // //   <List data={list} onSelect={handleSelect} />
  // // ) : (
  // //   "No existen registros"
  // // );

  // return (
  //   <Card>
  //     <CardBody title="Titulo de la card" text="Texto de la card" />

  //     {/* Mostrar el contendio de lista segun el cumplimiento de la condicion */}
  //     {list.length ? (
  //       <List data={list} onSelect={handleSelect} />
  //     ) : (
  //       "No existen registros"
  //     )}
  //     <Button isLoading={isLoading} onClick={handleClick}>React Developers</Button>
  //   </Card>
  // );

  return (
    <Card>
      <Button onClick={addElement}>Add</Button>
      <Button onClick={deleteElement}>Delete</Button>
      <List data={data} />
    </Card>
  );
}

export default App;
