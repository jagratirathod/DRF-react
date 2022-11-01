import './App.css';
import {useState,useEffect} from "react";
import axios from "axios";

function App() {
  const[student,setstudent] = useState([0])

  useEffect(() =>  {
    async function  getAllStudent(){
      try{
        const students = await axios.get("http://127.0.0.1:8000/api/")
        console.log(students.data)
        setstudent(students.data) 

      }catch(error){

      } 
    }
    getAllStudent()
},[])

  return (
    <div className="App">
     <h1>Hii, India</h1>
     {
       student.map((student,i)=>{
         return (
           <h2 key={i}>name = {student.name}, email = {student.email}</h2>
         )
       })
     }
    </div>
  );
}

export default App; 
