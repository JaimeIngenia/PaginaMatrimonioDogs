import esposos from "../src/assets/images/esposos.svg";
import Body from "./components/body/Body";

function App() {
  return (
    <div className="App">
      Hola Mundo
      <img src={esposos} alt=""></img>
      <Body/>
    </div>
  );
}

export default App;
