import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'

const OneQuestion = ({title,info}) => {
    const[show,setShow]=useState(false)

  return (
    <article className='p-4 border border-teal-300 border-solid '>
        <p className='font-bold flex items-center justify-between'>{title} <span onClick={()=> show? setShow(false):setShow(true)}>{show?<FontAwesomeIcon icon={faMinus} />:<FontAwesomeIcon icon={faPlus}/>}</span></p>
        <div>
             {show ? <p className='text-slate-500 text-sm'>{info}</p> : null} 
        </div>
    </article>
  )
}

export default OneQuestion