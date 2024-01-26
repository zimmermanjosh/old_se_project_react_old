import "./ItemCard.css";

const ItemCard = ({ item, onSelectedCard }) => {
  return (
    <div>
      <div id="img-div" className="card">
        <img
          src={item.link}
          alt={item.name}
          className="card_image"
          onClick={() => onSelectedCard(item)}
        />
      </div>
      <div className="card_name"> {item.name}</div>
    </div>
  );
};

export default ItemCard;
