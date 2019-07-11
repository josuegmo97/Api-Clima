import React from 'react';

class Formulario extends React.Component{

    // crear los refs
    ciudadRefs = React.createRef();
    paisRefs = React.createRef();

    buscarClima = (e) => {
        //Para que la URL no cambie
        e.preventDefault();

        // leer los refs y crear el objeto
        const respuesta = {
            ciudad: this.ciudadRefs.current.value,
            pais: this.paisRefs.current.value       
        }

        // enviar props
        this.props.datosConsulta(respuesta);

        // opcional reseatear el form
    }

    render(){
        return (
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.buscarClima}>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input type="text" ref={this.ciudadRefs} id="ciudad"/>
                                <label htmlFor="ciudad">Ciudad:</label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <select ref={this.paisRefs} id="">
                                    <option defaultValue>Elige un Pais</option>
                                    <option value="VE">Venezuela</option>
                                    <option value="AR">Argentina</option>
                                    <option value="CO">Colombia</option>
                                    <option value="CR">Costa RIca</option>
                                    <option value="ES">Espana</option>
                                    <option value="US">EEUU</option>
                                    <option value="MX">Mexico</option>
                                    <option value="PE">Peru</option>

                                </select>
                                <label htmlFor="pais">Pais:</label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2 buscador">
                                <input type="submit" value="Buscar..." className="waves-effect waves-light btn-large yellow accent-4"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Formulario;