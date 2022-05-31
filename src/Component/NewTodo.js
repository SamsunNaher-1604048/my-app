import React from 'react'

const NewTodo = () => {
  return (
    <form>
        <div>
            <label>Title</label>
            <input type='text'id='title' name='title'/>
        </div>

        <div>
            <label>Description</label>
            <input type='text'id='description' name='description'/>
        </div>
        <button type='submit'>Add Todo</button>
    </form>
  )
}

export default NewTodo