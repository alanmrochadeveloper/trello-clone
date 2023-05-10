import { useRef, useEffect } from "react";

export const useFocusInput = () => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return ref;
};
