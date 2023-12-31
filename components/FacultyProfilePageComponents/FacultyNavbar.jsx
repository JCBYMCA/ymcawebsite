import NavBarMenu from "../common/NavBarMenu";
import {departmentMenuItems} from "../DepartmentPageComponents/DepartmentNavbar/DepartmentMenuItems";

const FacultyNavbar = () => {
    return (
        <NavBarMenu menuItems={departmentMenuItems} className={'mr-20'} translations={''} />
    )
}

export default FacultyNavbar;