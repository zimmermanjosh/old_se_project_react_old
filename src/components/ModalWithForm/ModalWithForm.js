import "./ModalWithForm.css";

const ModalWithForm = ({ children, buttonText, title, onClose, name }) => {
  console.log("ModalWithForm");

  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button
          type="button"
          onClick={onClose}
          className="modal__close-button"
        ></button>
        <h3>{title}</h3>
        <form className="modal__form" buttonText="Add garment">
          {children}
        </form>
        <button type="submit" className="submit__button">
          {buttonText}
        </button>
      </div>
    </div>
  );
};
export default ModalWithForm;
