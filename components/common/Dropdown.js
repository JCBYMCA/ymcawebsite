import MenuItem from "./MenuItem";
import {useInView} from "framer-motion";
import {useEffect, useRef} from "react";

const Dropdown = ({ submenus, dropdown, depthLevel, translations }) => {
  const viewRef = useRef();

  const inView = useInView(viewRef, {
    amount: 1,
    once: true,
  });


  depthLevel = depthLevel + 1;
  // console.log("logged inview ",inView, "depth level ",depthLevel);
  const dropdownClass = depthLevel > 1 ? inView ? "dropdown-submenu-right" : "dropdown-submenu-left" : "";
  return (
    <ul ref={viewRef} className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""} bg-primaryLight text-white`}>
      {submenus.map((submenu, index) => (
        <MenuItem items={submenu} key={index} depthLevel={depthLevel} translations={translations} />
      ))}
    </ul>
  );
};

export default Dropdown;
