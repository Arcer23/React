import { motion } from "framer-motion";
import image from "./pranish.jpg"
const Hero = () => {
  const des =
    "Welcome to my portfolio, a curated collection showcasing my journey as a Fronted Developer. Dive into a world where creativity meets functionality, where each project is a testament to my passion for developing websites and web apps. Discover how I bring ideas to life with innovation and precision. Whether you're seeking inspiration, collaboration opportunities, or simply want to learn more about what drives me, I invite you to explore and connect.";
    let pic = "https://images.unsplash.com/photo-1514543250559-83867827ecce?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbiUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
  return (
    <motion.div 
    whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
    className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 
            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-white">
              Pranish kadel
            </h1>
            <span className="text-4xl">Frontend Developer</span>
            <p className="my-4 -tracking-tighter">{des}</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={pic}
            alt="error" className="rounded-3xl"/>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Hero;
