import { motion } from "framer-motion";
const About = () =>{
    return(
        <>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}} 
        className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-4xl text-center">About Me</h1>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items center justify-between">
                        <img src="https://w0.peakpx.com/wallpaper/143/62/HD-wallpaper-person-using-laptop-computer.jpg" className="rounded-2xl"></img>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                        <div className="flex justify-center lg:justify-start">
                            <p className="my-2 maxw-xl py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nobis aut placeat asperiores, sunt eius adipisci deleniti non culpa, voluptas veniam est iusto. Saepe repudiandae aliquid neque voluptatum, ullam adipisci beatae quod, impedit quidem error veniam accusantium quos illum porro et vitae dolor. Reprehenderit, sed.</p>
                        </div>
                    </div>
            </div>
        </motion.div>
        </>
    )
}

export default About;