import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useFilter = (datalist, callback) => {
  const [query, setQuery] = useLocalStorage("query", "");

  const fillteredData = datalist.filter((data) =>
    callback(data).toLowerCase().includes(query)
  );
  return [fillteredData, setQuery, query];
};
