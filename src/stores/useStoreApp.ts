import { create } from "zustand";
import { shallow } from "zustand/shallow";
import { persist } from "zustand/middleware";
import { TStore, TTodo, TNote } from "./types";

const useStores = create(
  persist<TStore>(
    (set) => ({
      isDark: false,
      setIsDark: () => {
        set((state: any) => ({ isDark: !state.isDark }));
      },

      // todos
      todos: [],
      setTodos: (title: any) => {
        set((state: any) => ({
          todos: [...state.todos, { id: Date.now(), title }],
        }));
      },
      deleteTodos: (id: number) => {
        set((state: any) => ({
          todos: state.todos.filter((todo: TTodo) => todo?.id !== id),
        }));
      },
      editTodos: (id: number, newTitle: string) => {
        set((state: any) => ({
          todos: state.todos.map((todo: TTodo) =>
            todo.id === id ? { ...todo, title: newTitle } : todo,
          ),
        }));
      },
      doneTodos: [
        {
          id: 99,
          title: "new feature",
          body: "I change to markdown look, you can use Markdown tag like ## ### ``` and more. example: ## Test",
          bg: "#83a598",
        },
      ],
      setDoneTodos: (title: string, id: number) => {
        set((state: any) => ({
          doneTodos: [...state.doneTodos, { id, title }],
        }));
      },
      deleteDoneTodos: (id: number) => {
        set((state: any) => ({
          doneTodos: state.doneTodos.filter((todo: TTodo) => todo?.id !== id),
        }));
      },

      // notes
      notes: [],
      setNotes: (title: string, body: string, bg: string) => {
        set((state: any) => ({
          notes: [...state.notes, { id: Date.now(), title, body, bg }],
        }));
      },
      deleteNotes: (id: number) => {
        set((state: any) => ({
          notes: state.notes.filter((notes: TNote) => notes?.id !== id),
        }));
      },
      editNotes: (
        id: number,
        newNotes: string,
        newBody: string,
        newBg: string,
      ) => {
        set((state: any) => ({
          notes: state.notes.map((notes: TNote) =>
            notes.id === id
              ? { ...notes, title: newNotes, body: newBody, bg: newBg }
              : notes,
          ),
        }));
      },
    }),
    { name: "keep clone" },
  ),
);

export const useStoreApp = () => {
  const [
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
  ] = useStores((state) => {
    return [
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
