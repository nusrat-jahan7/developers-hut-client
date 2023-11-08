import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Talent Hut | ${title}`;
  }, [title]);
};
export default useTitle;
