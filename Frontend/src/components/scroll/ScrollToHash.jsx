import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        
        const timer = setTimeout(() => {
            const lenis = window.lenis;

            
            const isLenisValid = lenis && typeof lenis.scrollTo === "function";

            if (hash) {
                const id = hash.replace("#", "");
                const element = document.getElementById(id);
                if (element) {
                    if (isLenisValid) {
                        lenis.scrollTo(element, { offset: -80, duration: 1 });
                    } else {
                        window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
                    }
                }
            } else {
                
                if (isLenisValid) {
                    lenis.scrollTo(0, { immediate: true });
                } else {
                    window.scrollTo(0, 0);
                }
            }
        }, 0.5); 

        return () => clearTimeout(timer);
    }, [pathname, hash]);

    return null;
}