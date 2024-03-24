import { ReactNode } from "react";
import classes from "./DashboardTitle.module.css";

interface dashboardProp {
  data?: object[];
  children?:  ReactNode;
}

const DashboardTitle: React.FC<dashboardProp> = ({ data, children }) => {
  return (
    <div className={classes.container}>
       {data && data.map((item: any, index: number) => (
        <div key={index}>
            {item.upDescription ? <p className={classes.upDescription}>{item.upDescription}</p>: "" }
          <p className={classes.title}>{item.title}</p> 
          {item.Description ?<p className={classes.description}>{item.downDescription}</p> : " "}
        </div>
      ))}
      {children}
    </div>
  );
};

export default DashboardTitle;
