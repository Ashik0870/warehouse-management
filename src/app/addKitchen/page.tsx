import AddItems from "@/components/AddItem";
import DashboardTitle from "@/components/DashboardTitle";
import Header from "@/components/Header";
import Section from "@/components/Section";

const data = [
    {
      title: "Kitchen Items",
    },
  ];

export default function () {
  return (
    <>
      <Header />
      <Section active="Kitchen Items">
       <DashboardTitle data={data} />
          <AddItems />
      </Section>
    </>
  );
}
