import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import { BsCheck2Square } from "react-icons/bs";

import { useStoreApp } from "~/stores/useStoreApp";

interface IDone {
  title: string;
  id: number;
}

export const Checked: React.FC<{ item: IDone[] }> = ({ item }) => {
  const { deleteTodos } = useStoreApp();
  const [isActive, setIsActive] = useState(false);
  typeof window != "undefined";

  const handleActive = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="flexColStart text-start">
      <button onClick={handleActive} className="flex gap-1 items-center">
        <span className={!isActive ? "rotate-180" : "rotate-0"}>
          <IoIosArrowDropdown />
        </span>
        <p>{item.length} Checked todo list</p>
      </button>

      {isActive && (
        <div className="flexColStart gap-2">
          {item.map((item) => {
            return (
              <div key={item.id} className="flex items-center gap-2 ">
                <span>
                  <BsCheck2Square />
                </span>
                <p className="line-through text-light3">{item.title}</p>
                <span onClick={() => deleteTodos(item.id)}>
                  <CgClose />
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
