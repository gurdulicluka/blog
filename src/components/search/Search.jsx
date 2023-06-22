import Fuse from "fuse.js";
import { useState } from "react";

const options = {
  keys: ["title", "description", "category", "author", "slug"],
  includeMatches: true,
  minMatchCharLength: 2,
  threshold: 0.2,
};

const Search = ({ searchList }) => {
  const [query, setQuery] = useState("");
  const fuse = new Fuse(searchList, options);

  const posts = fuse
    .search(query)
    .map((result) => result.item)
    .slice(0, 5);

  function handleOnSearch({ target = {} }) {
    const { value } = target;
    setQuery(value);
  }

  function handleBlur() {
    setTimeout(() => {
      setQuery("");
    }, 0);
  }

  return (
    <div className="w-full md:w-fit relative">
      <input
        className="input md:h-[36px] text-sm w-full placeholder:font-medium md:w-[220px] bg-base-50"
        type="text"
        value={query}
        onChange={handleOnSearch}
        onBlur={handleBlur}
        placeholder="Search..."
      />

      {posts.length > 0 && (
        <ul className="bg-base-300 border-2 border-accent absolute p-0 top-[100%] right-0 rounded-lg menu gap-[1px] translate-y-4 z-50 shadow-xl md:max-w-[500px] max-w-full w-screen [&>*:last-child]:rounded-b-md [&>*:first-child]:rounded-t-md [&>*:only-child]:rounded-md">
          {posts.map((post) => (
            <li key={post.id} className="overflow-hidden">
              <a
                className="inline-flex w-full rounded-none gap-0 flex-col items-start bg-base-200 hover:bg-accent hover:text-white transition ease"
                href={`/blog/${post.slug}`}>
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-sm my-2 line-clamp-2">{post.description}</p>
                <time className="text-xs self-end">{post.date}</time>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
