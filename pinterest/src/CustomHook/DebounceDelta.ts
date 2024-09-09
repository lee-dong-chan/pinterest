import { useEffect, useState } from "react";

export const DebounceDelta = (delta: boolean, timer: number): boolean => {
  const [devouncevalue, SetDevounceValue] = useState(delta);

  useEffect(() => {
    const Change = setTimeout(() => {
      SetDevounceValue(delta);
    }, timer);
    return () => {
      clearTimeout(Change);
    };
  }, [delta, timer]);
  return devouncevalue;
};
