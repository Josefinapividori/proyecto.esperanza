import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert';

const Contact = (props) => {
   if (props.data) {
      var name = props.data.name;
      var street = props.data.address.street;
      var city = props.data.address.city;
      var state = props.data.address.state;
      var zip = props.data.address.zip;
      var phone = props.data.phone;
      var email = props.data.email;
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


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

                  <h4>• Dirección y celular de contacto •</h4>
                  <p className="address">
                     {name}<br />
                     {email}<br />
                     {street} <br />
                     {city}, {state} {zip}<br />
                     <span>{phone}</span>
                  </p>
               </div>

               <div className="widget widget_tweets">
                  <h4 className="widget-title">• Clases •</h4>
                  <ul id="twitter">
                     <li>
                        <span>
                           1# Dirección de arte para plataformas digitales | Creación de Estilos  |
                           <a href="https://youtu.be/zqQImZDiFBE">https://youtu.be/zqQImZDiFBE</a>
                        </span>
                     </li>
                     <li>
                        <span>
                           2# Dirección de arte para plataformas digitales | Elementos visuales 1 |
                           <a href="https://youtu.be/a4hMV0GX0NY">https://youtu.be/a4hMV0GX0NY</a>
                        </span>
                     </li>
                     <li>
                        <span>
                           3# Dirección de arte para plataformas digitales | Elementos visuales 2 |
                           <a href="https://youtu.be/AbcQD1bsRu0">https://youtu.be/AbcQD1bsRu0</a>
                        </span>
                     </li>
                  </ul>
               </div>
            </aside>
         </div>
      </section>
   );
}

export default Contact;
