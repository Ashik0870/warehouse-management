import AddItems from "@/components/AddItem";
import DashboardTitle from "@/components/DashboardTitle";
import Header from "@/components/Header";
import Section from "@/components/Section";

const data = [
    {
      title: "Food grains and Oil",
    },
  ];

export default function () {
  return (
    <>
      <Header />
      <Section active="Food Grains and oil">
       <DashboardTitle data={data} />
          <AddItems />
      </Section>
    </>
  );
}
