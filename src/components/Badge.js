import React from "react";

import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge__section-name">
          <img
            src="https://www.gravatar.com/avatar?d=identicon"
            alt="Avatar"
            className="Badge__avatar"
          />
          <h1>
            Juan
            <br />
            Moreno
          </h1>
        </div>
        <div className="Badge__section-info">
          <p>Frontend Developer</p>
        </div>
        <div className="Badge__footer">#platzi</div>
      </div>
    );
  }
}

export default Badge;
