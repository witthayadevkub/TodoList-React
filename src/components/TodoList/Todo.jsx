import React,{ useState } from 'react'
import List from './List'
import './TodoList.css'

const Todo = () => {
  const [todo,setTodo] = useState('')
  const [list,setList] = useState([])
  const[alert,setAlert] = useState({style:'',message:''})

  const timeout =()=>{
    setTimeout(() => {
      setAlert({style:'',message:''})
    },2000)
  } 

  const addTodo = () => {
    const newList = {
       id: Date.now(),
       text: todo
      }
    if(todo){
      setList([...list,newList])
      setAlert({style:'green',message:'เพิ่มข้อมูลเรียบร้อย'})
    }
    else{
      setAlert({style:'red',message:'ใส่ข้อความด้วยนะครับ'})   
      setList(list)
    }
    setTodo('')
    timeout()
  }

  const deleteTodo = (Id) => { 
    setList(list.filter(todo => todo.id !== Id))
    setAlert({style:'red',message:'ลบเรียบร้อย'})
    timeout()
  }
  const updateTodo = (id, text) => {
    setList(list.map(todo => {
      if (text&&todo.id === id) {
        return { ...todo, text }
      } else {
        return todo
      }
    }))
  }
  return (
    <div className="Ap">
      <h1>TODOLIST</h1>
  <h3 style={{color:alert.style}}>{alert.message}</h3>

<div className="todolist">
  <input 
  type="text" 
  value={todo} 
  placeholder="Add new todo"
  onChange={(e)=>setTodo(e.target.value)}/>
  <button className='btnaddtodo' onClick={addTodo}>AddTodo</button>
    </div>
     <div className='container'>
        <List list={list} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
     </div>
    </div>
  )
}

export default Todo
