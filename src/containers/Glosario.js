import React, { Component } from 'react';


class Glosario extends Component{
    render() {
        return(
            <div className = 'card'>
                <div className = 'container' style={{ textAlign: 'justify', marginTop: '100px', width: '2000px'}}>
                    <table class="table table-hover table-bordered" style={{backgroundColor: 'white', paddingTop: '30px'}}>
                        <thead class="thead-light">
                            <tr class="text-center">
                                <th scope="col">Término</th>
                                <th colspan="2" scope="col">Definición</th>
                                <th>Enlace</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th class="text-center text-muted" scope="row" style={{paddingTop: '100px'}}>METADATOS</th>
                                <td colspan="2" style={{paddingTop: '27px'}}><p ALIGN="justify" style={{fontSize: '13px'}}>Grupo de datos indispensables para la creación de una aplicación, enfocados en la descripción del contenido de archivos o información integrada.
                                <br/>
                                Caracterizados por ser altamente estructurados en la forma de describir características de datos en su contenido e información; por ser presentadores de diferenciadores establecidos por reglas para determinar la estructura interna de los esquemas y por su clasificación en función a su contenido, variabilidad o uso.</p></td>
                                <th class="text-center text-muted" scope="row" style={{paddingTop: '73px'}}><a href="https://blog.powerdata.es/el-valor-de-la-gestion-de-datos/que-son-los-metadatos-y-cual-es-su-utilidad"><img src="./img/data.png" width="130px" height="130px"/></a></th>
                            </tr>
                            <tr>
                                <th class="text-center text-muted" scope="row" style={{paddingTop: '30px'}}>WIZARD<br/>(setup)</th>
                                <td colspan="2" style={{paddingTop: '28px'}}><p ALIGN="justify" style={{fontSize: '13px'}} >Aplicación de guía integrada por instrucciones de paso a seguir durante el proceso para la generación y personalización de un widget.</p></td>
                                <th class="text-center text-muted" scope="row" style={{paddingTop: '18px'}}><img src="./img/install.png" alt='install' width="100px" height="100px"/></th>
                            </tr>
                            <tr>
                                <th class="text-center text-muted" scope="row" style={{paddingTop: '40px'}}>Servicio de capas</th>
                                <td colspan="2" style={{paddingTop: '28px'}}><p ALIGN="justify" style={{fontSize: '13px'}}>....</p></td>
                                <th class="text-center text-muted" scope="row" style={{paddingTop: '16px'}}><img src="./img/capas.png" alt='capas' width="100px" height="100px"/></th>
                            </tr>
                            <tr>
                                <th class="text-center text-muted" scope="row" style={{paddingTop: '40px'}}>VALORES<br/> DISCRETOS</th>
                                <td colspan="2" style={{paddingTop: '28px'}}><p ALIGN="justify" style={{fontSize: '13px'}}>Catálogo de datos generales precargados en la aplicación para su descarga en automático, caracterizados por su repetición constante en la integración de la aplicación (estado civil,sexo,día de la semana,etc).</p></td>
                                <th class="text-center text-muted" scope="row" style={{paddingTop: '29px'}}><img src="./img/form9.jpg" alt='form' width="110px" height="110px"/></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> 
        );
    }
}


export default Glosario;