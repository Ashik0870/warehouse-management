import AddItems from "@/components/AddItem";
import AddNonVeg from "@/components/AddNonVeg";
import DashboardTitle from "@/components/DashboardTitle";
import Header from "@/components/Header";
import Section from "@/components/Section";

const data = [
    {
      title: "Eggs, Meat and Fish",
    },
  ];

export default function () {
  return (
    <>
      <Header />
      <Section active="Eggs, Meat and Fish">
       <DashboardTitle data={data} />
          <AddNonVeg />
      </Section>
    </>
  );
}
