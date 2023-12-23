import { useState } from "react";

export function useFilter(datalist, callback) {
  const [query, setQuery] = useState("");
  const filteredData = datalist.filter((data) =>
    callback(data).toLowerCase().includes(query)
  );
  return [filteredData, setQuery];
}
