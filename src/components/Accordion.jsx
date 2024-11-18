import React, { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

const Accordion = ({id, title, desc, category}) => {
  const [isToggled, setIsToggled] = useState(false)

  // const toggle = () => isToggled?setIsToggled(false):setIsToggled(true)
  const toggle = (e) => {
    setIsToggled(!isToggled);
    if (!isToggled){
      const body = e.target.parentElement.parentElement.parentElement.lastChild
      console.log(true)
      console.log(body.parentElement.innerHTML)
      console.log(e.target.innerHTML)
      body.style.display = "none"
      // body.parentElement.firstChild.firstChild.firstChild.firstChild.style.display= "block";
    }else{
      const body = e.target.parentElement.parentElement.parentElement.lastChild
      console.log(false)
      console.log(body.parentElement.innerHTML)
      console.log(e.target.innerHTML)
      body.style.display = "block"
      // body.parentElement.firstChild.firstChild.firstChild.firstChild.style.display= "block";
    }

  }

  return (
    <div className='accordion__container '>
        <div className="accordion__header">
          <div className='accordion__title'>{title}</div>
          <button className="nav__toggle-btn" onClick={toggle}>
            {isToggled ?  <FaMinus /> : <FaPlus />}
          </button>
        </div>
        <div className="accordion__body">
          <div className="accordion__body-inner">
            {desc}
          </div>
        </div>
    </div>
  )
}

export default Accordion