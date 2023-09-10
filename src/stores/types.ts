export type TTodo = {
  id: number;
  title: string;
};

export type TNote = {
  id: number;
  title: string;
  body: string;
  bg: string;
};

export type TStore = {
  isGrid: boolean;
  setIsGrid: (isGrid: boolean) => void;  

  isDark: boolean;
  setIsDark: (isDark: boolean) => void;

  todos: TTodo[];
  setTodos: (title: string) => void;
  deleteTodos: (id: number) => void;
  editTodos: (id: number, newTitle: string) => void;
  doneTodos: TTodo[];
  setDoneTodos: (title: string, id: number) => void;
  deleteDoneTodos: (id: number) => void;

  notes: TNote[];
  setNotes: (title: string, body: string, bg: string) => void;
  editNotes: (id: number, title: string, body: string, bg: string) => void;
  deleteNotes: (id: number) => void;
};
