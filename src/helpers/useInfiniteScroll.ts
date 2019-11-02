import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

export const useInfiteScroll = (callback: () => Promise<any>): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isFetching, setIsFetching] = useState(false);
  const savedCallback = useRef<() => Promise<any>>(callback);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (isFetching) {
      savedCallback.current().finally(() => setIsFetching(false));
    }
  }, [isFetching]);

  useEffect(() => {
    function handler () {
      if (isFetching || window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        return;
      }
      setIsFetching(true);
    }
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);
  return [isFetching, setIsFetching];
};
