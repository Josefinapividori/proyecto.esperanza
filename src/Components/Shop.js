import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Shop = (props) => {
  if (props.data) {
    var projects = props.data.projects.map(function (projects) {
      var projectImage = 'images/shop/' + projects.image;
      return <div key={projects.title} className="columns shop-item">
        <div className="item-wrap">
          <a href={projects.url} title={projects.title}>
            <img alt={projects.title} src={projectImage} />
            <div className="overlay">
              <div className="shop-item-meta">
                <h5>{projects.title}</h5>
                <p>{projects.category}</p>
              </div>
            </div>
            <div className="link-icon"><i className="fa fa-link"></i></div>
          </a>
        </div>
      </div>
    })
  }

  const [name, setName] = useState();

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  console.log(token)

  useEffect(() => {
    if (token) {
      axios
        .get(`http://localhost:5005/user`, {
          headers: {
            token: token,
          },
        })
        .then(({ data }) => setName(data.nombre))
        .catch((error) => console.error(error));
    }
  }, [token]);

  if (!name) {
    return (navigate(`/`));
  }

  return (
    <section id="shop">

      <div className="row">

        <div className="twelve columns collapsed">

          <h1>BENEFICIOS EXCLUSIVOS</h1>

          <div id="shop-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {projects}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shop;