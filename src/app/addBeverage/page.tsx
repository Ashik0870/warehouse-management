import AddBeverage from "@/components/AddBeverage";
import AddItems from "@/components/AddItem";
import DashboardTitle from "@/components/DashboardTitle";
import Header from "@/components/Header";
import Section from "@/components/Section";

const data = [
    {
      title: "Beverages",
    },
  ];

export default function page() {
  return (
    <>
      <Header />
      <Section active="Beverages">
       <DashboardTitle data={data} />
          <AddBeverage />
      </Section>
    </>
  );
}
