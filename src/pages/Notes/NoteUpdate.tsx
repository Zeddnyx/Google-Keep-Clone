import { useState } from "react";
import {  useParams } from "react-router-dom";

import Form from "./NoteForm";
import { useStoreApp } from "~/stores/useStoreApp";

export default function EditNotes() {
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
    window.history.back();
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
