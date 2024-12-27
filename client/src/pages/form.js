import React from "react";
import './form.css';
import { backURL, backPort } from '../index.js';

function Form() {
  return (
    <form id = "testform" className="Form" onSubmit={submitEvent}>
        <div>
        <label>Inserta algo makinon</label>
        <input id="algo" placeholder="pon algo hostia" />
        </div>
        <br />
        <div>
        <button>Enviar</button>
        </div>
    </form>
  );
}

const submitEvent = (event) => {
  event.preventDefault();
  let algo = document.getElementById('algo').value
  let objetoAlgo = { algo: algo };
  let objetoAlgoJson = JSON.stringify(objetoAlgo);
    //fetch("http://localhost:3001/algo", {
    console.log("backURL: " + backURL + ":" + backPort + "/algo");	
    fetch(backURL + ":" + backPort + "/algo", {
        body: objetoAlgoJson,
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        }
    })
    .then((res) => {
        //console.log(res.su);
        if (!res.ok || res.status !== 200) { // devuelve el ok de la peticion en sí y el status de la respuesta
            throw new Error('Network response was not ok ' + res.statusText);
        }
        
        return res.json();
    
    })
    .then((data) => {
        console.log('Success:', data);

        let algos = data;  // respuesta desde el backend
        console.log("array: ", algos);  
    })
    .catch((error) => {
    console.error('Error:', error);
    });
};
//PODEMOS LANZAR PETICIONES AL BACKEND SIN QUE SEA EN UN BOTÓN PARA CARGAR COSAS DE EN EL FRONTEND DE LA BDDD

export default Form;