import React from "react";
import Proptype from "prop-types";

export default function heading(props) {
  return (
    <div>
      <nav class="navbar py-4 " style={{ backgroundColor: "#f5b915" }}>
        <div class="container-fluid">
          <h2 class="navbar-brand " style={{ fontSize: 30 }}>
            {props.title}
          </h2>
        </div>
      </nav>
    </div>
  );
}

heading.proptype = {
  title: Proptype.string,
};
