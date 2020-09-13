import React from "react";
import PropTypes from 'prop-types';


const Clima = ({resultado}) => {
    //extraer los valores
    const { name, main } = resultado;
    if(!name) return null;
    //grados kelvin 
    const kelvin = 273.15;

    return(
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>Clima de {name} es:</h2>
                <p className="temperatura">
                    {parseInt(main.temp - kelvin)} <span>&#x2103;</span>
                </p>
                <p> Sensación Térmica:
                    {parseInt(main.feels_like - kelvin)} <span>&#x2103;</span>
                </p>
                <p> Temperatura Máxima:
                    {parseInt(main.temp_max - kelvin)} <span>&#x2103;</span>
                </p>
                <p>Temperatura Mínima:
                    {parseInt(main.temp_min - kelvin)} <span>&#x2103;</span>
                </p>
                <p>Humedad:
                    {main.humidity} <span>%</span>
                </p>
            </div>
        </div>
    );
}
Clima.propTypes = {
    resultado: PropTypes.object.isRequired
}

export default Clima;