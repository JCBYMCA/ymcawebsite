import MenuItem from "./MenuItem";

const NavBarMenu = ({ menuItems, className, translations }) => {
    return (
        <nav className={'font-bold hidden md:block ' + className}>
            <ul className={'flex '}>
                {menuItems?.map((menu, index) => {
                    const depthLevel = 0;
                    return <MenuItem items={menu} key={index} depthLevel={depthLevel} translations={translations} />;
                })}
            </ul>
        </nav>
    )
}

export default NavBarMenu;
