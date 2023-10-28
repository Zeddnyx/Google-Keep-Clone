import Animation from "~/components/Animation";
import ButtonBack from "~/components/ButtonBack";
import Input from "~/components/Input";
import { MenuBottom } from "~/components/Notes/MenuBottom";

type TForm = {
  title: string;
  body: string;
  bgColor: string;
  input: any;
  setInput: (item: any) => void;
  handleClick: () => void;
};

export default function Form({
  title,
  body,
  bgColor,
  input,
  setInput,
  handleClick,
}: TForm) {
  return (
    <Animation>
      <div
        className={
          bgColor ? "p-2 text-light0 mb-5" : "dark:bg-dark0 dark:text-light0 p-2  mb-5"
        }
        style={{ backgroundColor: bgColor }}
      >
        <ButtonBack handleSave={handleClick} />
        <>
          <div className="flexBetweenCenter w-full ">
            <Input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => {
                setInput({ ...input, title: e.target.value });
              }}
              className="text-2xl font-bold"
            />

          </div>
          <textarea
            className="w-full h-screen max-h-2xl p-1 outline-none focus:ring-0 bg-transparent leading-relaxed"
            placeholder="Content"
            value={body}
            onChange={(e) => {
              setInput({ ...input, body: e.target.value });
            }}
          ></textarea>
          <div className="flexBetweenCenter">
            <MenuBottom
              bg={bgColor}
              select={bgColor}
              setColor={(e) => {
                setInput({ ...input, bgColor: e });
              }}
              handleSave={() => handleClick()}
            />
          </div>
        </>
      </div>
    </Animation>
  );
}
