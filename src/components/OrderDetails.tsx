import Image from "next/image";
import classes from "./OrderDetails.module.css";
import { orderDetails } from "@/util/OrderDetailsData";
import CardLayout from "./CardLayout";



const OrderDetails= () => {
  const color = "var(--orderDetailsClr)";

  return (
    <div className={classes.container}>
      {orderDetails.map((order: any) => (
        <CardLayout
          backgroundColor={color}
          height="110px"
          width="220px"
          marginTop="25px"
          borderRadius="14px"
          boxShadow="1px 1px 1px 1px var(--orderDetailsBoxShadow)"
          key={order.id}
        >
          <div key={order.id} className={classes.orderItem}>
            <Image
              src={order.mainIcon}
              className={classes.mainIcon}
              alt={order.title}
            />
            <div className={classes.orderContent}>
              <p className={classes.number}>{order.number}</p>
              <p className={classes.title}>{order.title}</p>
              <div className={classes.orderPercent}>
                <Image
                  src={order.subIcon}
                  className={classes.subIcon}
                  alt="Arrow Icon"
                />
                <p className={classes.description}>{order.description}</p>
              </div>
            </div>
          </div>
        </CardLayout>
      ))}
    </div>
  );
};

export default OrderDetails;
