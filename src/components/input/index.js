import React from "react";
import {InputContainer} from './styles'

function Input({valeu, onChange}){
    return(
        <InputContainer>
          <input
           value={valeu}
           onChange={onChange } 
           placeholder="@repo-name"/>
        </InputContainer>
    );
}


export default Input;