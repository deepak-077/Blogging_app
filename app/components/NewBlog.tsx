import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor"
export default function NewBlog(){
    return(
        <div className="flex flex-col ">
            <nav className="w-full py-7 px-2 flex justify-around gap-4 border border-y-amber-300">
                <div className="flex gap-4">
                    <h1>LOGO</h1>
                    <h2>Drafts</h2>
                    <h2>Saved</h2>
                </div>

                <div className="flex gap-3">
                    <button className="bg-lime-400 rounded-full p-1">Publish</button>
                <div>
                    <img className="size-7" src="dots.png" alt="" />
                </div>
                <div>
                    <img className="size-7" src="bell.png" alt="" />
                </div>
                <div>
                    <img className="size-7 rounded-full" src="chris.jpg" alt="" />
                </div>
                </div>
            </nav>
            <div>
                <SimpleEditor/>

            </div>
        </div>
    )
}