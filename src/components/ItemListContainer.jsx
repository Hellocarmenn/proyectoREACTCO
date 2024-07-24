import React, { useEffect, useState } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Productos");
    const  categoria  = useParams().categoria;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await pedirDatos();
                console.log("Datos recibidos:", res);

                if (categoria) {
                    const filteredProductos = res.filter((prod) => prod.categoria === categoria);
                    console.log("Productos filtrados:", filteredProductos);

                    setProductos(filteredProductos);
                    setTitulo(categoria);
                } else {
                    setProductos(res);
                    setTitulo("Productos");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                // Aquí puedes manejar el estado de error si es necesario
            }
        };

        fetchData();

    }, [categoria]);

    return (
        <div>
            <ItemList productos={productos} titulo={titulo} />
        </div>
    );
};

export default ItemListContainer;
