import { useEffect, useRef } from "react";

export function useUnmount(fn: () => void) {
    const fnRef = useRef<() => void>();
    fnRef.current = fn;
    useEffect(() => fnRef.current, []);
}