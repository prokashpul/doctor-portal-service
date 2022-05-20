import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Spinner from "../../../Sheared/Spinner/Spinner";
import ShowModal from "../ShowModal/ShowModal";
import Info from "./Info";

const AvailableAppointment = ({ date }) => {
  // const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState();
  const formateDate = format(date, "PP");

  const {
    isLoading,
    error,
    refetch,
    data: services,
  } = useQuery(["available", formateDate], () =>
    fetch(`http://localhost:5000/available?date=${formateDate}`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Spinner></Spinner>;
  }
  if (error) {
    toast.warning("something wrang");
  }
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
      {treatment && (
        <ShowModal
          treatment={treatment}
          date={formateDate}
          setTreatment={setTreatment}
          refetch={refetch}
        ></ShowModal>
      )}
    </div>
  );
};

export default AvailableAppointment;
