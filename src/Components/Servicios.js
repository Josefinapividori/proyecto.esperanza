import React, { Component } from 'react';

class Servicios extends Component {
   render() {

      if (this.props.data) {
         var education = this.props.data.education.map(function (education) {
            return <div key={education.school}>
               <h3> <span>&bull;</span> {education.school}</h3>

               <p className="info">{education.degree}

               </p>
            </div>
         })
      }

      return (
         <section id="servicios">

            <div className="row education">
               <div className="three columns header-col">
                  <h1><span>Servicios</span></h1>
               </div>

               <div className="nine columns main-col">
                  <div className="row item">
                     <div className="twelve columns">
                        {education}
                     </div>
                  </div>
               </div>
            </div>
         </section>
      );
   }

}

export default Servicios;


