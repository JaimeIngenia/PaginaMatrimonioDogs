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
<<<<<<< HEAD
      {/* amor ya las historias están en un botón del body */}
=======
      <Body/>
      <Historias/>
>>>>>>> 9e8a8371c3851d3036e09e04a9797154dde5eadf
    </div>
  );
}

export default App;
