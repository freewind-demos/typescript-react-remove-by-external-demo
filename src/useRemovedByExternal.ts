import { useEffect, useMemo, useState } from "react";

export const useRemovedByExternal = (element: HTMLElement | null): boolean => {
    const [isRemoved, setIsRemoved] = useState<boolean>(false);

    const win = useMemo(() => {
        return element?.ownerDocument.defaultView
    }, [element]);

    useEffect(() => {
        if (!element || !win) { return; };
        const handler = () => {
            setIsRemoved(true);
        };
        win.addEventListener("beforeunload", handler)
        return () => {
            win.removeEventListener("beforeunload", handler)
        }
    }, [win, element]);


    useEffect(() => {
        if (!element || !win) {
            return;
        }

        const checkRemoval = () => {
            if (element && !element.isConnected) {
                setIsRemoved(true);
            }
        };

        const observer = new MutationObserver(checkRemoval);

        observer.observe(win.document.body, {
            childList: true,
            subtree: true,
        });

        return () => {
            observer.disconnect();
        };
    }, [win, element]);

    return isRemoved;
};