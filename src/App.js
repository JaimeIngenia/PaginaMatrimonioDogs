import esposos from "../src/assets/images/esposos.svg";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      Hola Mundo
      <img src={esposos} alt=""></img>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
