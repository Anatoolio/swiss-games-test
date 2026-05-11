import { useEffect, useRef } from 'react';

// Closes a popover/menu on Escape or when clicking outside the container.
export default function useMenuControls(isOpen, onClose) {
    const ref = useRef(null);

    useEffect(() => {
        if (!isOpen) return undefined;

        const handleKey = (e) => {
            if (e.key === 'Escape') onClose();
        };
        const handleClick = (e) => {
            if (ref.current && !ref.current.contains(e.target)) onClose();
        };

        document.addEventListener('keydown', handleKey);
        document.addEventListener('mousedown', handleClick);
        return () => {
            document.removeEventListener('keydown', handleKey);
            document.removeEventListener('mousedown', handleClick);
        };
    }, [isOpen, onClose]);

    return ref;
}
