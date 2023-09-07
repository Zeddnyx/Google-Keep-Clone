import { Outlet } from "react-router-dom";
import Header from "./Header";

export const Layouts = () => {
  return (
    <main className="bg-light0 dark:bg-dark0">
      <Header />
      <Outlet />
    </main>
  );
};
