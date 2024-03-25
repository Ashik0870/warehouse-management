import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import DataTable from "../../components/DataTable";
import { dummyData } from "@/util/dummyData";
import Section from "@/components/Section";
import OrderDetails from "@/components/OrderDetails";

const Page = () => {
  return (
    <>
      <Header />
      <Section active="Dashboard">
        <OrderDetails />
        {/* <DataTable data={dummyData} /> */}
      </Section>
    </>
  );
};

export default Page;
