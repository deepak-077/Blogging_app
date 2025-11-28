export default function Blog(){
    const date=new Date().toDateString();
    console.log(date);
    return (
        <div className="flex w-full p-10">


            {/* left component - blog */}
            <div className="flex flex-col gap-4 w-3/4">
                <h1 className="text-5xl font-extrabold">Taxing Laughter: The Joke Tax Chronicles</h1>
                <h3>Posted On {date}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo mollitia harum eligendi molestias, doloremque alias quos beatae nulla officia assumenda iure iusto optio? Officia optio expedita possimus, sunt ea repellat perspiciatis quis, ad cum tempore, rem provident accusantium aperiam reprehenderit voluptate. 
                    Fuga, incidunt optio! Facere magnam eveniet impedit autem sequi corrupti minima exercitationem debitis quas nam? Minus saepe amet nobis ducimus sint a, molestiae error facere beatae at alias nam officia ratione magnam nulla laboriosam eligendi aliquam cumque quis dolorem dicta reprehenderit fugiat labore! Fuga dolor fugit possimus dolorum deleniti eius ad debitis. 
                    In dolores suscipit reprehenderit odit debitis molestias similique, placeat hic. Asperiores nesciunt corrupti incidunt! Corrupti maiores doloribus qui cumque facilis hic, natus quaerat odio at nulla ipsum? Praesentium illum minima ratione. Saepe ipsa labore molestias expedita commodi exercitationem perspiciatis omnis architecto incidunt. Nobis corrupti eaque nemo quaerat suscipit id placeat aspernatur, mollitia repellat ea expedita, unde velit dolore? 
                    Enim iusto hic soluta a? Ducimus hic eos maiores minima dolorum nisi magni ad, itaque debitis perferendis eaque ipsa quas veritatis eum corporis fugit. Alias nostrum laudantium corrupti labore corporis deserunt cumque consequuntur perferendis veniam mollitia sapiente tempore, illum suscipit autem! Aut, necessitatibus minima facere sapiente vitae amet! Totam modi numquam fuga voluptas facilis incidunt nobis. 
                    A porro, nobis laudantium ex tenetur tempore expedita dicta reiciendis et nemo quam repudiandae aspernatur, voluptatem at odit facere explicabo veritatis quod odio totam! Veniam harum, natus ut et rerum odit eaque ad saepe sapiente minima soluta illum suscipit eum necessitatibus 
                    
                    <br/>
                    cumque velit? Ratione rem, quos in error distinctio ullam cumque nisi consectetur! Ipsam, quos? Provident molestiae earum excepturi blanditiis eum obcaecati ea quod sint odit? Omnis facilis modi doloremque reiciendis maiores, numquam aspernatur? Harum, explicabo voluptates. At, cumque eaque provident vel dolorem porro perspiciatis quis maiores molestiae aut, voluptatem, dolor eligendi deleniti. 
                    Adipisci consequuntur quis cumque nihil ipsum excepturi tempora dolore laudantium quaerat culpa sed nesciunt sunt nemo, odit minus hic. Cumque, sint debitis vitae officia dignissimos, voluptatem quam, perspiciatis magni blanditiis fugiat repellat? Molestias corrupti obcaecati hic, fugiat voluptatum, tempora modi reiciendis officia at facere esse itaque eos culpa atque quasi quo illum impedit numquam excepturi. Sit, iste eveniet ipsam enim fugiat officiis fuga cum facere, harum nam asperiores impedit explicabo debitis aliquam itaque distinctio ducimus, hic repellendus minima error ipsum quis illo dolorum? Reiciendis ex asperiores exercitationem ducimus, architecto laudantium aperiam numquam quasi quaerat eius facilis alias distinctio facere voluptatem quos quod nemo.
                    Praesentium consectetur doloremque ratione, veniam natus esse voluptatum qui, cupiditate nostrum, necessitatibus iste. Architecto dicta harum, impedit quisquam necessitatibus atque nisi magnam blanditiis deleniti dolore similique aut itaque voluptate delectus, ipsa dignissimos laudantium perferendis totam deserunt commodi molestiae provident! Facilis nesciunt consequuntur placeat odio eligendi magni necessitatibus, excepturi, distinctio sunt, accusamus sed non? Odit sequi rerum voluptatum quae? Molestiae numquam eius voluptate, libero unde nesciunt commodi molestias maiores nobis earum autem eos dolorum harum provident illo aliquam eaque quos. 
                    Vel deleniti odio quam nostrum ab iure, eum at voluptates blanditiis porro officia placeat doloremque, fugiat nihil saepe!</p>

            </div>

            {/* right component - username and about */}
            <div className="flex flex-col gap-4 w-1/4">
            <h3 className="font-bold text-3xl">Author</h3>
            <div className="flex gap-3 items-center">
                <img className="size-10 rounded-full" src="chris.jpg" alt="" />
                <h1 className="font-bold text-4xl">Jokester</h1>
            </div>
            <p>Master of mirth, purveyor of puns and the funniest person in the kingdom</p>

            </div>

        </div>
    )
}