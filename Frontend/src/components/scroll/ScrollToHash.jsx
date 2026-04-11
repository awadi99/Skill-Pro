import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const el = document.getElementById(hash.replace("#", ""));
            if (el) {
                setTimeout(() => {
                    window.scrollTo({
                        top: el.offsetTop - 80,
                        behavior: "smooth",
                    });
                }, 100);
            }
        }
    }, [hash]);

    return null;
}