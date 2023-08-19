import React, { useEffect, useState } from "react";
import statusJson from "../filterOptions/statusJson.json";
import genderJson from "../filterOptions/genderJson.json";
import speciesJson from "../filterOptions/speciesJson.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useGetData from "../hooks/useGetData";
import { useSelector } from "react-redux";

import AcordionButton from "./AcordionButton";

const CharactersFilter = () => {
  const { getCharacters } = useGetData();
  const data = useSelector((state) => state.obtainData);
  const [activeOptionStatus, setActiveOptionStatus] = useState(false);
  const [activeOptionGender, setActiveOptionGender] = useState(false);
  const [activeOptionSpecie, setActiveOptionSpecie] = useState(false);
  const [valueInputSearch, setValueInputSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [numberPag, setNumberPag] = useState(1);
  const arrayStatus = statusJson;
  const arrayGender = genderJson;
  const arraySpecies = speciesJson;

  const filterByStatus = (status) => {
    setNumberPag(1);
    setFilterType(status);
    setValueInputSearch("");
    getCharacters(
      `https://rickandmortyapi.com/api/character/?status=${status}`
    );
  };
  const filterByGender = (gender) => {
    setNumberPag(1);
    setFilterType(gender);
    setValueInputSearch("");
    getCharacters(
      `https://rickandmortyapi.com/api/character/?gender=${gender}`
    );
  };
  const filterBySpecie = (specie) => {
    setNumberPag(1);
    setFilterType(specie);
    setValueInputSearch("");
    getCharacters(
      `https://rickandmortyapi.com/api/character/?species=${specie}`
    );
  };
  useEffect(() => {
    if (valueInputSearch !== "") {
      getCharacters(
        `https://rickandmortyapi.com/api/character/?page=${numberPag}&name=${valueInputSearch}`
      );
    } else if (
      !activeOptionGender &&
      !activeOptionStatus &&
      !activeOptionSpecie
    ) {
      getCharacters(
        `https://rickandmortyapi.com/api/character/?page=${numberPag}`
      );
    } else {
      getCharacters(
        `https://rickandmortyapi.com/api/character/?page=${numberPag}&${
          activeOptionGender
            ? "gender="
            : activeOptionSpecie
            ? "species="
            : activeOptionStatus
            ? "status="
            : null
        }${filterType}`
      );
    }
  }, [valueInputSearch, numberPag]);

  function searchByName(e) {
    e.preventDefault();
  }

  return (
    <>
      <section className="m-auto flex  items-center ">
        <span className="w-[5%] custom:w-[20%]  h-[3px] bg-lime-500"></span>
        <form
          className="flex w-[90%] custom:min-w-[350px] custom:w-[60%] m-auto"
          onSubmit={searchByName}
        >
          <input
            type="text"
            value={valueInputSearch}
            onChange={(e) => setValueInputSearch(e.target.value)}
            placeholder="Escriba un nombre"
            className="w-full p-2 text-sm rounded-l-md outline-none text-black ml-[2%] "
          />
          <button className="bg-white text-black text-sm p-2 rounded-r-md mr-[2%]">
            Buscar
          </button>
        </form>
        <span className="w-[5%] custom:w-[20%] h-[3px] bg-lime-500"></span>
      </section>

      <div className="container  m-auto px-1 flex text-xs  my-4   ">
      <button className="p-2 bg-slate-500 rounded-md ">
        filtrar personajes por ... 
      </button>
        <button className="ml-auto  hover:brightness-110 hover:animate-pulse font-semibold  p-2 rounded-md bg-teal-500 shadow-lg shadow-indigo-500/5 text-white">
          borrar filtros
        </button>
      </div>
   
    </>
  );
};

export default CharactersFilter;
