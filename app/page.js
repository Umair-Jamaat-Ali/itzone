import Image from "next/image";
import NavBar from "./components/navbar/NavBar";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Goals from "./components/goals/Goals";
import OurProcess from "./components/ourProcess/OurProcess";
import DiscussAboutProject from "./components/discussAboutProject/DiscussAboutProject";
import LeaderShip from "./components/leaderShip/LeaderShip";
import ServiceCard from "./components/serviceCard/ServiceCard";
import Services_Header from "./components/Services_Header";


export default function Home() {
  return (
   <>
   <div>
    <NavBar/>
    <Header/>
    <About/>
    <Goals/>
    <OurProcess/>
    <DiscussAboutProject/>
    <LeaderShip/>
    <ServiceCard/>
    <Services_Header/>
    Allah 
   </div>
   </>
  );
}
