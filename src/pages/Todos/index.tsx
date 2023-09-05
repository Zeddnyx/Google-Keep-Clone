import ButtonBack from "~/components/ButtonBack";
import Todos from "./Todos";
import { useStoreApp } from "~/stores/useStoreApp";

export default function index() {
  const { todos } = useStoreApp();
  return (
    <div className="px-2">
      <ButtonBack />
      <Todos todos={todos} />
    </div>
  );
}
