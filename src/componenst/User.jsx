import React from "react";

export default function User(props){
    return (
        <div>
           
            {console.log(props.nombre)}
            <h1>Nombre: {props.nombre}</h1>
            <h3>Correo: {props.email}</h3>
            <p>Contraseña: {props.password}</p>
        </div>
    )
}