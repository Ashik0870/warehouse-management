import AddItems from "@/components/AddItem";
import DashboardTitle from "@/components/DashboardTitle";
import Header from "@/components/Header";
import Section from "@/components/Section";

const data = [
    {
      title: "Personal Care",
    },
  ];

export default function () {
  return (
    <>
      <Header />
      <Section active="Personal Care">
       <DashboardTitle data={data} />
          <AddItems />
      </Section>
    </>
  );
}
