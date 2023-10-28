import { Routes, Route } from "react-router-dom";

import { Layouts } from "components/Layout/Layouts";
import NoteAdd from "pages/Notes/NoteAdd";
import NoteUpdate from "pages/Notes/NoteUpdate";
import NoteView from "pages/Notes/NoteView";

import Todos from "~/pages/Todos/index";
import NotFound from "~/pages/NotFound";
import Index from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route path="/" element={<Index />} />
        <Route path="notes/new" element={<NoteAdd />} />
        <Route path="notes/edit/:id" element={<NoteUpdate />} />
        <Route path="notes/view/:id" element={<NoteView />} />
        <Route path="to-do" element={<Todos />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
