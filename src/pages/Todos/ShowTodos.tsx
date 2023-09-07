import { BsSquare } from "react-icons/bs";

interface IShow {
  todo: {
    id: number;
    title: string;
  };
  handleDone: (event: any) => void;
  handleEdit: (event: number, title: string) => void;
}

export default function ShowTodos({ todo, handleDone, handleEdit }: IShow) {
  return (
    <div className="w-full">
      <div className="w-full flex items-center gap-2">
        {/* action todos */}
        <button onClick={() => handleDone(todo)} className="btn-done h-10">
          <BsSquare />
        </button>
        {/* shows todos */}
        <span onClick={() => handleEdit(todo.id, todo.title)}>
          <p>{todo.title}</p>
        </span>
      </div>
    </div>
  );
}
