import { useEffect, useRef } from 'react';

type ClickOutsideProps = () => void;
const useClickOutside = (onClickOutside: ClickOutsideProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onClickOutside();
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [onClickOutside]);

    return ref;

};

export default useClickOutside;
