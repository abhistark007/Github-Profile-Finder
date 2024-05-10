
import { useEffect, useState } from 'react'
import './App.css'
import User from './components/User';

function App() {

  const [userName,setUserName]=useState("abhistark007");
  const [loading,setLoading]=useState(false);
  const [userData,setUserData]=useState(null);

  async function getUserData(){
    try{
      setLoading(true);
      const res=await fetch(`https://api.github.com/users/${userName}`);
      const data=await res.json();
      console.log(data);
      setUserData(data);
      setLoading(false);
    }catch(e){
      console.log("error Occured oops!");
      console.log(e.message);
      setLoading(false);
    }
  }

  useEffect(()=>{
    getUserData();
  },[])


  function handleSubmit(){
    getUserData();
  }
  
  

  return (
   <div className='flex flex-col w-full min-h-screen bg-green-400'>
      <div className='w-[80%] mx-auto  flex flex-col'>
          {/* Text Field div */}
          <div className='flex w-[90%] mx-auto p-10 max-[600px]:w-[100%] max-[600px]:p-2'>
            <input type="text" 
            placeholder='Search User..'
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            className='  p-2 rounded-l-lg text-purple-600 outline-purple-600 border-collapse w-full'/>
            <div onClick={handleSubmit} className='bg-purple-600 text-white p-2 h-full rounded-r-lg cursor-pointer duration-200 hover:scale-105'>Search</div>
          </div>

          {/* User Data Displayed */}
          { 
            (userData===null || loading===true)?<div>Loading ...</div>:
            <User userData={userData}/>
          }

      </div>
   </div>
  )
}

export default App
