const blogs=[
    {
        username: "Peter V.",
        title: "How an Ugly Single-Page Website Makes $5,000 a Month with Affiliate Marketing",
        preview: "No need to create a fancy and modern website with hundreds of pages to make money online.- Making money online is the dream for many... ",
        tag: "Side Hustle",
        duration :"3 min read",
        img:"preview.png"

    },
    {
        username:"Payam Saderi",
        title: "To PM2, or Not to PM2: Embracing Docker for Node.js ",
        preview: "WE've got this teeny-tiny service written in Node.js, and like all services in the world its availability is very important to us. we're talking BC-ere code here! Back in those dark ages, Docker didn't exist yeat, We had to...",
        tag: "Docker",
        duration :"4 min read",
        img:"docker.png"
    },
    {
        username:"Ignacio de Gregorio",
        title: "Google has finally Dethroned ChatGPT",
        preview: "They Finally Did It - When you look at what Google has just achieved, it's no wonder OpenAI suddenly released sora a few hours later to ...",
        tag: "Docker",
        duration :"4 min read",
        img:"sora.png"
    }
]

export default function Landing(){
    const date=new Date().toDateString()
    return(
        <>
        {blogs.map((item,index)=>(
        <div key={index} className="flex justify-around items-center p-5 gap-5 hover:bg-gray-200">
            {/* left component */}
            
                <div className="flex flex-col gap-2 w-2/3">
                <div className="flex gap-2 items-center font-semibold">
                    <img className="rounded-full size-9" src="chris.jpg" alt="" />
                    <p >{item.username}</p>
                    <p>{date}</p>
                </div>
                <div className="flex flex-col">
                    <h2 className="font-bold text-2xl"> {item.title}</h2>
                    <p className="text-lg"> {item.preview}</p>
                </div>

                <div className="flex justify-between ">
                    <div className=" flex items-center gap-3">
                        <button className="bg-amber-200 p-1 px-2 rounded-full  hover:bg-gray-300">{item.tag}</button>
                        <p>{item.duration}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <img className="size-6 hover:bg-gray-300 rounded-xl" src="bookmark.png" alt="" />
                        <img className="size-6 hover:bg-gray-300 rounded-xl" src="fire.png" alt="" />
                        <img className="size-6 hover:bg-gray-300 rounded-xl" src="dots.png" alt="" />
                    </div>

                </div>
            </div>

            {/* right component - preview */}
            <div className="mt-5">
                <img className="size-50 rounded-xl"  src={item.img} alt="" />
            </div>

        </div>
        ))}
        </>
    )

}