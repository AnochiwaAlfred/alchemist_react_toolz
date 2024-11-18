import React, {useState} from 'react'
import ShoppingListItem from "../components/ShoppingListItem"
// import { SHOPPING_LIST } from '../data'  



const ShoppingList = () => {
  const [refresh, setRefresh] = useState(false)

  const [shoppingList, setShoppingList] = useState([])

  const addListItem = () => {
    const item = document.getElementById('addItem').value
    const quantity = document.getElementById('addQuantity').value
    const unit = document.getElementById('addUnit').value
    const pricePerUnit = document.getElementById('addPricePerUnit').value

    const newListItem = {
      id: shoppingList.length + 1,
      item,
      quantity,
      unit,
      pricePerUnit,
      status: false
    }
    shoppingList.push(newListItem)
    setRefresh(!refresh)
    
  }

  const deleteListItem = (id) => {
    const updatedList = shoppingList.filter((item) => item.id!== id)
    setShoppingList(updatedList)
    setRefresh(!refresh)
  }

  const toggle = (id) => {
    // setIsToggled(!isToggled);
    const updatedList = shoppingList.map((item) => item.id === id? {...item, status:!item.status}: item)
    setShoppingList(updatedList)
  }

  const getTotalCost = shoppingList.reduce((accumulator, item) => accumulator + (item.quantity * item.pricePerUnit), 0)

  return (
    <section className='container list__container'>
      <h1 className='list__header center'>Shopping List</h1>
      <form action="" className='list__form'>
        <input type="text" name="addItem" className='text-input' id="addItem" placeholder='Item' />
        <input type="text" name="addQuantity" className='text-input' id="addQuantity" placeholder='Quantity' />
        <input type="text" name="addUnit" className='text-input' id="addUnit" placeholder='Unit' />
        <input type="text" name="addPricePerUnit" className='text-input' id="addPricePerUnit" placeholder='Price Per Unit' />
        <input type="button" value="Add" className='btn sm' id='addButton' onClick={addListItem}/>
      </form>
      {shoppingList.length>0 ?
        <table className='shopping__table'>
          <thead>
            <tr>
              <th></th>
              <th>S/N</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Unit</th>
              <th>Price Per Unit</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody className='shopping__table-body'>
            {
              shoppingList.map(({id, item, quantity, unit, pricePerUnit, status}) => <ShoppingListItem 
                key={id} 
                id={id} 
                item={item} 
                quantity={quantity} 
                unit={unit} 
                pricePerUnit={pricePerUnit} 
                status={status} 
                onDelete={() => deleteListItem(id)}
                toggle={() => toggle(id)}
                />) 
            }
            <tr>
                <th>Total:</th>
                <td>{getTotalCost}</td>
            </tr>
          </tbody>
        </table> : <div></div>
      }

    </section>
  )
}

export default ShoppingList
