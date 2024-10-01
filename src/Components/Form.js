import React, { useState,useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
const Form = ({taskss,setTask,isEditing,setEditing}) => {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState('');
  useEffect(() => {
    const toFind=taskss.find((task)=>{
      return task.id===isEditing;
    })
    if(isEditing){
      setName(toFind.name)
      setCompanyName(toFind.companyName)
      setSalary(toFind.salary)
      setRole(toFind.role)
    }
   else{
    setName('')
    setCompanyName('');
    setSalary('');
    setRole('');
   }
  }, [taskss,isEditing]);
  return (
    <div className="flex justify-center bg-green-400 items-center w-[45%]">
      <div className="w-[100%] flex flex-col items-center ">
        <h2 class="text-2xl font-semibold text-gray-800 mb-4">Employee Form</h2>

        <div className="w-[60%] border p-4 shadow-lg rounded flex flex-col ">
          <div className="flex flex-col gap-1 w-[100%]">
            <label htmlFor="companyName" className="text-center font-bold">
              Employee Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
              className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e)=>{
                setName(e.target.value)
              }}
            />
          </div>

          <div className="flex flex-col gap-1 w-[100%]">
            <label htmlFor="companyName" className="text-center font-bold">
              Company Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
              className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={companyName}
              onChange={(e)=>{
                setCompanyName(e.target.value)
              }}
            />
          </div>

          <div className="flex flex-col gap-1 w-[100%] mb-2">
            <label htmlFor="salary" className="text-center font-bold">
              Salary
            </label>
            <input
              type="number"
              id="name"
              placeholder="Enter your name"
              required
              className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={salary}
              onChange={(e)=>{
                const num=parseInt(e.target.value);
                setSalary(num)
              }}
            />
          </div>

          <div className="flex gap-1 flex-col w-[100%] mb-2">
            <label htmlFor="role" className="text-center font-bold">
              Role
            </label>
            <select id="role" name="role" className="p-2 rounded" onChange={(e)=>{
                   setRole(e.target.value)
            }}>
              <option value="QA">QA</option>
              <option value="Product Manager">Product Manager</option>
              <option value="Web Developer">Web Developer</option>
            </select>
          </div>

          <button onClick={()=>{
            let newobj={
              id:isEditing?isEditing:uuidv4(),
              name:name,
              companyName:companyName,
              salary:salary,
              role:role
            }
            if(isEditing){
              setTask(taskss.map(task => task.id === isEditing ? newobj : task));
            }
            else{
              setTask([...taskss,newobj]);
            }
            setEditing('');
           
          }}className="focus:outline-none bg-blue-600 text-center text-white font-semibold py-2 px-8 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition duration-300">
             {isEditing?'Update':'Submit'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
