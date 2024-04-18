import { useState, useEffect } from "react";

function BackToTop() {
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTop(true);
            } else {
                setBackToTop(false);
            }
        });
    },
        []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div>
            {backToTop && (
                <button onClick={scrollUp} className="fixed w-28 bottom-20 right-20 p-2.5 text-2xl rounded-lg bg-mainBackground border-none cursor-pointer z-50 hover:bg-accentColor text-fontDark hover:text-white">
                   ⇧
                </button>
            )
            }
        </div >
    );
}

export default BackToTop;

