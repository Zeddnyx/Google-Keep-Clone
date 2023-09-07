import { useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { PiLightbulbFilamentFill } from "react-icons/pi";

import { useStoreApp } from "~/stores/useStoreApp";

export default function Navbar() {
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
    <div className="w-full bg-transparent pt-2 flexBetweenCenter px-2">
      <div></div>
      <div>
        <div
          onClick={() => handleTheme()}
          className="transition-all duration-300 ease-in-out"
        >
          {isDark ? (
            <PiLightbulbFilamentFill className="text-2xl text-yellow" />
          ) : (
            <MdDarkMode className="text-2xl" />
          )}
        </div>
      </div>
    </div>
  );
}
