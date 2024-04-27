import React from 'react'

export default function BarsButton() {
    
  return (
    <>
    <div className="shadow-md lg:px-24 flex flex-wrap items-center justify-between h-auto">
      <div>
        <h2>My Logo</h2>
      </div>
      <div className="flex lg:hidden">
        <button onClick={handleMenuToggle}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>
      <div className={ lg:flex ${menuOpen ? "block" : "hidden"}}>
        <ul className="flex flex-wrap items-center gap-8">
          <li>
            <Link href={"#"}>
              <NavDropdown title="What we do" firstChild="Strategy Consulting" />
            </Link>
          </li>
          <li>
            <Link href={"#"}>
              <NavDropdown title="Technologies" firstChild="Solutions Engineering" />
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
          <li>
            <NavButton />
          </li>
        </ul>
      </div>
    </>
  )
}
