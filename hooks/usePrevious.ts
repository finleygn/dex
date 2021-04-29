import { useEffect, useState } from 'react';

const usePrevious = <T>(value: T): T => {
  const [prev, setPrev] = useState(value);

  useEffect(() => {
    setPrev(value);
  }, [value]);

  return prev;
};

export default usePrevious;
