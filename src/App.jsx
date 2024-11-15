import { useState, useReducer } from 'react'
import toDosReducer from './utilities/toDosReducer.mjs'
import './App.css'
import AddToDo from './components/AddToDo'
import DisplayToDo from './components/DisplayToDo'

function App() {
  const [formData, setFormData] = useState('') //track input field before adding to to-do list
  const [toDos, dispatch] = useReducer(toDosReducer,[]) //manage to-do list and actions


  return (
    <>
      <h1>TO-DO LIST</h1>
      <h3>What do you want to add to the list?</h3>
      <AddToDo setFormData = {setFormData} formData = {formData} dispatch={dispatch}/>
      <ul>
          <DisplayToDo toDos = {toDos} dispatch={dispatch}/>
      </ul>
      
    </>
  )
}

export default App
  