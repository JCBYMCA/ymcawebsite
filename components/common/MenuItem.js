import { useState, useEffect, useRef } from "react";
import {useTranslations} from "next-intl";
import Dropdown from "./Dropdown";
import Link from "next/link";
import { useRouter } from "next/router";

const MenuItem = ({ items, depthLevel, translations }) => {
    const router= useRouter();
    const [dropdown, setDropdown] = useState(false);
    const [isNotice, setIsNotice] = useState(false);
    const t = useTranslations(translations);
    let ref = useRef();

    useEffect(() => {
        if(router.pathname==='/notices/[slug]') {
            setIsNotice(true);
        }
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
            {(items.submenu?.length>0)? (
                <>
                    <button
                        type="button"
                        aria-haspopup="menu"
                        className={'cursor-pointer hover:bg-[#455a64] hover:text-white decoration-primary decoration-4 duration-300 underline-offset-4'}
                        aria-expanded={dropdown ? "false" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                        {items.title}{" "}
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
                <Link target={items.isNewTab? "_blank": "_self"} className={'cursor-pointer hover:bg-[#455a64] hover:text-white decoration-primary decoration-4 duration-300 underline-offset-4'} href={`${items.link ? (isNotice?"../"+items.link:items.link) : "#"}`}><h1 >{items.title}</h1></Link>
            )}
        </li>
    );
};

export default MenuItem;
