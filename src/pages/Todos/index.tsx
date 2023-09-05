import ButtonBack from "~/components/ButtonBack";
import Todos from "./Todos";
import { useStoreApp } from "~/stores/useStoreApp";

export default function index() {
  const { todos } = useStoreApp();
  return (
    <div>
      <ButtonBack />
      <Todos todos={todos} />
    </div>
  );
}
