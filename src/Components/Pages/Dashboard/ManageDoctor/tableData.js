import React from "react";

const TableData = ({ doctor, index, refetch }) => {
  const { name, email, img, specialist } = doctor || {};
  console.log(doctor);
  return (
    <tr>
      <th>{index}</th>
      <td>
        <div className="avatar">
          <div className="w-14 rounded">
            <img src={img} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </td>

      <td>{name}</td>
      <td>{email}</td>
      <td>{specialist}</td>

      <td>
        <button className="btn btn-circle bg-red-600 text-white hover:text-red-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default TableData;
