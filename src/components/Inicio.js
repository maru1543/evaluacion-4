import React, {useEffect, useState} from "react"
import { Link } from "react-router-dom"


const Inicio = () => {
    return (
        <>
        <h1>Inicio</h1>
        <div>
            <Link to='/pokedex'>Ir a la Pokedex</Link>
        </div>
        <div>
            <Link to='/recomienda'>Ir a las Recomendaciones</Link>
        </div>
        </>
    )
}

export default Inicio;