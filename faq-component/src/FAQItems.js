import React, { useState } from 'react'
import './FAQItems.css'

const FAQItems = ({faq,index}) => {
    const [isOpen,setIsOpen]=useState(false)
    const toggleAnwer=()=>{
        setIsOpen(!isOpen)
    }
  return (
    <div className="faq-box">
      <div className="que" onClick={toggleAnwer}>
        <button className={isOpen ? 'open' : 'closed'} >{isOpen ? "v" : ">"}</button>
        <div>{faq.question}</div>
      </div>
      {isOpen && <div className="ans">{faq.answer}</div>}
    </div>
  );
}

export default FAQItems 