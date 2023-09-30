interface ISearch {
  query: string;
  setQuery: (query: string) => void;
}

export default function Search({ query, setQuery }: ISearch) {
  return (
    <form className="w-full">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search your notes"
        className="bg-transparent w-full outline-none border border-dark0 dark:border-light0 rounded-full p-1 pl-2 text-dark0 dark:text-light0 text-sm"
      />
    </form>
  );
}
