import "./ItemCard.css";

const ItemCard = ({ item, onSelectedCard }) => {
  return (
    <div>
      <div>
        <img
          src={item.link}
          alt=""
          className="card_image"
          onClick={() => onSelectedCard(item)}
        />
      </div>
      <div className="card_name"> {item.name}</div>
    </div>
  );
};

export default ItemCard;
