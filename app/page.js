import Image from "next/image";
import NavBar from "./components/navbar/NavBar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Goals from "./components/goals/Goals";
import OurProcess from "./components/ourProcess/OurProcess";
import Forms from "./components/forms/Forms";

export default function Home() {
  return (
   <>
   <div>
    <NavBar/>
    <Header/>
    <About/>
    <Goals/>
    <OurProcess/>
    <Forms/>
    Allah 
   </div>
   </>
  );
}
