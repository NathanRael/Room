import { useState } from "react";
import { NavButton } from "./buttons";
import { navItemData } from "../data";

export default function Navbar(){
    const [navItems, setNavItem] = useState(navItemData);

    function toggleActive(id){
        setNavItem( prevActive => {
            return prevActive.map( item => {
                return (item.id === id) ? {...item, active : !item.active} : {...item, active : false};
            })
        })
    }
    
    let navItemElement = navItems.map( nav => 
        <NavButton
            key={nav.id}
            icon={nav.icon}
            active={nav.active}
            handleClick={() => toggleActive(nav.id)}
        />
    )
  
    return(
        <div className="_navbar d-flex flex-column py-40 px-8 bg-tertiary gap-128  text-light _shadow">
            <div className="d-flex flex-column gap-56">
                {navItemElement}
            </div>  
            <NavButton 
                key = {navItems.length}
                icon="bi  bi-box-arrow-left"
            />
        </div>
    )
}