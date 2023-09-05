import { useState } from "react";
import { CgClose } from "react-icons/cg";
import { IoMdAdd } from "react-icons/io";
import {BsSquare} from "react-icons/bs"

import { useStoreApp } from "~/stores/useStoreApp";
import { Checked } from "./Checked";

type TTodos = {
  title: string;
};

export default function Todos({ todos }: { todos: TTodos[] }) {
  const { setTodos, editTodos, deleteTodos, setDoneTodos,doneTodos } = useStoreApp();
  const [isAdd, setIsAdd] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");

  const handleEdit = (id: number, title: string) => {
    setEditId(id);
    setEditTitle(title);
  };

  const handleUpdate = () => {
    if (editId !== null) {
      editTodos(editId, editTitle);
      setEditId(null);
      setEditTitle("");
    }
  };

  const handleAddTodo = () => {
    setIsAdd((prev) => !prev);
    if (!!editTitle) {
      setTodos(editTitle);
      setEditTitle("");
    }
  };
  const handleAdd = () => {
    setIsAdd((prev) => !prev);
  };

  const handleDone = (item: any) => {
    setDoneTodos(item.title, item.id);
    deleteTodos(item.id);
  };

  return (
    <div className="grid gap-2">
      <h2>todo list</h2>
      <div className="flexColStart">
        <div className="w-full">
          {todos.map((todo: any) => (
            <div key={todo.id} className="flex gap-5 w-full">
              {editId === todo.id ? (
                <div className="flexColCenter w-full gap-2">
                  <input
                    placeholder="Change todo"
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    className="input-todo"
                  />
                  <button onClick={handleUpdate} className="btn-normal">
                    Update
                  </button>
                </div>
              ) : (
                <div className="w-full">
                  <div className="w-full flex items-center gap-2">
                    {/* action todos */}
                      <button
                        onClick={() => handleDone(todo)}
                        className="btn-done h-10"
                      >
                      <BsSquare />
                      </button>
                    {/* shows todos */}
                    <span onClick={() => handleEdit(todo.id, todo.title)}>
                      <p>{todo.title}</p>
                    </span>

                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        {isAdd ? (
          <div className="flexColCenter gap-2 w-full">
            <div className="relative w-full">
              <input
                placeholder="Type your todo here..."
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="input-todo"
              />
              <button onClick={handleAdd} className="btn-cancel-todo">
                <CgClose />
              </button>
            </div>
            <div className="flex w-full mt-2">
              <button onClick={handleAddTodo} className="btn-normal">
                Add Todo
              </button>
            </div>
          </div>
        ) : (
          <button onClick={handleAddTodo} className="btn-add-todo">
            <IoMdAdd /> List item
          </button>
        )}

        {/* Done todos */}
        <div className="flex justify-start w-full mt-5">
          <Checked item={doneTodos} />
        </div>
      </div>
    </div>
  );
}
