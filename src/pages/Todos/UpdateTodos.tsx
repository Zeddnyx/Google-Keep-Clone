import { BsSquare } from "react-icons/bs";
import { RxUpdate } from "react-icons/rx";

interface IUpdate {
  handleUpdate: (event: React.FormEvent) => void;
  editTitle: string;
  setEditTitle: (event: string) => void;
}
export default function UpdateTodos({
  handleUpdate,
  editTitle,
  setEditTitle,
}: IUpdate) {
  return (
    <form onSubmit={handleUpdate} className="flexColCenter w-full gap-2">
      <div className="flex gap-2">
        <button className="btn-done h-10">
          <BsSquare />
        </button>
        <input
          placeholder="Change todo"
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          className="input-todo"
        />
      </div>
      <button className="btn-update-todo">
        <RxUpdate size={15} /> Update item
      </button>
    </form>
  );
}
