const ModalWithForm = ({ children, buttonText = "add garment", title }) => {
  console.log("ModalWithForm");

  return (
    <div>
      <h3>{title}</h3>
      <form>{children}</form>
      <button type="submit" onClick={() => console.log("clicked")}></button>
    </div>
  );
};
export default ModalWithForm;
