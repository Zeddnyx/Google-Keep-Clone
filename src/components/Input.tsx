import { memo } from "react";

interface Props {
  type: string;
  name?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

function Input({ type, name, value, placeholder, onChange, className }: Props) {
  return (
    <input
      className={`p-1 outline-none focus:ring-0 w-full bg-transparent ${className}`}
      placeholder={placeholder}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
export default memo(Input);
