import React from "react";

const NavBar = () => {
  return (
    <div className="relative">
      <nav className="w-full px-5 py-3 absolute flex items-center justify-between  border-black">
        {/* Left: Burger Menu */}
        <div className="flex items-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-[#fffbeb] transform transition duration-200 ease-out group-hover:scale-110 group-hover:-translate-y-0.5"
          >
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Center: Brand Name with border effect */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
  <div className="relative flex items-center mt-[7vh]">
    {/* Left Line */}
    <div className="h-[2px] bg-[#fffbeb] font-bold lg:w-[47vw] w-[30vw]"></div>

    {/* Text “H” */}
    <p className="mx-2  text-4xl font-['MonsieurLaDoulaise'] font-bold text-[#fffbeb]  px-2">
      H
    </p>

    {/* Right Line */}
    <div className="h-[2px] bg-[#fffbeb] lg:w-[47vw] w-[30vw]"></div>
  </div>
</div>


        {/* Right: Icons */}
        <div className="flex items-center gap-6">
          <lord-icon
            src="https://cdn.lordicon.com/wjyqkiew.json"
            trigger="hover"
            colors="primary:black,secondary:black"
            className="cursor-pointer"
          ></lord-icon>

          <lord-icon
            src="https://cdn.lordicon.com/uisoczqi.json"
            trigger="hover"
            colors="primary:black,secondary:black"
            className="cursor-pointer"
          ></lord-icon>

          <lord-icon
            src="https://cdn.lordicon.com/kdduutaw.json"
            trigger="hover"
            colors="primary:black,secondary:black"
            className="cursor-pointer"
          ></lord-icon>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
