import React, { useEffect, useState } from "react";
import statusJson from "../filterOptions/statusJson.json";
import genderJson from "../filterOptions/genderJson.json";
import speciesJson from "../filterOptions/speciesJson.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  useSelector } from "react-redux";
import useGetData from "../hooks/useGetData";
import AcordionButton from "./AcordionButton";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faSkullCrossbones,
  faUsers,
  faVenusMars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";



const CharactersFilter = () => {
  const { getCharacters } = useGetData();
  const data = useSelector((state) => state.obtainData);
  const [activeOptionStatus, setActiveOptionStatus] = useState(false);
  const [activeOptionGender, setActiveOptionGender] = useState(false);
  const [activeOptionSpecie, setActiveOptionSpecie] = useState(false);
  const [valueInputSearch, setValueInputSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [numberPag, setNumberPag] = useState(0);
  const [filterOpen, setFilterOpen] = useState(false);
  const arrayStatus = statusJson;
  const arrayGender = genderJson;
  const arraySpecies = speciesJson;
  AOS.init();
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
  
 const handlePageClick =(data)=>{
  const pageSelected=data.selected+1
  setNumberPag(pageSelected)
 }

 const cleanFilters=()=>{
  setActiveOptionGender(false)
  setActiveOptionSpecie(false)
  setActiveOptionStatus(false)
  setValueInputSearch("")
  setFilterOpen(false)
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

      <section className="container  m-auto px-1 flex text-xs  my-4   ">
        <button
          onClick={() => setFilterOpen(!filterOpen)}
          className="p-2 bg-slate-500 rounded-md text-sm font-medium   "
        >
          Filtrar personajes por ...
        </button>

        <button 
        onClick={cleanFilters}
        className="ml-auto  hover:brightness-110 hover:animate-pulse font-semibold text-sm  p-2 rounded-md bg-teal-500 shadow-lg shadow-indigo-500/5 text-white">
          Borrar filtros
        </button>
      </section>

      {filterOpen && (
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="bg-slate-700 absolute top-0 bottom-0 w-2/3 md:w-2/4 max-w-[300px] z-10  "
        >
          <div className="flex items-center">
            <h3 style={{ color: "#97A8B2" }} className="my-3 pl-2 text-xs ">
              FILTRAR PERSONAJES
            </h3>
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="ml-auto pr-2 text-base "
            >
              <FontAwesomeIcon
                icon={faXmark}
                style={{ color: "#fff", fontSize: "30px" }}
              />
            </button>
          </div>
          <AcordionButton
            icon={
              <FontAwesomeIcon
                icon={faSkullCrossbones}
                style={{ color: "#97A8B2" }}
              />
            }
            array={arrayStatus}
            name="status"
            setActiveOption={setActiveOptionStatus}
            activeOption={activeOptionStatus}
            filterBy={filterByStatus}
            type="status"
          />
          <AcordionButton
            icon={
              <FontAwesomeIcon
                icon={faVenusMars}
                style={{ color: "#97A8B2" }}
              />
            }
            array={arrayGender}
            name="gender"
            setActiveOption={setActiveOptionGender}
            activeOption={activeOptionGender}
            filterBy={filterByGender}
            type="gender"
           
          />

          <AcordionButton
            icon={
              <FontAwesomeIcon icon={faUsers} style={{ color: "#97A8B2" }} />
            }
            array={arraySpecies}
            name="species"
            setActiveOption={setActiveOptionSpecie}
            activeOption={activeOptionSpecie}
            filterBy={filterBySpecie}
            type="specie"
          />
        </div>
      )}

     <ReactPaginate
        breakLabel="..."
        nextLabel={<FontAwesomeIcon icon={faCircleArrowRight} style={{color: "#97A8B2",}} />}
        onPageChange={handlePageClick}
        pageCount={data.info?.pages||1}
        previousLabel={<FontAwesomeIcon icon={faCircleArrowLeft} style={{color: "#97A8B2",}} />}
        renderOnZeroPageCount={null}
        activeClassName="bg-white text-black rounded-full w-5 text-center"
        className="flex w-fit m-auto gap-2  text-base my-2 bg-slate-600 p-2 px-3 rounded-md roun"
      />
    </>
  );
};

export default CharactersFilter;
