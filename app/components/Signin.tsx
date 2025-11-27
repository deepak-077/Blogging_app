export default function Signin(){
    return(
        <div className="flex justify-center items-center h-screen gap-2.5 ">
            {/* left component */}
            <div  className="flex justify-center w-1/2 p-20 ">

            <div className="flex flex-col gap-2 w-1/2 ">
                <h1 className="text-5xl font-bold">Sign in</h1>
                <h2 className=" ">Don't have an account? <span className="underline">Sign up</span></h2>
                <div className="flex flex-col gap-2">
                    <div>
                        <h1 className="font-bold">Username</h1>
                        <input className="border p-1.5 rounded-lg w-full" type="text" placeholder="Enter Your Username"/>
                    </div>
                    <div>
                        <h1 className="font-bold">Password</h1>
                        <input className="border p-1.5 rounded-lg w-full" type="text" placeholder="Enter Your Password"/>
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
