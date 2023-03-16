import { Card } from "./components/card";
import { Input } from "./components/input";

function App() {
  return (
    <div className="App">
      <Card
        name="Raul Souza"
        position="Senior Front End"
        src="https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHJlbW90ZXxlbnwwfHwwfHw%3D&w=1000&q=80"
      />
      <br />
      <Card name="Dionisio Matos" position="Senior Android Developer" />
      <br />
      <Card hideIcon name="Jenifer Caroline" position="UX/UI Design" />
      <br />
      <Card
        alignCol
        src="https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHJlbW90ZXxlbnwwfHwwfHw%3D&w=1000&q=80"
        name="Jenifer Caroline"
        position="UX/UI Design"
      />
      <br />
      <Input placeholder="Novo valor" label='valor com label' />
      <br />
      <Input placeholder="Novo valor" />
      <br />
      <Input disabled placeholder="Novo valor" />
      <br />
      <Input error placeholder="Novo valor" errorMessage="message error" />
    </div>
  );
}

export default App;
