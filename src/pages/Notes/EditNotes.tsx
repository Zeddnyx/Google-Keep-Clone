import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Form from "./Form";
import { useStoreApp } from "~/stores/useStoreApp";

export default function EditNotes() {
  const navigate = useNavigate();
  const { editNotes, notes } = useStoreApp();
  const { id } = useParams();
  const note = notes[Number(id)];// get params and parse to number
  const [notesEdit, setNotesEdit] = useState({
    title: note.title,
    body: note.body,
    bgColor: note.bg,
  });

  const handleEdit = () => {
    editNotes(note.id, notesEdit.title, notesEdit.body, notesEdit.bgColor);
    navigate("/");
  };

  return (
    <>
      <Form
        title={notesEdit.title}
        body={notesEdit.body}
        bgColor={notesEdit.bgColor}
        input={notesEdit}
        setInput={setNotesEdit}
        handleClick={handleEdit}
      />
    </>
  );
}
