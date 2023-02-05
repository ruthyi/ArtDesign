import React from 'react'
import styleProduct from './Products.module.css'
import trash from "../../assets/eliminar-c.png"
import { useDispatch } from 'react-redux'
import { deleteTask } from '../../features/tasks/taskSlice'
import { editTask } from '../../features/tasks/taskSlice'
import { editCounterIncrement } from '../../features/tasks/taskSlice'
import { editCounterDecrement } from '../../features/tasks/taskSlice'
import Swal from 'sweetalert2'
export const Product = (props) => {

  const { product: { name, count, price, finishPrice, id, nameCategory, url } } = props;
  let nameEdit = name;
  let countEdit = count;
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id))
    Swal.fire({
      icon: 'success',
      title: 'Producto Eliminado del Carrito',
      showConfirmButton: false,
      timer: 1500,
      imageUrl: 'https://firebasestorage.googleapis.com/v0/b/my-projectstorage-7b2b9.appspot.com/o/ArteYDise%C3%B1o%2Fcart.png?alt=media&token=9fb689d7-0ca5-4f0e-85af-2a63a3656d82',
      imageWidth: 50,
      imageHeight: 50,
      imageAlt: 'Shopping Cart',
      background: '#000000'
    })
  }
  const handleUpdate = (e) => {
    if (e.target.name == "name") {
      nameEdit = e.target.value
    } else {
      countEdit = e.target.value
    }
    dispatch(editTask(id, nameEdit, countEdit))
  }
  const handleUpdateCountIncrement = (id) => {
    console.log(id)
    dispatch(editCounterIncrement(id));
  }
  const handleUpdateCountDecrement = (id) => {
    console.log(id)
    dispatch(editCounterDecrement(id));
  }
  return (
    <div className={styleProduct.product} >
      <div className={styleProduct.contImgProduct}>
        <img src={url} alt={nameCategory} />
      </div>
      <div className={styleProduct.productDetail} >
        <h2>{nameCategory}</h2>
        <p>{id}</p>
        <input name="name" type="text" placeholder={name} onChange={handleUpdate} />
        <div className={styleProduct.containerCount}>
          <div className={styleProduct.changeNumber}>
            <button onClick={() => handleUpdateCountDecrement(id)}>-</button>
            <span>{count}</span>
            <button onClick={() => handleUpdateCountIncrement(id)}>+</button>
          </div>

          <h4>$ {finishPrice}</h4>

        </div>

        <div className={styleProduct.contTrash}>
          <button onClick={() => handleDelete(id)}><img src={trash} alt="trash" /></button>
        </div>
      </div>
    </div>

  )
}
