import "./App.css";
import Header from "./Header/Header.js";
import Footer from "./Footer/Footer.js";
import Main from "./Main/Main.js";
import ModalWithForm from "./ModalWithForm/ModalWithForm.js";
import { useState } from "react";
import ItemModal from "./ItemModal/ItemModal.js";
function App() {
  const weatherTemp = "87°F";
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  console.log(selectedCard);

  //const currentLocation = { Location };
  return (
    <div>
      <Header onCreateModal={handleCreateModal} />
      <Main weatherTemp={weatherTemp} onSelectedCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm title="New Garment" onClose={handleCloseModal}>
          <label>
            name <input type="text" minLength={1} maxLength={23} />
          </label>
          <label>
            image <input type="link" minLength={1} />
          </label>
          <p>Select the weather type</p>
          <div>
            <div>
              <input type="radio" id="hot" value="hot" />
              <label> Hot </label>
            </div>
            <div>
              <input type="radio" id="warm" value="warm" />
              <label> warm </label>
            </div>
            <div>
              <input type="radio" id="cold" value="cold" />
              <label> cold </label>
            </div>
          </div>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
