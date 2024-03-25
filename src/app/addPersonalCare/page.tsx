import AddItems from "@/components/AddItem";
import AddPersonal from "@/components/AddPersonalCare";
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
          <AddPersonal />
      </Section>
    </>
  );
}
