import axios from "axios";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import ShowModal from "../ShowModal/ShowModal";
import Info from "./Info";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState();
  useEffect(() => {
    const loadData = async () => {
      const { data } = await axios("services.json");
      setServices(data);
    };
    loadData();
  }, []);
  return (
    <div className="my-10">
      <h3 className="text-center text-lg text-secondary font-semibold my-10">
        Available Appointments on {format(date, "PP")}.
      </h3>
      <div className="grid md:grid-cols-3 gap-5 justify-center items-center max-w-[1280px] mx-auto">
        {services?.map((service) => (
          <Info
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Info>
        ))}
      </div>
      {treatment && <ShowModal treatment={treatment}></ShowModal>}
    </div>
  );
};

export default AvailableAppointment;
