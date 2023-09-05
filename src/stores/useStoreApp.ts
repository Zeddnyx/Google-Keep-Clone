import { create } from "zustand";
import { shallow } from "zustand/shallow";
import { persist } from "zustand/middleware";
import { TStore, TTodo, TNote } from "./types";

const useStore = create(
  persist<TStore>(
    (set) => ({

      // todos
      todos: [],
      setTodos: (title: any) => {
        set((state: any) => ({
          todos: [...state.todos, { id: Date.now(), title }],
        }));
      },
      deleteTodos: (id: number) => {
        set((state: any) => ({
          doneTodos: state.todos.filter((todo: TTodo) => todo?.id !== id),
        }));
      },
      editTodos: (id: number, newTitle: string) => {
        set((state: any) => ({
          todos: state.todos.map((todo: TTodo) =>
            todo.id === id ? { ...todo, title: newTitle } : todo,
          ),
        }));
      },
      doneTodos: [],
      setDoneTodos: (title: string, id: number) => {
        set((state: any) => ({
          doneTodos: [...state.doneTodos, { id, title }],
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
    todos,
    setTodos,
    deleteTodos,
    editTodos,
    doneTodos,
    setDoneTodos,

    notes,
    setNotes,
    editNotes,
    deleteNotes,
  ] = useStore((state) => {
    return [
      state.todos,
      state.setTodos,
      state.deleteTodos,
      state.editTodos,
      state.doneTodos,
      state.setDoneTodos,

      state.notes,
      state.setNotes,
      state.editNotes,
      state.deleteNotes,
    ];
  }, shallow);

  return {
    todos,
    setTodos,
    deleteTodos,
    editTodos,
    doneTodos,
    setDoneTodos,

    notes,
    setNotes,
    editNotes,
    deleteNotes,
  };
};
