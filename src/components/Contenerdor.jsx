import React from "react";

export default function Contenedor() {
  console.log("contenedor");
  return (
    <div className="container">
      <h1>Lista de Contactos</h1>
      <ul className="contact-list">
        <li className="contact">
          <div>
            <span className="name">Juan Perez</span>
            <span className="details">juan@example.com - 123-456-7890</span>
          </div>
          <button>del</button>
        </li>
        <li className="contact">
          <div>
            <span className="name">María García</span>
            <span className="details">maria@example.com - 987-654-3210</span>
          </div>
          <button>del</button>
        </li>
      </ul>
      <button id="addContactBtn" className="addContactBtn">
        +
      </button>
    </div>
  );
}
