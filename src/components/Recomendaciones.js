import React, {useState, useEffect} from 'react'
import RecomendacionFragment from "./Fragments/RecomendacionFragment"
import Mascarilla from "../assets/images/mascarilla.jpg"
import Lavamanos from "../assets/images/lavamanos.jpg"

const Recomendaciones = () => {
    return(
        <>
            <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Recomendaciones</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <RecomendacionFragment
                        titulo="Lavarse las manos"
                        tipoAlerta="alert-danger">
                        Es necesario lavarse las manos para evitar que los gérmenes se mantengan en el cuerpo
                        <br />
                        <img src={Lavamanos} alt="Lavamanos" />
                    </RecomendacionFragment>
                </div>
            <div className="col-6">
                <RecomendacionFragment
                    titulo="Usar mascarilla"
                    tipoAlerta="alert-success">
                    Es necesario usar mascarilla para evitar el contagio
                    <br />
                    <img src={Mascarilla} alt="Mascarilla" />
                </RecomendacionFragment>
            </div>
        </div>
    </div>
    </>
  )
}
export default Recomendaciones