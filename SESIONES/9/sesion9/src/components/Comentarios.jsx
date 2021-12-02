import { useEffect } from "react";
import { useState } from "react";
import { consumir } from "../api/apiComentarios";
// sin async no hay await, uno necesita del otro
export function Comentarios() {
    const [listarComentario, setListarComentario] = useState([]);
    let [actualizar, setActualizar] = useState(true);
    //enlaza una variable con la vista 
    useEffect(()=>{
    async function solicitarComentarios() {
        const datos = await consumir();
        setListarComentario(datos);
    }
    solicitarComentarios();
})
    return (
        <>
            <button type="button" className="" onClick={() =>setActualizar(!actualizar)}>Actualizar</button>
            {listarComentario.map(a=> 
                <p>{a.body}</p>
            )}
        </>
    );
}