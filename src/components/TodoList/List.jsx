import React,{useState} from 'react'
import './TodoList.css'
const List = ({list,deleteTodo,updateTodo}) => {
  const [btn,setBtn] = useState('')
  const [text,setText] = useState('')

  const handleChange = (Id,Text) => {
    updateTodo(Id,Text)
    setBtn('')
    setText('')
  }

  return (
   
        <div className='list'>
          {list.map((item,index)=>(
            <div key={item.id} className="showlist">
              <div>
                  <h3>{index+1}. {item.text}</h3>
              </div>
              <div className='btn'>
                  {btn==item.id ? (
                    <>            
                      <input className='inputtext' type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
                      <button className='btnupdate' onClick={()=>handleChange(item.id,text)}><i class="material-symbols-outlined">edit_square</i></button>
                    </>
                  ):(
                    <>      
                      <button className='btnupdate' onClick={()=>setBtn(item.id)}><i class="material-symbols-outlined">edit_square</i></button>
                      <button className='btndelete' onClick={()=>deleteTodo(item.id)}><i class="material-symbols-outlined">delete</i></button>
                    </>
                  )}
                
              </div>
            </div>
            ))}
        </div>

  )
}

export default List