import Header from "../components/Header";
import Dates from "../components/Dates";
import Table from "../components/Table";
import Notes from "../components/Notes";
import Footer from "../components/Footer";
import MainDetails from "../components/MainDetails";
import ClientDetails from "../components/ClientDetails";
const InvoiceDetails = () => {
  return (
    <>
      <div>
        <Header />
        <MainDetails />
        <ClientDetails />
        <Dates />
        <Table />
        <Notes />
        <Footer />
      </div>
    </>
  );
};

export default InvoiceDetails;
