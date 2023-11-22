import { Link } from "react-router-dom";
import { useState } from "react";
import { NavButton } from "./Buttons";

export default function Navbar(){
    const [navItems, setNavItem] = useState([
        {
            id : 0,
            icon : 'bi bi-house',
            link : '/',
            active : true
        },
        {
            id : 1,
            icon : 'bi bi-camera-reels',
            link : '/Movie',
            active : false
        },
        {
            id : 2,
            icon : 'bi bi-collection-play',
            link : '/WatchList',
            active : false
        },
    ]);

    function toggleActive(id){
        setNavItem( prevActive => {
            return prevActive.map( item => {
                return (item.id === id) ? {...item, active : true} : {...item, active : false};
            })
        })
    }
    
    let navItemElement = navItems.map( nav => 
        <NavButton
            key={nav.id}
            icon={nav.icon}
            link={nav.link}
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
                link='/login'
            />
        </div>
    )
}

