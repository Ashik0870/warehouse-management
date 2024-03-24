import React from "react";
import Table from "./Table";
import classes from "./DataTable.module.css";
import Image from "next/image";
import Link from "next/link";

const DataTable = ({
  data,
  navigateKey1 = "trg",
  navigateKey2 = "uyh",
  tableHeader = "uth",
  children = <p></p>,
}) => {
  

  return (
    <div className={classes.tableContainer}>
      <Table>
    <thead className={classes.tableHeading}>
      <tr>
        <th className={classes.tableTh}>Id</th>
        <th className={classes.tableTh}>Product Name</th>
        <th className={classes.tableTh}>Quantity</th>
        <th className={classes.tableTh}>Available</th>
        <th className={classes.tableTh}>Availability (%)</th>
      </tr>
    </thead>
    <tbody className={classes.tableBody}>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex} className={classes.tableRow}>
          <td className={classes.tableTdContainer}>{row.id}</td>
          <td className={classes.tableTdContainer}>{row.productName}</td>
          <td className={classes.tableTdContainer}>{row.quantity}</td>
          <td className={classes.tableTdContainer}>{row.available}</td>
          <td className={classes.tableTdContainer}>{row.availability}</td>
        </tr>
      ))}
    </tbody>
  </Table>
      {tableHeader ? (
        children
      ) : (
        <div className={classes.tableFooter}>
          <span className={classes.tableHeader}>Items per page:</span>
          <select className={classes.dropDown}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default DataTable;
