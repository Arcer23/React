import {motion} from "framer-motion"
export default function Contact(){
    return(
        <>
        <div className="border-b border-neutral-900 pb-20">
            <motion.h1 
             whileInView={{opacity:1,x:0}}
             initial={{opacity:0,x:-100}}
             transition={{duration:.5}}
            className="my-10 text-4xl text-center"> Get in Touch </motion.h1>
            <div className="text-center tracking-tighter">
                
                <motion.p 
                 whileInView={{opacity:1,y:0}}
                 initial={{opacity:0,y:-100}}
                 transition={{duration:.5}}
                className="my-4">pranishkadel1@gmail.com</motion.p>
            </div>
        </div>
        </>
    )
}