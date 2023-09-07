import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export const Layouts = () => {
  return (
    <main className="bg-light0 dark:bg-dark0">
      <Navbar />
      <Outlet />
    </main>
  );
};
