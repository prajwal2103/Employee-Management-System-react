import React from "react";
const DataBase = ({ taskss, setTask,isEditing,setEditing }) => {
  console.log(taskss);
  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-1/2 mx-auto mt-6">
      <table className="min-w-full table-auto border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-6 py-3 text-gray-700 font-semibold text-left">
              Name
            </th>
            <th className="border border-gray-300 px-6 py-3 text-gray-700 font-semibold text-left">
              Company Name
            </th>
            <th className="border border-gray-300 px-6 py-3 text-gray-700 font-semibold text-left">
              Salary
            </th>
            <th className="border border-gray-300 px-6 py-3 text-gray-700 font-semibold text-left">
              Role
            </th>
            <th className="border border-gray-300 px-6 py-3 text-gray-700 font-semibold text-left">
              Option
            </th>
          </tr>
        </thead>
        <tbody>
  {taskss.length > 0 ? (
    taskss.map((item) => (
      <tr key={item.id} className="hover:bg-gray-100 transition-colors">
        <td className="border border-gray-300 px-6 py-2 text-gray-800">
          {item.name}
        </td>
        <td className="border border-gray-300 px-6 py-2 text-gray-800">
          {item.companyName}
        </td>
        <td className="border border-gray-300 px-6 py-2 text-gray-800">
          {item.salary}
        </td>
        <td className="border border-gray-300 px-6 py-2 text-gray-800">
          {item.role}
        </td>
        <td className="border border-gray-300 px-6 py-2 flex">
          <button
            onClick={() => {
              setEditing(item.id);
            }}
            className="flex items-center text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out p-1 rounded-full border border-blue-500 hover:bg-blue-100"
          >
            <i className="material-icons">edit</i>
          </button>
          <button
            onClick={() => {
              let newArr = taskss.filter((item2) => item.id !== item2.id);
              setTask(newArr);
            }}
            className="flex items-center text-red-500 hover:text-red-700 transition duration-300 ease-in-out p-1 rounded-full border border-red-500 hover:bg-red-100 ml-2"
          >
            <i className="material-icons">delete</i>
          </button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td
        colSpan="5"
        className="border border-gray-300 px-6 py-2 text-gray-600 text-center"
      >
        No tasks available.
      </td>
    </tr>
  )}
</tbody>


      </table>
    </div>
  );
};

export default DataBase;
