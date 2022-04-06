import esposos from "../src/assets/images/esposos.svg";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import Historias from "./components/hisroeias/Historias";

function App() {
  return (
    <div className="App">
      Hola Mundo
      <img src={esposos} alt=""></img>
      <Body />
      <Footer />
      <Body />
      <Historias />
    </div>
  );
}

export default App;
