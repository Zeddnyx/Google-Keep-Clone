import { Link } from "react-router-dom";
import { useStoreApp } from "~/stores/useStoreApp";
import { IoMdAdd } from "react-icons/io";
import { MenuTop } from "~/components/Notes/MenuTop";
import Todos from "./Todos/Todos";
import Navbar from "./Navbar";

export default function Index() {
  const { notes, todos } = useStoreApp();

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="container-home bg-light0 dark:bg-dark0">
        <div className="todos-contaier dark:border-light0">
          <Link to="/to-do">
            <Todos todos={todos} />
          </Link>
        </div>
        {/*       Notes section */}
        {notes
          .map((item, id) => {
            return (
              <div
                key={id}
                className={`notes-item ${
                  item.bg ? "text-light0 border-0" : "text-dark0 border-dark0 dark:text-light0 dark:border-light0"
                } `}
                style={{
                  backgroundColor: item.bg,
                }}
              >
                <div className="flexBetweenCenter">
                  <Link to={`/notes/edit/${id}`}>
                    <div className="h-10 max-w-[130px] w-[130px] lg:max-w-[200px] lg:w-[200px] ">
                      <h2 className="truncate">{item.title}</h2>
                    </div>
                  </Link>
                  <MenuTop id={item.id} color={item.bg} />
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
              <IoMdAdd size={35} />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
