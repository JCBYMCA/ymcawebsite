import { useState, useEffect, useRef } from "react";
import {useTranslations} from "next-intl";
import Dropdown from "./Dropdown";
import Link from "next/link";

const MenuItem = ({ items, depthLevel, translations }) => {
    const [dropdown, setDropdown] = useState(false);
    const t = useTranslations(translations);
    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
    };

    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
    };

    return (
        <li
            className="menu-items"
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {items.submenu ? (
                <>
                    <button
                        type="button"
                        aria-haspopup="menu"
                        className={'cursor-pointer hover:bg-primary hover:text-white decoration-primary decoration-4 duration-300 underline-offset-4'}
                        aria-expanded={dropdown ? "false" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                        {t(items.title)}{" "}
                        {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
                    </button>
                    <Dropdown
                        depthLevel={depthLevel}
                        submenus={items.submenu}
                        dropdown={dropdown}
                        translations={translations}
                    />
                </>
            ) : (
                <Link href="/pages#"><h1 className={'cursor-pointer py-[0.7rem] px-[1rem] hover:bg-primary hover:text-white decoration-primary decoration-4 duration-300 underline-offset-4'}>{t(items.title)}</h1></Link>
            )}
        </li>
    );
};

export default MenuItem;
