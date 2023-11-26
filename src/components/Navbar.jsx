import { useEffect, useState } from "react";
import { NavButton } from "./Buttons";

export default function Navbar() {
  const pathName = window.location.pathname;
  const [navItems, setNavItem] = useState([
    {
      id: 0,
      icon: "bi bi-house",
      link: "/",
      active: true,
    },
    {
      id: 1,
      icon: "bi bi-camera-reels",
      link: "/Movie",
      active: false,
    },
    {
      id: 2,
      icon: "bi bi-collection-play",
      link: "/WatchList",
      active: false,
    },
  ]);
  
  useEffect(()=>{
    toggleActive(pathName);
  }, [pathName] );

  function toggleActive(id) {
    setNavItem((prevActive) => {
      return prevActive.map((item) => {
        return item.link === id
          ? { ...item, active: true }
          : { ...item, active: false };
      });
    });
  }

  let navItemElement = navItems.map((nav) => (
    <NavButton
      key={nav.id}
      icon={nav.icon}
      link={nav.link}
      active={nav.active}
      handleClick={() => toggleActive(nav.link)}
    />
  ));

  return (
    <div className="_navbar  d-sm-flex flex-row flex-md-column py-16 px-0  py-md-40 px-md-8 bg-tertiary gap-16 gap-md-80 gap-xl-128  text-light _shadow">
      <div className=" px-8  d-flex flex-row flex-md-column gap-56">
        {navItemElement}
        <div className="d-block d-md-none">
          <NavButton
            key={navItems.length}
            icon="bi  bi-box-arrow-left"
            link="/login"
          />
        </div>
      </div>
      <div className="d-none d-md-block">
        <NavButton
          key={navItems.length}
          icon="bi  bi-box-arrow-left"
          link="/login"
        />
      </div>
    </div>
  );
}