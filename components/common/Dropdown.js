import MenuItem from "./MenuItem";
import {useInView} from "react-intersection-observer";
const Dropdown = ({ submenus, dropdown, depthLevel, translations }) => {
  const {ref, inView} = useInView({
    threshold: 1,
  });
  depthLevel = depthLevel + 1;
  // console.log("logged inview ",inView, "depth level ",depthLevel);
  const dropdownClass = depthLevel > 1 ? true ? "dropdown-submenu-right" : "dropdown-submenu-left" : "";
  return (
    <ul ref={ref} className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""} bg-primaryLight text-white`}>
      {submenus.map((submenu, index) => (
        <MenuItem items={submenu} key={index} depthLevel={depthLevel} translations={translations} />
      ))}
    </ul>
  );
};

export default Dropdown;
