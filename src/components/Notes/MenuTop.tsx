import { useState } from "react";
import { CgClose } from "react-icons/cg";
import Modal from "~/components/Modal";
import { AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const MenuTop = ({
  id,
  idEdit,
  color,
}: {
  id: number;
  idEdit: number;
  color: string;
}) => {
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();

  const handleDelete = () => {
    setIsModal(true);
  };

  const style = color
    ? "text-light0 dark:text-light0"
    : "text-dark0 dark:text-light0";

  return (
    <div className="relative cursor-pointer">
      <div className="flexCenterCenter gap-5 w-full">
        <button onClick={() => navigate(`/notes/edit/${idEdit}`)}>
          <AiFillEdit size={20} />
        </button>
        <button className={style} onClick={() => handleDelete()}>
          <CgClose size={20} />
        </button>
      </div>
      {isModal && <Modal id={id} isModal={isModal} setIsModal={setIsModal} />}
    </div>
  );
};
