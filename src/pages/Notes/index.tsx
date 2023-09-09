import Animation from "~/components/Animation";
import { TNote } from "~/stores/types";

import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

export default function index({ data }: any) {
  return (
    <>
      {data
        .map((item: TNote, id: number) => {
          return (
            <Animation key={id}>
              <Link to={`/notes/view/${id}`}>
                <div
                  className={`notes-item ${item.bg
                      ? "text-light0 border-0"
                      : "text-dark0 border-dark0 dark:text-light0 dark:border-light0"
                    } `}
                  style={{
                    backgroundColor: item.bg,
                  }}
                >
                  <div className="flex h-10 max-w-[130px] w-[130px] lg:max-w-[200px] lg:w-[200px] ">
                    <h2 className="truncate">{item.title}</h2>
                  </div>
                  <ReactMarkdown
                    children={item.body}
                    className="line-clamp-5 md:line-clamp-4"
                  ></ReactMarkdown>
                </div>
              </Link>
            </Animation>
          );
        })
        .reverse()}
    </>
  );
}
