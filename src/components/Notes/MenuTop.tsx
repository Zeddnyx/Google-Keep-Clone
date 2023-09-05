import { useState } from "react";
import { CgClose } from "react-icons/cg";
import Modal from "~/components/Modal";

export const MenuTop = ({ id,color }: { id: number, color: string }) => {
  const [isActive, setIsActive] = useState(false);

  const handleDelete = () => {
    setIsActive(true);
  };

  return (
    <div className="relative cursor-pointer">
      <button style={{ color: color }} onClick={() => handleDelete()}>
          <CgClose size={20} />
      </button>
      {isActive && (
        <Modal id={id} isActive={isActive} setIsActive={setIsActive} />
      )}
    </div>
  );
};