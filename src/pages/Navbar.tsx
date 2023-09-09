import { useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { PiLightbulbFilamentFill } from "react-icons/pi";
import { AiFillGithub } from "react-icons/ai";
import { IoGridOutline } from "react-icons/io5";
import { CiGrid2V } from "react-icons/ci";

import { useStoreApp } from "~/stores/useStoreApp";

interface IProps {
  isGrid: boolean;
  setIsGrid: (isGrid: boolean) => void;
}

export default function Navbar({ isGrid, setIsGrid }: IProps) {
  const { isDark, setIsDark } = useStoreApp();

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
      <div className="flexBetweenCenter">
        {/*         Grid mode */}
        <button
          className="text-dark0 dark:text-light0 animate hover:rotate-180 animate"
          onClick={() => setIsGrid(!isGrid)}
        >
          {isGrid ? (
            <IoGridOutline className="text-2xl" />
          ) : (
            <CiGrid2V className="text-2xl rotate-90" />
          )}
        </button>

        {/*         Theme mode */}
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
