import Drawer from "react-modern-drawer";
import MenuItem from "../../common/MenuItem";
import {useTranslations} from "next-intl";
import {useEffect, useRef, useState} from "react";
import Dropdown from "../../common/Dropdown";
import Link from "next/link";




const DrawerItem = ({ items, depthLevel, translations }) => {
    const [dropdown, setDropdown] = useState(false);
    const t = useTranslations(translations);
    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("touchstart", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    const onTap = () => {
        setDropdown(!dropdown);
    };

    return (
        <li
            className="menu-items"
            ref={ref}

        >
            {items.submenu ? (
                <>
                    <div className={dropdown?"  bg-primary  rounded-tl-md":"  "}>
                    <button

                        type="button"
                        aria-haspopup="menu"
                        className={` cursor-pointer  hover:text-white decoration-primary decoration-4 duration-300 `}
                        aria-expanded={dropdown ? "false" : "false"}
                        onClick={onTap}
                    >
                        {t(items.title)}{" "}
                        {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
                    </button>
                    </div>
                    <DrawerSubMenu
                        depthLevel={depthLevel}
                        submenus={items.submenu}
                        dropdown={dropdown}
                        translations={translations}
                    />
                </>
            ) : (
                <Link href={items.link ? items.link : "#"}><h1 className={'cursor-pointer py-[0.2rem] px-[1rem] hover:bg-primary hover:text-white decoration-primary decoration-4 duration-300 underline-offset-4'}>{t(items.title)}</h1></Link>
            )}
        </li>
    );
}

const DrawerSubMenu= ({ depthLevel, submenus, dropdown,translations }) => {
    depthLevel = depthLevel + 1;
    const dropdownRef = useRef(null);
    const [posX, setPosX] = useState(0);
    const screenWidth = typeof window !== "undefined" ? window.innerWidth : 0;

    useEffect(() => {
        if (dropdown && dropdownRef.current) {
            if(screenWidth - posX > 200)
                setPosX(dropdownRef.current.getBoundingClientRect().left);
        }
    });


    // console.log("logged inview ",inView, "depth level ",depthLevel);
    const dropdownClass = depthLevel > 1 ?  ` border-l-4 ` : "";
    return (
        <ul ref={dropdownRef} className={`  border-l-4  ${dropdown ? "show" : "hidden"}  bg-primaryLight text-white  border-primary pl-1 `}>
            {submenus.map((submenu, index) => (
                <DrawerItem items={submenu} key={index} depthLevel={depthLevel} translations={translations} />
            ))}
        </ul>
    );
}
const NavDrawer = ({ open, data,translations, onClose }) => {
    const t = useTranslations(translations);
    return (
        <Drawer
            open={open}
            onClose={onClose}
            direction='right'
            className='bg-amber-300 text-white'
        >
            <nav className={'font-bold md:block overflow-scroll pt-10 h-[100vh] bg-primary ' }>
                <ul className={""}>
                    {data.map((menu, index) => {
                        const depthLevel = 0;
                        return <DrawerItem items={menu} key={index} depthLevel={depthLevel} translations={translations} />;
                    })}
                </ul>
            </nav>

        </Drawer>
    )
}
export default NavDrawer;