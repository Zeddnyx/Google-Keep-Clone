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
<<<<<<< HEAD
<<<<<<< HEAD
    <div className="px-2">
=======
    <div className="px-2 dark:bg-dark0 h-screen">
>>>>>>> f8ab00a (feat: dark mode, ui: add dark mode style)
=======
    <div className="px-2 dark:bg-dark0 h-screen">
>>>>>>> f8ab00a (feat: dark mode, ui: add dark mode style)
      <ButtonBack handleSave={handleBack} />
      <Todos todos={todos} />
    </div>
  );
}
