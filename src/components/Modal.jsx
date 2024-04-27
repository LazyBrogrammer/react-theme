export const Modal = ({ handleShowModal }) => {
    const handleEnter = (e) => {
        console.log(e);
    }
  return (
    <div
      onKeyUp={handleEnter}
      className="modal"
    >
      <div className="modal-header">
        <h3>this is modal window</h3>
        <button onClick={handleShowModal} className="close-btn">
          X
        </button>
      </div>
      <div className="modal-body">
        <h3>Modal Title</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque
          ipsum veniam ducimus, aspernatur maxime quasi suscipit quos aperiam
          repudiandae sint corporis animi ullam placeat eos beatae doloribus
          debitis aliquam error.
        </p>
      </div>
    </div>
  );
};
