import { useNavigate } from "react-router-dom";

import { useStoreApp } from "~/stores/useStoreApp";

type TModal = {
  id: number;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({id, isActive, setIsActive }: TModal) => {
  const navigate = useNavigate();
  const { deleteNotes } = useStoreApp();

  const closeModal = () => {
    setIsActive(false);
  };

  const handleOutsideClick = (e: any) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleRemove = () => {
    deleteNotes(id);
    closeModal();
    navigate("/");
  };

  return (
    <div className="fixed inset-0 flexCenterCenter z-50">
      {/* Modal Overlay */}
      <div
        className={`fixed inset-0 ${
          isActive ? "bg-black bg-opacity-50" : "bg-transparent"
        }`}
        onClick={handleOutsideClick}
      ></div>

      {/* Modal Content */}
      {isActive && (
        <div className="bg-light0 text-dark0 shadow-lg w-1/2 rounded-lg p-3 z-50">
          <p>Are you sure you want to delete this note?</p>

          <div className="flexCenterCenter mt-5">
            <button
              className="px-4 py-2 rounded-lg bg-light1 text-white hover:bg-red"
              onClick={() => handleRemove()}
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
