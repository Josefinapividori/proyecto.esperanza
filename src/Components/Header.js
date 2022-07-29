import React, { Component } from 'react';


class Header extends Component {
   render() {
      if (this.props.data) {
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         })
      }

      return (
         <header id="home">

            <nav id="nav-wrap">

               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#sobre-mi">Sobre mi</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Portfolio</a></li>
                  <li><a className="smoothscroll" href="#servicios">Servicios</a></li>
                  <li><a className="smoothscroll" href="#contacto">Contacto</a></li>
                  <li><a href="/login">Iniciar sesión</a></li>
                  <li><a href="/register">Registrate</a></li>
               </ul>

            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <ul className="social">
                     {networks}
                  </ul>
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#sobre-mi"><i className="icon-down-circle"></i></a>
            </p>

         </header>
      );
   }
}

export default Header;
