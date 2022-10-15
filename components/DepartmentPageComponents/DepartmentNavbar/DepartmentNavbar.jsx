import NavBarMenu from "../../common/NavBarMenu";
import {departmentMenuItems} from "./DepartmentMenuItems";

const DepartmentNavbar = () => {
    return (
        <NavBarMenu menuItems={departmentMenuItems} className={'ml-[4.6rem]'} translations={''} />
    )
}

export default DepartmentNavbar;