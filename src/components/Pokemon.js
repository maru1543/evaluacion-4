import React, {useState, useEffect} from "react";
import Pikachu from '../assets/images/pokemon1_pikachu.jpg'
import Gengar from '../assets/images/pokemon2_gengar.jpg'
import Cyndaquil from '../assets/images/pokemon3_cyndaquil.jpg'
import PokemonFragment from "./Fragments/PokemonFragment";

const Pokemon = () => {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Pokedex!</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <PokemonFragment
                            textoDescripcion="Cuando varios de estos POKéMON se reúnen, su electricidad podría acumularse y causar tormentas eléctricas."
                            imagen={Pikachu}
                            titulo="Pikachu"
                            linkRef={"https://pokemondb.net/pokedex/pikachu"}
                        />
                    </div>
                    <div className="col-4">
                        <PokemonFragment
                            textoDescripcion="Bajo una luna llena, a este POKéMON le gusta imitar las sombras de las personas y reírse de su miedo."
                            imagen={Gengar}
                            titulo="Gengar"
                            linkRef={"https://pokemondb.net/pokedex/gengar"}
                        />
                    </div>
                    <div className="col-4">
                        <PokemonFragment
                            textoDescripcion="Es tímido, y siempre se enrosca en una bola. Si es atacado, estalla su espalda para protegerse."
                            imagen={Cyndaquil}
                            titulo="Cyndaquil"
                            linkRef={"https://pokemondb.net/pokedex/cyndaquil"}
                        />
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default Pokemon