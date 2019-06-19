import React, { Component } from 'react';
import Ventajas from './ventajas'

class gridMat extends Component{
    render() {
      return ( 
       <div>
        <div className="row">
            <div className=" col s12 m6 l8">
                <p>
                    <div className='container' style={{fontFamily: 'montserrat', marginTop: '-30px', borderColor: 'black'}}>
                        <h4><strong>Acerca de Orchesta</strong></h4>
                        <p ALIGN="justify">
                            Aplicación diseñada como herramienta para el usuario en la creación de nuevas páginas web generadas con un diseño preestablecido en un tiempo de elaboración reducido, integrada por una serie de instrucciones de fácil seguimiento para la automatización de contenidos y diseño final.
                        </p>
                        <h4>Objetivo</h4>
                        <p ALIGN="justify">
                            Elaboración de páginas electrónicas en un tiempo de producción minimo, de fácil uso para usuarios con conocimientos básicos en el tema e integrador de código para programadores con un ahorro en el tiempo de trabajo. 
                        </p>
                    </div>
                </p>
            </div>
            <div class="col s12 m6 l3 push-s2 offset-s6  ">
                <p>
                    <div className='container' style={{fontFamily: 'montserrat', marginTop: '-30px'}}>
                        <center><h4><strong>Ventajas</strong></h4></center>
                        <p style={{marginLeft: '-100px'}}>
                            <Ventajas />
                        </p>
                    </div>
                </p>
            </div>
        </div>
        </div>   
       
      )
  }
}


export default gridMat