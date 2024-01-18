const ItemModal = ({ selectedCard, onClose }) => {
  console.log("ItemModal");

  return (
    <div className={"modal"}>
      <div className="modal__content">
        <button type="button" onClick={onClose}>
          Close
        </button>
        <img src={selectedCard.link} alt="something" />
        <div> clothes type: {selectedCard.name} </div>
        <div> weather type: {selectedCard.weather} </div>
      </div>
    </div>
  );
};

export default ItemModal;
