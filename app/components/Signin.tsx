"use client"
import { useState } from "react"

export default function Signin(){

    const [data,setData]=useState({
            username:"",
            password:"",
        })
    
        function handleChange(e){
            setData((prev)=>({...prev,[e.target.name]:e.target.value}))
        }

        function handleSubmit(){
            console.log(data.username);
            console.log(data.password);
        }

    return(
        <div className="flex justify-center items-center h-screen gap-2.5 ">
            {/* left component */}
            <div  className="flex justify-center w-1/2 p-20 ">

            <div className="flex flex-col gap-2">

                <div className="flex flex-col items-center">
                    <h1 className="text-5xl font-bold">Sign in </h1>
                    <h2 className=" ">Don't have an account? <span className="underline">Signup</span></h2>
                </div>
                
                <div className="flex flex-col gap-2">
                    <div>
                        <h1 className="font-bold">Username</h1>
                        <input className="border p-1.5 rounded-lg w-full" type="text" placeholder="Enter Your Username" name="username" onChange={handleChange}/>
                    </div>
                    <div>
                        <h1 className="font-bold">Password</h1>
                        <input className="border p-1.5 rounded-lg w-full" type="password" placeholder="Enter Your Password" name="password" onChange={handleChange}/>
                    </div>
                    <button className="bg-black text-white w-full p-2 rounded-lg" onClick={handleSubmit}>Signin</button>
                    
                </div>

            </div>
                
            </div>

            {/* right component */}
            <div className="flex justify-center items-center w-1/2 bg-slate-300 h-screen p-20">
            <div className="flex flex-col gap-1.5 font-bold text-3xl">
                <h1>"The customer service I received was exceptional. The support team went above and beyond to address my concerns."</h1>

                <div>
                    <h3 className="text-xl">Julles Winfield</h3>
                    <h4 className="text-lg font-normal">CEO, Acme Inc</h4>

                </div>
                
            

            </div>
                
            </div>


        </div>
    )
    

}
