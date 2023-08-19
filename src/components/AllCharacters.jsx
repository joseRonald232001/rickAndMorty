import React from "react";
import CharactersFilter from "./CharactersFilter";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AllCharacters = () => {
  const imagesHeader = [
    "https://www.xtrafondos.com/wallpapers/rick-and-morty-minimalista-6420.jpg",
    "https://www.xtrafondos.com/wallpapers/rick-and-morty-en-nave-4518.jpg",
    "https://www.xtrafondos.com/wallpapers/resized/rick-y-morty-3245.jpg?s=large",
    "https://www.xtrafondos.com/wallpapers/rick-y-morty-en-atardecer-3247.jpg",
    "https://w0.peakpx.com/wallpaper/653/714/HD-wallpaper-rick-morty-x-breaking-bad.jpg",
    "https://www.xtrafondos.com/wallpapers/resized/morty-smith-rick-y-morty-9240.jpg?s=large",
  ];
  const data = useSelector((state) => state.obtainData);
  const indexImageHeader = Math.floor(Math.random() * imagesHeader.length);
  return (
    <>
      <header
        style={{
          backgroundImage: `url(${imagesHeader[indexImageHeader]})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat ",
        }}
        className="h-36 w-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
      ></header>

      <h1 className="font-rubik text-center my-1  text-lg">Rick and morty</h1>

      <CharactersFilter />

      <main>
        <section className="container px-1 m-auto gap-2 custom:gap-1 grid grid-cols-2 custom:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 ">
          {data.results?.map((character) => (
            <Link key={character.id} to={`/character/${character.id}`}>
              <article className="m-w-[110px] max-w-[241px] border-[1px] border-gray-400">
                <div 
                className="relative h-32   shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] "
                style={{
                  backgroundImage: `url(${character.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat ",
                }} >
                  <span
                  className="absolute w-20 h-6 text-sm bg-gray-500 rounded-r-md mr-[2%] text-center bottom-2 left-0"
                  >
                  {character.status =="Alive"?"vivo":character.status=="Dead"?"muerto":'extraño'}
                  </span>
                  <div style={{background:`${character.status=="Alive"?"#84CC16":"red"}`}} className="absolute ml-1 bottom-4 h-2 w-2  rounded-full "></div>
                </div>
                <h3 className="pl-1">{character.name}</h3>
                <hr className="bg-slate-600" />
                <div className="px-2 text-left ">
                <span className="text-slate-400 ">raza</span>
                <p className="font-semibold">{character.species}</p>
                <span className=" text-right text-lime-500 text-xs ">
                <p className="pb-1">ver mas ...</p>
                </span>
                </div>
              </article>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
};

export default AllCharacters;
