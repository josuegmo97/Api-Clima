import React, { Component } from 'react'

class Clima extends Component {

    mostrarResultado = () => {

        //obtener datos de consulta
        const {name, weather, main} = this.props.resultado;

        if(!name || !weather || !main) return null;

        const kelvin = 273.15;

        const UrlImg = `https://openweathermap.org/img/w/${weather[0].icon}.png`;


        return(
            <div className="row">
                <div className="resultado col s12 m8 l6 offset-m2 offset-l3">
                    <div className="card-panel light-blue align-center">
                        <span className="white-text">
                            <h2>Resultado Clima de: {name}</h2>
                            <p className="temperatura">
                                Actual: {(main.temp - kelvin).toFixed(2)} &deg;C
                                <img src={UrlImg} alt="Clima" />Clima
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="container">
                {this.mostrarResultado()}
            </div>
        )
    }
}

export default Clima;
