import { useEffect } from 'react';

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Programming sage`;
    }, [title])
};

export default useTitle;