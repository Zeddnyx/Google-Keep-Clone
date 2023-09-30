import { useEffect } from "react";
import DateTime from "./DateTime";
import Grid from "./Grid";

import { MdDarkMode } from "react-icons/md";
import { PiLightbulbFilamentFill } from "react-icons/pi";
import { AiFillGithub } from "react-icons/ai";

import { useStoreApp } from "~/stores/useStoreApp";

export default function Navbar() {
  const { isDark, setIsDark, isGrid, setIsGrid } = useStoreApp();

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });

  const handleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="w-full bg-transparent py-3 flexBetweenCenter px-2">
      <div></div>
      <div className="flex justify-end gap-7 w-full">
        <div className="hidden md:block">
          <DateTime />
        </div>
        <Grid isGrid={isGrid} setIsGrid={setIsGrid} />
        {/* Theme mode */}
        <div onClick={() => handleTheme()} className="animate px-2">
          {isDark ? (
            <PiLightbulbFilamentFill className="text-2xl text-yellow" />
          ) : (
            <MdDarkMode className="text-2xl" />
          )}
        </div>

        <>
          <a
            href="https://github.com/Zeddnyx"
            target="_blank"
            className="text-dark0 dark:text-light0"
          >
            <AiFillGithub className="text-2xl" />
          </a>
        </>
      </div>
    </div>
  );
}
