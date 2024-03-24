
import React, { ReactNode } from 'react';
import classes from "./Table.module.css"

interface tableProp {
    children: ReactNode;
}

const Table: React.FC<tableProp> = ({ children }) => {
  return (
    <table className={classes.table}>
      {children}
    </table>
  );
};

export default Table;

