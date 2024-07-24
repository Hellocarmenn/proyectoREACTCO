/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'
import { toCapital } from '../helpers/toCapital'

const Item = ( {producto} ) => {
  return (
    <div className="producto">
        <img src={producto.imagen} />
        <div>
            <h4>{producto.nombre}</h4>
            <p>Precio: ${producto.precio}</p>
            <p>Categoría: {toCapital(producto.categoria)}</p>
            <p>{producto.descripcion}</p>
            <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
        </div>
    </div>
  )
}

export default Item