import React, { useContext } from "react";
import InvoiceDetails from "./InvoiceDetails";
import AddUpdateInvoice from "./AddUpdateInvoice";
import { State } from "../context/statecontext";

const Invoice = () => {
  const { showInvoice, setShowInvoice } = useContext(State);

  return (
    <>
      {showInvoice ? (
        <main
          className="m-5 p-5 xl:max-w-4xl xl:mx-auto 
             bg-white rounded shadow"
        >
          <div>
            <InvoiceDetails />
            <button
              onClick={() => setShowInvoice(false)}
              className="mt-5 bg-blue-500 text-white py-2
               font-bold px-8 rounded shadow border-2
               border-blue-500
               hover:bg-transparent 
               hover:text-blue-500
               transition-all duration-300"
            >
              Edit Information
            </button>
          </div>
        </main>
      ) : (
        <>
          <div className="flex flex-col justify-center">
            <AddUpdateInvoice />
          </div>
        </>
      )}
    </>
  );
};

export default Invoice;
