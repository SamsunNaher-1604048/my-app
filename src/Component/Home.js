import React from 'react'


import Todos from './Todos'
import style from './home.module.css'

function Home() {

    const dummydata=[{
        id:1,
        title:"Todo1",
        des:"this is des 1",

    },
    {
        id:2,
        title:"Todo2",
        des:"this is des 2",

    }];
  return (
    <div  className={style.container}>
      <h1>Todo App</h1>
      <Todos data={dummydata}/>
    </div>
  )
}

export default Home