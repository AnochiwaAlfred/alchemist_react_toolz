import React from 'react'
import Accordion from "../components/Accordion"
import { ACCORDION_DATA } from '../data'



const Accordions = () => {

  return (
    <section className='container accordion__container'>
      {
        ACCORDION_DATA.map(({id, title, desc, category}) => <Accordion key={id} id={id} title={title} category={category} desc={desc}/>)
      }
    </section>
  )
}

export default Accordions