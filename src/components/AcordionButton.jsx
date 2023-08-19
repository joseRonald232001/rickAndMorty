import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const AcordionButton = (
    {
    icon,  
    array,
    name,
    setActiveOption,
    activeOption,
    filterBy,
    type
    }) => {
    const typeStatus = type;
  return (
    <>
      <div >

        <button
          className="text-left w-full py-1 px-2 rounded-md text-sm font-semibold items-center"
          onClick={() => setActiveOption(!activeOption)} 
        >
          <div className="flex gap-2 items-center ">
            {icon}  {name}    <span className="ml-auto"> <FontAwesomeIcon  icon={faAngleRight} style={{color: "#97A8B2",}} />  </span> 
          </div>
        </button>
        <div className="text-xs   mb-4 bg-zinc-700 w-full  "
        >
          {activeOption &&
            array.map((option) => (
              <button
                className=" flex flex-col px-1 tracking-normal leading-normal font-semibold text-gray-500 "
                key={option.id}
                onClick={() => filterBy(option[typeStatus])}
              >
                {option[typeStatus]}
              </button>
            ))}
        </div>
      </div>
    </>
  );
};

export default AcordionButton;
