import "./ItemCard.css";

const ItemCard = ({ item }) => {
  return (
    <div>
      <div>
        <img src={item.link} alt="" className="card_image" />
      </div>
      <div className="card_name"> {item.name}</div>
    </div>
  );
};

export default ItemCard;
