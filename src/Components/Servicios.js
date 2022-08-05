import React, { Component } from 'react';

class Servicios extends Component {
   render() {

      if (this.props.data) {
         var tipos = this.props.data.tipos.map(function (tipos) {
            return <div key={tipos.titulo}>
               <h3> <span>&bull;</span> {tipos.titulo}</h3>

               <p className="info">
                  {tipos.descrip}
               </p>
            </div>
         })
      }

      return (
         <section id="servicios">

            <div className="row tipos">
               <div className="three columns header-col">
                  <h1><span>Servicios</span></h1>
               </div>

               <div className="nine columns main-col">
                  <div className="row item">
                     <div className="twelve columns">
                        {tipos}
                     </div>
                  </div>
               </div>

               <div class="fila">
                  <div class="columna">
                     <img alt='foto producto' src="images/servicios/servicio.jpg" />
                  </div>
                  <div class="columna">
                     <img alt='foto producto' src="images/servicios/servicio1.jpg" />
                  </div>
                  <div class="columna">
                     <img alt='foto producto' src="images/servicios/servicio2.jpg" />
                  </div>
               </div>
            </div>
            <div className="row tipos" id='clases'>
               <div className="three columns header-col">
                  <h1><span>Clases</span></h1>
               </div>

               <div className="nine columns main-col">
                  <div className="row item">
                     <div className="twelve columns">
                        <h3>Clases online</h3>
                        <p className="info">
                           En estas clases te cuento sobre mis procesos creativos y qué tengo en cuenta al momento de pensar la dirección de arte. Para poder verlas antes del estreno en Youtube, 
                           <a id='registrate' href="/register"> registrate en la comunidad.</a>
                        </p>
                     </div>
                  </div>
               </div>

               <div class="fila">
                  <div class="columna">
                     <iframe src="https://www.youtube.com/embed/zqQImZDiFBE" title="YouTube video player">
                     </iframe>
                  </div>
                  <div class="columna">
                     <iframe alt='foto producto' title="YouTube video player" src="https://www.youtube.com/embed/a4hMV0GX0NY" >
                     </iframe>
                  </div>
                  <div class="columna">
                     <iframe alt='foto producto' title="YouTube video player" src="https://www.youtube.com/embed/AbcQD1bsRu0" >
                     </iframe>
                  </div>
               </div>
               <div class="fila">
                  <div class="columna">
                     <iframe alt='foto producto' title="YouTube video player" src="https://www.youtube.com/embed/9prkpmct2U8" >
                     </iframe>
                  </div>
               </div>
            </div>
         </section>
      );
   }

}

export default Servicios;


