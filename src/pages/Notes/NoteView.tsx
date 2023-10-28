import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { useStoreApp } from "~/stores/useStoreApp";
import ButtonBack from "~/components/ButtonBack";
import { MenuTop } from "~/components/Notes/MenuTop";

export default function ViewNotes() {
  const { notes } = useStoreApp();
  const { id } = useParams();
  const note = notes[Number(id)];
  const style = note.bg
    ? "text-light0 dark:text-light0"
    : "text-dark0 dark:text-light0 dark:bg-dark0";

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div
      className={`p-2 px-4 w-full overflow-x-scroll min-h-screen space-y-2 ${style}`}
      style={{ backgroundColor: note.bg }}
    >
      <div className="flexBetweenCenter">
        <ButtonBack handleSave={handleBack} />
        <MenuTop id={Number(note.id)} idEdit={Number(id)} color={note.bg} />
      </div>
      <h1>{note.title}</h1>
      <ReactMarkdown children={note.body}></ReactMarkdown>
    </div>
  );
}
