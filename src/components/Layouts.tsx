import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export const Layouts = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
};
