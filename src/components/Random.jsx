import React from "react";

export default ({max, min}) => {

    const aleatório = Math.round(Math.random() * (max - min) + min);

    return(
    <>
    <h1>
        o número aleatório gerado foi: {aleatório}
    </h1>

    <p>o número inicial foi: {min}</p>
    <p>o número final foi: {max}</p>


    </>
    );
}