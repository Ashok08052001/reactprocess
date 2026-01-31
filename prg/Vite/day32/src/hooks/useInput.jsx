import { useState, useCallback, useRef } from "react";

export default function useInput(initialValue = "") {
  const initialRef = useRef(initialValue ?? "");
  const [value, setValue] = useState(initialRef.current);

  const onChange = useCallback((e) => {
    // support both direct value and event
    if (e && e.target !== undefined) setValue(e.target.value);
    else setValue(e);
  }, []);

  const reset = useCallback(() => setValue(initialRef.current), []);

  return { value, onChange, reset };
}
