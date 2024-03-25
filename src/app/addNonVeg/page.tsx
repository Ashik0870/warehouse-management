import AddItems from "@/components/AddItem";
import AddNonVeg from "@/components/AddNonVeg";
import DashboardTitle from "@/components/DashboardTitle";
import Header from "@/components/Header";
import Section from "@/components/Section";

const data = [
    {
      title: "Egg,Meet and Fish",
    },
  ];

export default function () {
  return (
    <>
      <Header />
      <Section active="Egg,Meet and Fish">
       <DashboardTitle data={data} />
          <AddNonVeg />
      </Section>
    </>
  );
}
