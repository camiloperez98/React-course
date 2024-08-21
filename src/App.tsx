import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const list = ["Goku", "Gohan", "Goten"];
  return (
    <Card>
      <CardBody title="Titulo de la card" text="Texto de la card" />
      <List data={list} />
    </Card>
  );
}

export default App;
