import { IoGridOutline } from "react-icons/io5";
import { CiGrid2V } from "react-icons/ci";

interface IGrid {
  isGrid: boolean;
  setIsGrid: (isGrid: boolean) => void;
}

export default function Grid({ isGrid, setIsGrid }: IGrid) {
  return (
    <button
      className="text-dark0 dark:text-light0 hover:rotate-180 animate"
      onClick={() => setIsGrid(!isGrid)}
    >
      {isGrid ? (
        <IoGridOutline className="text-2xl" />
      ) : (
        <CiGrid2V className="text-2xl rotate-90" />
      )}
    </button>
  );
}
