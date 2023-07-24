import {useRef, useState } from "react";
import Notas from "./Notas";
import {v4 as uuid} from 'uuid';

function ListaNotas() {
    const [notas, setNotas] = useState([]);

    const tituloRef = useRef();
    const notasRef = useRef();
    const importanteRef = useRef();

    const agregarNotas = () => {
        const titulo = tituloRef.current.value;
        const nota = notasRef.current.value
        const importante = importanteRef.current.checked;

        if (titulo === "" || nota === '') return;

        setNotas((prev) =>{

            const nuevaNota = {
                id: uuid(),
                titulo: titulo,
                nota: nota,
                importante: importante //agregar la nota importante.
            }
            return [...prev, nuevaNota];
        });
        tituloRef.current.value = "";
        notasRef.current.value = "";
        importanteRef.current.checked = false; //se reinicia.
    }
    return(
        <>
            <h2 className="titulo">¡Simulador de Post It!</h2>
            <div className="input-group my-4">
                <input ref={tituloRef} className="form-control m-2" placeholder="Ingrese titulo (obligatorio)"></input>
                <input ref={notasRef} className="form-control m-2" placeholder="Ingrese descripcion (obligatorio)"></input>
                <div className="form-check m-3">
                    <input ref={importanteRef} className="form-check-input" type="checkbox" id="importante"></input>
                    <label className="form-check-label" htmlFor="importante">Importante</label>
                </div>
                <button onClick={agregarNotas} className="btn btn-dark m-2">Agregar</button>
            </div>
            <ul className="notas-container">
                {notas.map((t)=>(
                    <Notas key={t.id} titulo={t.titulo} nota={t.nota} importante={t.importante}></Notas>
                ))}
            </ul>
        </>
    );
}

export default ListaNotas;