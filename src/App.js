import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
// import axios from 'axios';
import Clima from './components/Clima';
import './css/App.css';

class App extends React.Component {

  state = {
    error: '',
    consulta:{},
    resultado:{}
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.consulta !== this.state.consulta){
      this.consultarApi();
    }
  }

  componentDidMount(){
    this.setState({
      error: false
    })
  }

  consultarApi = async () => {
    const {ciudad, pais} = this.state.consulta;
    if(!ciudad || !pais) return null;

    const apiId = 'e69d9aef79417215bf2f6ebf2b769b5e';
    const Url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&APPID=${apiId}`;

    // axios.get(cono).then((respuesta) => console.log(respuesta.data)).catch(e => console.log(e))

    // query con fect api
    fetch(Url)
    .then(respuesta => respuesta.json())
    .then(datos => {
      this.setState({
        resultado: datos
      })
    })
    .catch(e => console.log(e));
  }

  datosConsulta = respuesta => {
    if(!respuesta.ciudad || !respuesta.pais){
      this.setState({
        error: true
      })
    }else{
      this.setState({
        consulta: respuesta,
        error: false
      })
    }
  }

  render(){

    const error = this.state.error;

    let resultado;

    if(error){
      resultado = <Error mensaje="Ambos Campos Son Obligatorios" />
    } else {
      resultado = <Clima resultado={this.state.resultado} />
    }

    return (
      <div>
        <Header 
          titulo="API Clima Gabriel"
        />

        <Formulario
          datosConsulta={this.datosConsulta}
        />

        {resultado}
      </div>
    )  
  }
}

export default App;
