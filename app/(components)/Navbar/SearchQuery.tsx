"use client";
import { Input } from "@nextui-org/input";
import { SearchIcon } from "./SearchIcon";
import { useEffect, useState, useRef } from "react";
import NextLink from "next/link";
import { Listbox, ListboxSection, ListboxItem } from "@nextui-org/listbox";

interface QueryProps {
  id: string;
  query: string;
  path: string;
}
[];

export default function SearchQuery() {
  const [query, setQuery] = useState<string>("");
  const [list, setList] = useState<QueryProps[]>();
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const searchResult = async () => {
      if (query === "") {
        setList([]);
        return;
      }

      try {
        const result = await fetch(`/api/search?query=${query}`);
        const data = await result.json();
        setList(data);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setList([]);
      }
    };

    searchResult();
  }, [query]);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setList([]);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative">
      <Input
        classNames={{
          base: "max-w-full sm:max-w-[30rem] h-10",
          mainWrapper: "h-full relative",
          input: "text-small",
          inputWrapper:
            "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
        }}
        placeholder="Explore your ice cream paradise..."
        size="sm"
        startContent={<SearchIcon size={18} />}
        type="search"
        value={query}
        onValueChange={setQuery}
      />

      {list && list.length > 0 && (
        <Listbox
          ref={ref}
          className="absolute left-0 z-10 mt-2 bg-white dark:bg-black dark:text-white border rounded-md shadow-lg w-full overflow-y-auto max-h-78"
        >
          {list.map(({ id, query, path }) => (
            <ListboxItem
              as={NextLink}
              key={id}
              href={path}
              className="px-4 py-2 cursor-pointer"
              onPress={() => setQuery('')}
            >
              {query}
            </ListboxItem>
          ))}
        </Listbox>
      )}
    </div>
  );
}
