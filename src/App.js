// App Component
import React, { useState } from 'react';
import Form from './Components/Form';
import DataBase from './Components/DataBase';
let tasks=[]


const App = () => {
  const[isEditing,setEditing]=useState('')
const[taskss,setTask]=useState(tasks)
  return (
    <div className='w-screen h-screen px-5' >
      <div className='w-full  h-full flex justify-between' >
        <Form taskss={taskss} setTask={setTask} isEditing={isEditing} setEditing={setEditing} />
        <DataBase taskss={taskss} setTask={setTask} isEditing={isEditing} setEditing={setEditing}/>
      </div>
    </div>
  );
};

export default App;
