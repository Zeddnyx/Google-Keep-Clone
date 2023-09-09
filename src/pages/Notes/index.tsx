import Animation from "~/components/Animation";
import { MenuTop } from "~/components/Notes/MenuTop";
import { TNote } from "~/stores/types";

import { Link } from "react-router-dom";

export default function index({ data }: any) {
  return (
    <>
      {data
        .map((item: TNote, id: number) => {
          return (
            <Animation key={id}>
              <div
                className={`notes-item ${
                  item.bg
                    ? "text-light0 border-0"
                    : "text-dark0 border-dark0 dark:text-light0 dark:border-light0"
                } `}
                style={{
                  backgroundColor: item.bg,
                }}
              >
                <div className="flexBetweenCenter">
                  <Link to={`/notes/edit/${id}`}>
                    <div className="flex h-10 max-w-[130px] w-[130px] lg:max-w-[200px] lg:w-[200px] ">
                      <h2 className="truncate">{item.title}</h2>
                    </div>
                  </Link>
                  <MenuTop id={item.id} color={item.bg} />
                </div>
                <Link to={`/notes/edit/${id}`}>
                  <textarea
                    disabled
                    className="textarea-body"
                    value={item.body}
                    style={{ resize: "none" }}
                  ></textarea>
                </Link>
              </div>
            </Animation>
          );
        })
        .reverse()}
    </>
  );
}
