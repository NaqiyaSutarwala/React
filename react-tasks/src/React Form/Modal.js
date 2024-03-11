const Modal = ({ Children, hobbies, name, email, contact, gender }) => {
  return (
    <>
      {Children ? (
        { Children }
      ) : (
        <div className="modal-container">
          <div>Name: {name}</div>
          <div>Email: {email}</div>
          <div>Contact: {contact}</div>
          <div>Gender: {gender}</div>
          <div>Hobbies: {hobbies}</div>
        </div>
      )}
    </>
  );
};

export default Modal;
