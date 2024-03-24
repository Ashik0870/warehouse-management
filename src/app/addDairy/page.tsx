
import AddDairy from "@/components/AddDairy";
import DashboardTitle from "@/components/DashboardTitle";
import Header from "@/components/Header";
import Section from "@/components/Section";

const data = [
    {
      title: "Dairy Products",
    },
  ];

export default function page() {
  return (
    <>
      <Header />
      <Section active="Dairy Products">
       <DashboardTitle data={data} />
          <AddDairy />
      </Section>
    </>
  );
}
