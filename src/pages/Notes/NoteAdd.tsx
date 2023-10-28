import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useStoreApp } from "~/stores/useStoreApp";
import Form from "./NoteForm";

export default function NewNotes() {
  const navigate = useNavigate();
  const { setNotes } = useStoreApp();
  const [newNotes, setNewNotes] = useState({
    title: "",
    body: "",
    bgColor: "",
    date: new Date().toLocaleString(),
  });

  const handleSaved = () => {
    newNotes.title == ""
      ? setNotes((newNotes.title = "Untitled"), newNotes.body, newNotes.bgColor, newNotes.date)
      : setNotes(newNotes.title, newNotes.body, newNotes.bgColor, newNotes.date);
    navigate("/");
  };

  return (
    <Form
      input={newNotes}
      title={newNotes.title}
      body={newNotes.body}
      bgColor={newNotes.bgColor}
      setInput={setNewNotes}
      handleClick={handleSaved}
    />
  );
}
