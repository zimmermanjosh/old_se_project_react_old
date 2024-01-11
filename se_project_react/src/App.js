import "./App.css";
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import Main from "./Main/Main.js";
import ModalWithForm from "./ModalWithForm/ModalWithForm.js";

function App() {
  const weatherTemp = "8723324787234° F";
  //const currentLocation = { Location };
  return (
    <div>
      <Header />
      <Main weatherTemp={weatherTemp} />
      <Footer />
      <ModalWithForm title="New Garment"> These are Children</ModalWithForm>
    </div>
  );
}

export default App;
