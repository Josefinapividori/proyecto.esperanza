import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert';

const Contact = (props) => {
   if (props.data) {
      var message = props.data.contactmessage;
   }

   const form = useRef();
   const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm(
         "envios_mail",
         "contact_form",
         form.current,
         "user_VO7SmOcNad8hfRiaoKtLK"
      ).then(
         result => {
            console.log(result.text);
            Swal({
               position: "center",
               icon: "success",
               title: "Tu mensaje fue enviado, gracias por contactarme!",
               showConfirmButton: false,
               timer: 2500,
            });
         },
         error => console.log(error.text)
      )


   }

   return (
      <section id="contacto">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

               <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form ref={form} onSubmit={sendEmail}>
                  <fieldset>

                     <div>
                        <label htmlFor="contactName">Nombre <span className="required">*</span></label>
                        <input type="text" defaultValue="" size="35" id="contactName" name="user_name" />
                     </div>

                     <div>
                        <label htmlFor="contactEmail">Mail <span className="required">*</span></label>
                        <input type="text" defaultValue="" size="35" id="contactEmail" name="user_email" />
                     </div>

                     <div>
                        <label htmlFor="contactSubject">Asunto</label>
                        <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" />
                     </div>

                     <div>
                        <label htmlFor="contactMessage">Mensaje <span className="required">*</span></label>
                        <textarea cols="50" rows="15" id="contactMessage" name="message"></textarea>
                     </div>

                     <div>
                        <button className="submit">Enviar</button>
                        <span id="image-loader">
                           <img alt="cargando" src="images/loader.gif" />
                        </span>
                     </div>
                  </fieldset>
               </form>

            </div>
         </div>
      </section>
   );
}

export default Contact;
