import { AiFillSave } from "react-icons/ai";

interface MenuBottomProps {
  bg: string;
  setColor: (color: string) => void;
  select: string;
  handleSave: () => void;
}

export const MenuBottom: React.FC<MenuBottomProps> = ({
  bg,
  setColor,
  select,
  handleSave,
}) => {
  return (
    <div
      className="menu-bottom bg-light0 dark:bg-dark0"
      style={{ backgroundColor: bg }}
    >
      <div className="flex gap-2 items-center">
        {color.map((color, i) => (
          <button
            key={i}
            className={`menu-bottom-colors
            ${select == color ? "opacity-100" : "opacity-30"}`}
            style={{ backgroundColor: color }}
            onClick={() => setColor(color)}
          ></button>
        ))}
      </div>
      <button
        className={bg ? "text-light0 flexBetweenCenter" : "text-dark0 dark:text-light0 flexBetweenCenter"}
        onClick={handleSave}
      >
        <AiFillSave /> Save
      </button>
    </div>
  );
};

const color = ["#d79821", "#98971a", "#83a598", "#689d6a", "#cc241d"];
