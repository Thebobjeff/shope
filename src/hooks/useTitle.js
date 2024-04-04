import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Shope`;
  }, [title]);
  return null;
};
