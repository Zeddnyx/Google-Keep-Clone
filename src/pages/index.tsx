import { Link } from "react-router-dom";
import { useStoreApp } from "~/stores/useStoreApp";
import { IoMdAdd } from "react-icons/io";
import { MenuTop } from "~/components/Notes/MenuTop";
import Todos from "./Todos/Todos";

export default function Index() {
  const { notes, todos } = useStoreApp();

  return (
    <div className="container">
      <div className="todos-contaier">
        <Link to="/to-do">
          <Todos todos={todos} />
        </Link>
      </div>
      {notes
        .map((item, id) => {
          return (
            <div
              key={id}
              className="notes-item"
              style={{
                backgroundColor: item.bg,
                color: item.bg ? "#ebdbb2" : "#282828",
                border: item.bg ? "0" : "1px solid #282828",
              }}
            >
              <div className="flexBetweenCenter">
                <Link to={`/notes/edit/${id}`}>
                  <h2>{item.title}</h2>
                </Link>
                <MenuTop id={item.id} color={item.bg ? "#ebdbb2" : "#cc241d"} />
              </div>
              <Link to={`/notes/edit/${id}`}>
                <textarea
                  disabled
                  className="textarea-body"
                  value={item.body}
                  style={{ resize: "none" }}
                ></textarea>
              </Link>
            </div>
          );
        })
        .reverse()}
      <div className="btn-add-container">
        <button className="btn-add-self">
          <Link to="/notes/new">
            <IoMdAdd size={30} />
          </Link>
        </button>
      </div>
    </div>
  );
}
