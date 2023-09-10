import { shallow } from "zustand/shallow";
import { createStores } from "./index";

export const useStoreApp = () => {
  const [
    isGrid,
    setIsGrid,

    isDark,
    setIsDark,

    todos,
    setTodos,
    deleteTodos,
    editTodos,
    doneTodos,
    setDoneTodos,
    deleteDoneTodos,

    notes,
    setNotes,
    editNotes,
    deleteNotes,
  ] = createStores((state) => {
    return [
      state.isGrid,
      state.setIsGrid,

      state.isDark,
      state.setIsDark,

      state.todos,
      state.setTodos,
      state.deleteTodos,
      state.editTodos,
      state.doneTodos,
      state.setDoneTodos,
      state.deleteDoneTodos,

      state.notes,
      state.setNotes,
      state.editNotes,
      state.deleteNotes,
    ];
  }, shallow);

  return {
    isGrid,
    setIsGrid,

    isDark,
    setIsDark,

    todos,
    setTodos,
    deleteTodos,
    editTodos,
    doneTodos,
    setDoneTodos,
    deleteDoneTodos,

    notes,
    setNotes,
    editNotes,
    deleteNotes,
  };
};
