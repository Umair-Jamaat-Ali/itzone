// 'use client'
// import React, { useState } from 'react';
// import NavDropdown from '../navdropDown/NavDropDown';
// import Link from 'next/link';
// import NavButton from '../navButton/NavButton';
// import { useMediaQuery } from 'react-responsive';



// export default function NavBar() {

//     const isLg = useMediaQuery({ minWidth: 1024 });
//     // const [isMenuOpen, setIsMenuOpen] = useState(false)


//     return (
//         <>
//             <div className='header bg-white sm:h-[72px] sm:bg-white md:h-[80px] md:bg-white lg:h-[88px] lg:bg-white shadow-md'>
//                 <div className='container mx-4 px-3 flex justify-center items-center '>
//                     <div className='ml-2 text-sm font-semibold  lg:mr-20 lg:text-lg lg:font-bold'>
//                         <h2>
//                             IT zone.uk
//                         </h2>
//                     </div>
//                     <div className='flex '>
//                         {!isLg ? <NavDropdown /> :
//                      ( <div className="flex ">
//                         <ul className="flex flex-wrap items-center gap-8">
//                             <li>
//                                 <Link href={"#"}>
//                                     <NavDropdown title="What we do" firstChild="Strategy Consulting" />
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href={"#"}>
//                                     <NavDropdown title="Technologies" firstChild="Solutions Engineering" />
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href={"#"}>
//                                     <NavDropdown title="How we engage" firstChild=" " />
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href={"#"}>
//                                     <NavDropdown title="How we are" />
//                                 </Link>
//                             </li>
//                             <li>
//                                 <NavButton />
//                             </li>
//                         </ul>
//                     </div>)}
//                     </div>
//                 </div>
//             </div>

//         </>
//     );
// }



"use client";
// import Link from "next/link";
// import React from "react";
// import NavButton from "../navbutton/NavButton";
// import NavDropdown from "../navDropdown/NavDropdown";

// export default function Navbar() {
//   return (
//     <div className="shadow-md lg:px-24 flex flex-wrap items-center justify-between h-auto">
//       <div>
//         <h2>My Logo</h2>
//       </div>
//       <div className="flex">
//         <ul className="flex flex-wrap items-center gap-8">
//           <li>
//             <Link href={"#"}>
//               <NavDropdown title="What we do" firstChild="Strategy Consulting" />
//             </Link>
//           </li>
//           <li>
//             <Link href={"#"}>
//               <NavDropdown title="Technologies" firstChild="Solutions Engineering" />
//             </Link>
//           </li>
//           <li>
//             <Link href={"#"}>
//               <NavDropdown title="How we engage" firstChild=" " />
//             </Link>
//           </li>
//           <li>
//             <Link href={"#"}>
//               <NavDropdown title="How we are" />
//             </Link>
//           </li>
//           <li>
//             <NavButton />
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

import Link from "next/link";
import React, { useState } from "react";
import NavButton from "../navButton/NavButton";
import NavDropdown from "../navdropDown/NavDropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='header bg-white sm:h-[72px] sm:bg-white md:h-[80px] md:bg-white lg:h-[88px] lg:bg-white shadow-md'>
    <div className=" lg:flex lg:justify-between lg:items-center lg:px-7 ">
      <div className="flex justify-between p-3">
        <h2>IT zone.uk</h2>

        <div className="flex lg:hidden">
          <button onClick={handleMenuToggle}>
            {menuOpen ? (
              <FontAwesomeIcon icon={faCircleXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
      </div>
      <div className={`lg:flex ${menuOpen ? "block" : "hidden"}`}>
        <ul className="px-3 lg:flex lg:gap-7 lg:items-center">
          <li>
            <Link href={"#"}>
              <NavDropdown
                title="What we do"
                firstChild="Strategy Consulting"
              />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <NavDropdown
                title="Technologies"
                firstChild="Solutions Engineering"
              />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <NavDropdown title="How we engage" firstChild=" " />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <NavDropdown title="How we are" />
            </Link>
          </li>
          <li className="px-2">
            <NavButton />
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
}