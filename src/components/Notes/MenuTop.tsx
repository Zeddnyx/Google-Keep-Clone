import { useState } from "react";
import { CgClose } from "react-icons/cg";
import Modal from "~/components/Modal";

export const MenuTop = ({ id, color }: { id: number; color: string }) => {
  const [isActive, setIsActive] = useState(false);

  const handleDelete = () => {
    setIsActive(true);
  };

  return (
    <div className="relative cursor-pointer">
<<<<<<< HEAD
<<<<<<< HEAD
      <button style={{ color: color ? "#ebdbb2" : "#282828" }} onClick={() => handleDelete()}>
=======
=======
>>>>>>> f8ab00a (feat: dark mode, ui: add dark mode style)
      <button
        className={
          color ? "text-light0 dark:text-light0" : "text-dark0 dark:text-light0"
        }
        onClick={() => handleDelete()}
      >
<<<<<<< HEAD
>>>>>>> f8ab00a (feat: dark mode, ui: add dark mode style)
=======
>>>>>>> f8ab00a (feat: dark mode, ui: add dark mode style)
        <CgClose size={20} />
      </button>
      {isActive && (
        <Modal id={id} isActive={isActive} setIsActive={setIsActive} />
      )}
    </div>
  );
};
