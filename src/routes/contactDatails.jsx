import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export const ContactDetails = () => {
 
    const { id } = useParams();
 //redirect

 const navigate = useNavigate();

 const handleContact = () => {
    alert('Contato Enviado!')
    return navigate('/')
    }

    return (
    <div>
      <h1>Exibindo Mais informações de Contato: {id}</h1>
      <button onClick={handleContact}>Enviar Mensagem</button>
    </div>
  );
};