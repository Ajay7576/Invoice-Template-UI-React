import { useContext } from "react";
import { State } from "../context/statecontext";

const ClientDetails = () => {
  const { clientName, clientAddress } = useContext(State);

  return (
    <>
      <section className="mt-10">
        <p className="font-bold">BILLED TO:</p>
        <h2 className="text-sl uppercase mb-1"> {clientName}</h2>
        <p>{clientAddress}</p>
      </section>
    </>
  );
};

export default ClientDetails; // Default export
