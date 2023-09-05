import ButtonBack from "~/components/ButtonBack";
import Input from "~/components/Input";
import { MenuBottom } from "~/components/Notes/MenuBottom";
import { MenuTop } from "~/components/Notes/MenuTop";

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
    <div
      style={{
        backgroundColor: bgColor,
        padding: "1rem",
        color: bgColor ? "#ebdbb2" : "#282828",
      }}
    >
      <ButtonBack />
      <div>
        <div className="flexBetweenCenter w-full">
          <Input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setInput({ ...input, title: e.target.value });
            }}
            className="text-2xl font-bold"
          />

          {title && <MenuTop id={input.id} color={bgColor} />}
        </div>
        <textarea
          className="w-full h-[30rem] max-h-2xl p-1 outline-none focus:ring-0 bg-transparent"
          placeholder="Content"
          value={body}
          onChange={(e) => {
            setInput({ ...input, body: e.target.value });
          }}
        ></textarea>
        <div className="flexBetweenCenter">
          <MenuBottom
            select={bgColor}
            setColor={(e) => {
              setInput({ ...input, bgColor: e });
            }}
            handleSave={() => handleClick()}
          />
        </div>
      </div>
    </div>
  );
}
