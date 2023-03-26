import React from "react";

import { Link, useParams } from "react-router-dom";

export const Contact = () => {
  return (
    <div>
      <h1>Pagina de Contatos</h1>
      <p>
        <Link to="/contact/1">Contato 1</Link> <br /><br />
        <Link to="/contact/2">Contato 2</Link> <br /><br />
        <Link to="/contact/3">Contato 3</Link> <br /><br />
      </p>
    </div>
  );
};