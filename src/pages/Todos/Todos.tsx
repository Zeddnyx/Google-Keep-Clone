import { useState } from "react";
import { IoMdAdd } from "react-icons/io";

import { useStoreApp } from "~/stores/useStoreApp";

import TodoChecked from "./TodoChecked";
import TodoUpdate from "./TodoUpdate";
import TodoAdd from "./TodoAdd";
import TodoShows from "./TodoShows";

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

  const handleTodoAdd = () => {
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
                  <TodoUpdate
                    editTitle={editTitle}
                    setEditTitle={setEditTitle}
                    handleUpdate={handleUpdate}
                  />
                ) : (
                  <TodoShows
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
          <TodoAdd
            editTitle={editTitle}
            setEditTitle={setEditTitle}
            handleAdd={handleAdd}
            handleAddTodos={handleTodoAdd}
          />
        ) : (
          <button onClick={handleTodoAdd} className="btn-add-todo">
            <IoMdAdd /> List item
          </button>
        )}

        {/* Done todos */}
        <div className="flex justify-start w-full mt-5">
          <TodoChecked item={doneTodos} />
        </div>
      </div>
    </div>
  );
}
