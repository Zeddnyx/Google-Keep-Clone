import { IoArrowBackSharp } from "react-icons/io5";

type TButtonBackProps = {
  handleSave?: () => void;
}

export default function ButtonBack({handleSave}: TButtonBackProps) {
  return (
<<<<<<< HEAD
    <button onClick={handleSave} className="my-6">
=======
    <button onClick={handleSave} className="my-6 text-dark dark:text-light0">
>>>>>>> f8ab00a (feat: dark mode, ui: add dark mode style)
      <IoArrowBackSharp size={20} />
    </button>
  );
}
