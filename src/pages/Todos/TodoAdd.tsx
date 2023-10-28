import { BsSquare } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import { RiSaveLine } from "react-icons/ri";

interface IAdd {
  handleAdd: (event: React.FormEvent) => void;
  editTitle: string;
  setEditTitle: (event: string) => void;
  handleAddTodos: () => void
}

export default function AddTodos({handleAdd,editTitle,setEditTitle,handleAddTodos}:IAdd) {
  return (
    <div className="flexColCenter gap-2 w-full">
      <form onSubmit={handleAdd} className="relative w-full flex gap-5">
        <button>
          <BsSquare size={20} />
        </button>
        <input
          placeholder="Type your todo here..."
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          className="input-todo"
        />
        <button className="btn-cancel-todo">
          <CgClose />
        </button>
      </form>
      <div className="flex w-full mt-2">
        <button onClick={handleAddTodos} className="btn-add-todo">
          <RiSaveLine />
          Save item
        </button>
      </div>
    </div>
  );
}
