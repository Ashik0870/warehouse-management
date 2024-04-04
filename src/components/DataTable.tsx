import React from "react";
import Table from "./Table";
import classes from "./DataTable.module.css";
import { calculateAvailabilityPercentage } from "@/util/percentage";

interface Product {
  id: number;
  productName: string;
  quantity: number;
  available: number;
}

interface Props {
  data: Product[];
}

const DataTable: React.FC<Props> = ({ data }) => {
  const sortedData = data.slice().sort((a, b) => {
    return calculateAvailabilityPercentage(a.quantity, a.available) - calculateAvailabilityPercentage(b.quantity, b.available);
  });

  const sendEmailNotification = (productName: string) => {
    fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: "ashik72020@gmail.com",
        subject: "Low Availability Notification",
        text: `Dear User,\n\nThe availability of ${productName} is less than 25%. Please take action accordingly.\n\nRegards,\nYour Application`,
      }),
    })
    .then((response) => {
      if (response.ok) {
        console.log("Email sent successfully");
      } else {
        console.error("Failed to send email:", response.statusText);
      }
    })
    .catch((error) => {
      console.error("Error sending email:", error);
    });
  };

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
          {sortedData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${classes.tableRow} ${
                calculateAvailabilityPercentage(row.quantity, row.available) < 25
                  ? classes.redColor
                  : calculateAvailabilityPercentage(row.quantity, row.available) > 25 &&
                    calculateAvailabilityPercentage(row.quantity, row.available) < 75
                  ? classes.yellowColor
                  : classes.remainingColor
              }`}
            >
              <td className={classes.tableTdContainer}>{row.id}</td>
              <td className={classes.tableTdContainer}>{row.productName}</td>
              <td className={classes.tableTdContainer}>{row.quantity}</td>
              <td className={classes.tableTdContainer}>{row.available}</td>
              <td className={classes.tableTdContainer}>
                {calculateAvailabilityPercentage(row.quantity, row.available)}%
                {calculateAvailabilityPercentage(row.quantity, row.available) < 25 &&
                  sendEmailNotification(row.productName)}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DataTable;
