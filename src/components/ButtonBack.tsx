import { useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";

export default function ButtonBack() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };
  return (
    <button onClick={handleBack} className="my-6">
      <IoArrowBackSharp size={20} />
    </button>
  );
}
