import React from "react";

class Badge extends React.Component {
  render() {
    return (
      <div>
        <div>
          <img src="" alt="Logo de la conferencia" />
        </div>
        <div>
          <img src="{confLogo}" alt="Avatar" />
          <h1>
            Juan
            <br />
            Moreno
          </h1>
        </div>
        <div>
          <p>Frontend Developer</p>
        </div>
      </div>
    );
  }
}

export default Badge;
