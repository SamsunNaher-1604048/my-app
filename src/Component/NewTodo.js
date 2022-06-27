import React, { useState } from 'react'
import style from './newtodo.module.css'

const NewTodo = () => {
  const[todo,settodo]=useState({title:"",des:""});
  const{title,des}=todo;

  const onhendel=(event)=>{
    event.preventDefault()

  }

  const change=()=>{
    
    settodo()
  }

  return (
    <form className={style.form} onSubmit={onhendel}>
        <div className={style['form-field']}>
            <label>Title</label>
            <input type='text'id='title' name='title' value={title} onChange={change}/>
        </div>

        <div className={style["form-field"]} >
            <label>Description</label>
            <input type='text'id='des' name='des' value={des} onChange={change}/>
        </div>
        <button type='submit'>Add Todo</button>
    </form>
  )
}

export default NewTodo