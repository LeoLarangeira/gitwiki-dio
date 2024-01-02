import React from "react";
import { ButtonContainer } from "./styles";


function Button({onClick}){
    return (
    <ButtonContainer>
        <button onClick={onClick}>Search</button>
        <hr />
    </ButtonContainer>
    )
}


export default Button