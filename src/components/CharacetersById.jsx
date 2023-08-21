import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
const CharacetersById = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dataByid, setDataById] = useState({});

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => setDataById(res.data));
  }, []);

  function backNavigate() {
    navigate(-1);
  }
  return (
    <>
      <div className="container max-w-md px-2 m-auto text-center relative mb-2">
        <span>{dataByid.name}</span>
        <button onClick={backNavigate} className="absolute left-2">
          <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#515761" }} />
          <span className="pl-2">volver</span>
        </button>
      </div>

      <div className="container max-w-xs  m-auto flex flex-col text-center ">
        <img className="m-auto" src={dataByid.image} alt="" />

        <p>{dataByid.status}</p>
        <p>{dataByid.species}</p>
        <p>{dataByid.type}</p>
        <p>{dataByid.gender}</p>
        <p>{dataByid.origin?.name}</p>
        <p>{dataByid.location?.name}</p>
        <p>{dataByid.episode?.length}</p>
      </div>
    </>
  );
};

export default CharacetersById;
