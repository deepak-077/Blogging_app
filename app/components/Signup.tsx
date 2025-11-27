"use client"

import { useState } from "react"

export default function Signup(){

    const [data,setData]=useState({
        username:"",
        email:"",
        password:"",
    })

    function handleChange(e){
        setData((prev)=>({...prev,[e.target.name]:e.target.value}))
    }

    return(
        <div className="flex justify-center items-center h-screen gap-2.5 ">
            {/* left component */}
            <div  className="flex justify-center w-1/2 p-20 ">

            <div className="flex flex-col gap-2 ">

                <div className="flex flex-col items-center">
                    <h1 className="text-5xl font-bold">Create an account</h1>
                    <h2 className=" ">Already have an account? <span className="underline">Login</span></h2>
                </div>
                
                <div className="flex flex-col gap-2">
                    <div className="w-full">
                        <h1 className="font-bold">Username</h1>
                        <input className="border p-1.5 rounded-lg w-full" type="text" placeholder="Enter Your Username" name="username" onChange={handleChange}/>
                    </div>
                    <div>
                        <h1 className="font-bold">Email</h1>
                        <input className="border p-1.5 rounded-lg w-full" type="text" placeholder="name@example.com" name="email" onChange={handleChange}/>
                    </div>
                    <div>
                        <h1 className="font-bold">Password</h1>
                        <input className="border p-1.5 rounded-lg w-full" type="text" placeholder="Enter Your Password" name="password" onChange={handleChange}/>
                    </div>
                    <button className="bg-black text-white w-full p-2 rounded-lg">Signin</button>
                    
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
