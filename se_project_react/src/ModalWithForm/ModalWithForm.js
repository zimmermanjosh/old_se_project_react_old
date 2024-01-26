import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  buttonText = "add garment",
  title,
  onClose,
  name,
}) => {
  console.log("ModalWithForm");

  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <button type="button" onClick={onClose} className="modal__close-button">
          Close
        </button>
        <h3>{title}</h3>
        <form className="modal__form">{children}</form>
        <button type="submit" className="submit_button">
          {buttonText}
        </button>
      </div>
    </div>
  );
};
export default ModalWithForm;
