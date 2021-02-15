import { useCallback, useState } from 'react';

const useForceUpdate = () => {
  const [, setState] = useState(Object.create(null));
  return useCallback(() => {
    setState(Object.create(null));
  }, [setState]);
};
export default useForceUpdate;