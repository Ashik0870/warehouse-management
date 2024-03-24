import cancelIcon from "../images/Dashboard/canceled.svg";
import deliverIcon from "../images/Dashboard/delivered.svg";
import downArrowIcon from "../images/Dashboard/downArrow.svg";
import orderIcon from "../images/Dashboard/orders.svg";
import revenueIcon from "../images/Dashboard/revenue.svg";
import upArrowIcon from "../images/Dashboard/upArrow.svg";

export const orderDetails = [
  {
    id: 1,
    title: "Total Orders",
    number: 7500,
    mainIcon: orderIcon,
    subIcon: upArrowIcon,
    description: "4% (30 days)",
  },
  {
    id: 2,
    title: "Total Delivered",
    number: 375,
    mainIcon: deliverIcon,
    subIcon: upArrowIcon,
    description: "4% (30 days)",
  },
  {
    id: 3,
    title: "Total Cancelled",
    number: 65,
    mainIcon: cancelIcon,
    subIcon: downArrowIcon,
    description: "25% (30 days)",
  },
];
