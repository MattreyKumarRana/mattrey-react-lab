const Modal = ({ isOpen, rating, closeModal }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Thank you</h2>
        <p>
          You rated us {rating} star{rating > 1 ? "s" : ""}
        </p>
        <button className="close-btn" onClick={closeModal}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
