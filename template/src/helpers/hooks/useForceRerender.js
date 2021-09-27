import {useState} from 'react';

const useForceRerender = () => {
    const [, setValue] = useState(0);
    return () => setValue(v => v + 1);
};

export default useForceRerender;