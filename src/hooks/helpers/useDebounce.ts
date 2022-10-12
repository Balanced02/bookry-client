import { useState, useEffect } from 'react';

/**
 * Sets a debounced value to value (passed in) after the specified delay.
 * @param value - Value to debounce.
 * @param delay - Timeout to delay the value setup.
 */
export function useDebounce(value: string, delay = 1000) {
  const [debouncedValue, setDebouncedValue] = useState<string>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
