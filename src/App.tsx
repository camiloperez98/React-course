import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => setIsLoading(!isLoading)

  const list: string[] = ["Orion", "Molly", "Luigi"];

  const handleSelect = (elemento: string) => {
    console.log("Imprimiendo", elemento);
  };

  //Renderizado condicional
  // const contenido = list.length ? (
  //   <List data={list} onSelect={handleSelect} />
  // ) : (
  //   "No existen registros"
  // );

  return (
    <Card>
      <CardBody title="Titulo de la card" text="Texto de la card" />

      {/* Mostrar el contendio de lista segun el cumplimiento de la condicion */}
      {list.length ? (
        <List data={list} onSelect={handleSelect} />
      ) : (
        "No existen registros"
      )}
      <Button isLoading={isLoading} onClick={handleClick}>React Developers</Button>
    </Card>
  );
}

export default App;
