import React from "react";

function NavItem(props) {
  return (
    <div className="nav-button">
      <a href={props.url}>
        <h2>{props.text}</h2>
      </a>
    </div>
  );
}

export default NavItem;
