import React from "react";
import  './styles.css';



 function ItemList({repo, handleRemoveRepo}){
    const handleRemove = () =>{
        handleRemoveRepo(repo.id)
       


    }
    return (
        <div className="ItemList">
        <a href={repo.html_url}>
            <h1>{repo.name}</h1>
            </a> 
        <a href="#"  rel="noreferrer" className="remover" onClick={handleRemove}>Remover</a>
        <hr />
    </div> 
 
    )


}



export default ItemList