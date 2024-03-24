"use client";
import Sidebar from "./Sidebar";
import classes from "./Section.module.css";
import { ReactNode, useState } from "react";

interface HeaderProp{
  active? : string;
 children: ReactNode;
}

const Section: React.FC<HeaderProp> = ({active,children}) => {
  // const [isClose, setIsOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setIsOpen(!isClose);
  // };
  const user: string = "super admin";
  let css = "";
  let sidebarClose = "";
  if(user === "shop owner"){
    css = `${classes.main}`;
    sidebarClose = classes.sidebar_closed;
  }
  else{
    css = `${classes.main} ${classes.sideOpen}`
    sidebarClose = classes.sidebar_open;
  }
  return (
    <div className={css}>
      <div >
        <Sidebar user={user}  active={active}  />
      </div>
      <div
        className={`${classes.container} ${
          sidebarClose
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default Section;
