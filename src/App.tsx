import { Routes, Route } from "react-router-dom";
import { Layouts } from "components/Layout/Layouts";
import NewNotes from "pages/Notes/NewNotes";
import EditNotes from "pages/Notes/EditNotes";
import ViewNotes from "pages/Notes/ViewNotes";

import Todos from "~/pages/Todos/index";
import NotFound from "~/pages/NotFound";
import Index from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route path="/" element={<Index />} />
        <Route path="notes/new" element={<NewNotes />} />
        <Route path="notes/edit/:id" element={<EditNotes />} />
        <Route path="notes/view/:id" element={<ViewNotes />} />
        <Route path="to-do" element={<Todos />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
