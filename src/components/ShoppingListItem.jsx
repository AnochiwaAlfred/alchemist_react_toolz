
import React from 'react'
import { FaPlus, FaMinus, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'

// import ShoppingList from '../pages/ShoppingList'

const ShoppingListItem = ({id, item, quantity, unit, pricePerUnit, status, onDelete, toggle}) => {  


  return (
    <tr className='shopping__item' >
      <td><button className="nav__toggle-btn" onClick={toggle}>{status ?  <FaCheckCircle className='green-check'/> : <FaTimesCircle className='red-times'/>}</button></td>
      <td>{id}.</td>
      <td>{item}</td>
      <td>{quantity}</td>
      <td>{unit}</td>
      <td>{pricePerUnit}</td>
      <td>{pricePerUnit*quantity}</td>
      <td><button className='btn sm danger' onClick={onDelete}>Delete</button></td>
    </tr>
  )
}

export default ShoppingListItem
