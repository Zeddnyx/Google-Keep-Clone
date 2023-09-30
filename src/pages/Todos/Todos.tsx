import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

import { useStoreApp } from "~/stores/useStoreApp";

import { Checked } from "./Checked";
import UpdateTodos from "./UpdateTodos";
import AddTodos from "./AddTodos";
import ShowTodos from "./ShowTodos";

type TTodos = {
  title: string;
};

export default function Todos({ todos }: { todos: TTodos[] }) {
  const { setTodos, editTodos, deleteTodos, setDoneTodos, doneTodos } =
    useStoreApp();
  const [isAdd, setIsAdd] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");

  const handleEdit = (id: number, title: string) => {
    setEditId(id);
    setEditTitle(title);
  };

  const handleUpdate = (e: any) => {
    e.preventDefault();
    if (editId !== null) {
      editTodos(editId, editTitle);
      setEditId(null);
      setEditTitle("");
    }
  };

  const handleAddTodos = () => {
    setIsAdd((prev) => !prev);
    if (!!editTitle) {
      setTodos(editTitle);
      setEditTitle("");
    }
  };
  const handleAdd = (e: any) => {
    e.preventDefault();
    setIsAdd((prev) => !prev);
  };

  const handleDone = (item: any) => {
    setDoneTodos(item.title, item.id);
    deleteTodos(item.id);
  };

  return (
    <div className="grid gap-2 dark:bg-dark0 dark:text-light0">
      <h2>todo list</h2>
      <div className="flexColStart">
        <div className="w-full">
          {todos.map((todo: any) => {
            return (
              <div key={todo.id} className="flex gap-5 w-full">
                {editId === todo.id ? (
                  <UpdateTodos
                    editTitle={editTitle}
                    setEditTitle={setEditTitle}
                    handleUpdate={handleUpdate}
                  />
                ) : (
                  <ShowTodos
                    todo={todo}
                    handleDone={handleDone}
                    handleEdit={handleEdit}
                  />
                )}
              </div>
            );
          })}
        </div>
        {isAdd ? (
          <AddTodos
            editTitle={editTitle}
            setEditTitle={setEditTitle}
            handleAdd={handleAdd}
            handleAddTodos={handleAddTodos}
          />
        ) : (
          <button onClick={handleAddTodos} className="btn-add-todo">
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
