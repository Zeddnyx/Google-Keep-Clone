import { IoArrowBackSharp } from "react-icons/io5";

type TButtonBackProps = {
  handleSave?: () => void;
}

export default function ButtonBack({handleSave}: TButtonBackProps) {
  return (
    <button onClick={handleSave} className="my-6">
      <IoArrowBackSharp size={20} />
    </button>
  );
}
