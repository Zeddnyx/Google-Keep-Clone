import { useEffect, useReducer } from "react";

const timeFormat = Intl.DateTimeFormat("en", {
  hour: "2-digit",
  minute: "2-digit",
  //   second: "2-digit",
});

const dateFormat = new Date().toLocaleDateString("en-US", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export default function DateTime() {
  const [_, rerender] = useReducer((a) => a + 1, 0);
  const today = new Date();

  useEffect(() => {
    const interval = setInterval(rerender, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-dark0 dark:text-light0 flexBetweenCenter">
      <h4>
        {timeFormat.format(today)} | {dateFormat}
      </h4>
    </div>
  );
}
