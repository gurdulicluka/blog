import Fuse from "fuse.js";
import { useState } from "react";
import React from "react";

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

  return (
    <div className="dropdown dropdown-bottom w-full md:w-fit dropdown-end">
      <input
        className="input md:input-sm focus:outline-accent w-full md:w-[220px] bg-base-50"
        type="text"
        value={query}
        onChange={handleOnSearch}
        placeholder="Search posts"
      />

      {posts.length > 0 && (
        <ul className="bg-base-300/60 backdrop-blur-sm dropdown-content rounded-b-lg menu translate-y-4 gap-2 p-3 z-50 shadow-xl md:max-w-[500px] max-w-full w-screen">
          {posts.map((post) => (
            <a
              key={post.id}
              className="inline-flex w-full flex-col p-4 bg-base-200 rounded-lg hover:bg-accent transition ease"
              href={`/blog/${post.slug}`}>
              <h3 className="font-semibold">{post.title}</h3>
              <p className="text-sm my-2 line-clamp-2">{post.description}</p>
              <time className="text-base-content/60 text-xs self-end">
                {post.date}
              </time>
            </a>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
