import { AiOutlineCheck } from "react-icons/ai";

interface MenuBottomProps {
  setColor: (color: string) => void;
  select: string;
  handleSave: () => void;
}

export const MenuBottom: React.FC<MenuBottomProps> = ({
  setColor,
  select,
  handleSave,
}) => {
  return (
    <div className="menu-bottom">
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
        className="btn-saved"
        onClick={handleSave}
      >
        <AiOutlineCheck size={25} />
      </button>
    </div>
  );
};

const color = ["#d79821", "#98971a", "#83a598", "#689d6a", "#cc241d"];
