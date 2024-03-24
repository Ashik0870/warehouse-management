"use client";

import { get, ref } from "firebase/database";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import DataTable from "../../components/DataTable";
import Section from "@/components/Section";
import OrderDetails from "@/components/OrderDetails";
import { database } from "../firebaseConfig";
import DashboardTitle from "@/components/DashboardTitle";
import Button from "@/components/Button";
import Link from "next/link";


const data = [
  {
    title: "Beverages",
  },
];

const Page = () => {
  const [foodGrains, setFoodGrains] = useState<any[]>([]);

  useEffect(() => {
    const foodRef = ref(database, "beverage");
    get(foodRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const foodArray = Object.entries(snapshot.val()).map(
            ([id, data]) => ({
              id,
              ...(typeof data === 'object' ? data : {}),
            })
          );
          setFoodGrains(foodArray);
        } else {
          console.log("No data available");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(foodGrains);

  const handleAddClick = () => {
    
  };


  return (
    <>
      <Header />
      <Section active="Beverages">
        <DashboardTitle data={data}>
        <Link href="/addBeverage">
          <Button
            label="Add"
            backgroundColor="var(--sidebarColor)"
            color="var(--primaryColor)"
            height="50px"
            width="110px"
            onClick={handleAddClick}
          /> </Link>
        </DashboardTitle>
        <DataTable data={foodGrains} />
      </Section>
    </>
  );
};

export default Page;
