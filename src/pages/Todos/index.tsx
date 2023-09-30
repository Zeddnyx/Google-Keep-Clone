import ButtonBack from "~/components/ButtonBack";
import Todos from "./Todos";
import { useStoreApp } from "~/stores/useStoreApp";
import { useNavigate } from "react-router-dom";

export default function index() {
  const { todos } = useStoreApp();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  }
  return (
    <div className="px-7 dark:bg-dark0 h-screen">
      <ButtonBack handleSave={handleBack} />
      <Todos todos={todos} />
    </div>
  );
}
