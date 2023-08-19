import React from "react";

const AcordionButton = (
    {
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
      <div>
        <button
          className=" bg-lime-500 py-1 px-2 rounded-md my-3 text-xs font-semibold    "
          onClick={() => setActiveOption(!activeOption)}
        >
          {name}
        </button>
        <div
          style={{ background: "#ABC38B" }}
          className="text-xs rounded-md  mb-4   "
        >
          {activeOption &&
            array.map((option) => (
              <button
                className="text-left flex flex-col px-1 tracking-normal leading-normal font-semibold text-gray-500 "
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
