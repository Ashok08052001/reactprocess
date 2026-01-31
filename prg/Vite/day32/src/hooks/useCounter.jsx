import { useState, useCallback, useRef } from "react";

export default function useCounter(initial = 0, step = 1) {
  const initialRef = useRef(Number(initial) || 0);
  const [count, setCount] = useState(() => Number(initial) || 0);

  const increment = useCallback(
    () => setCount((c) => c + Number(step)),
    [step],
  );
  const decrement = useCallback(
    () => setCount((c) => c - Number(step)),
    [step],
  );
  const reset = useCallback(() => setCount(initialRef.current), []);

  return { count, increment, decrement, reset };
}
