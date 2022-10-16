import NavBarMenu from "../../common/NavBarMenu";
import {departmentMenuItems} from "./DepartmentMenuItems";

const DepartmentNavbar = () => {
    return (
        <NavBarMenu menuItems={departmentMenuItems} className={'ml-auto mr-20'} translations={''} />
    )
}

export default DepartmentNavbar;