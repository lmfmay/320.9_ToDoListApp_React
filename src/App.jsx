import { useState, useEffect, useReducer } from 'react'
import toDosReducer from './utilities/toDosReducer.mjs'
import ACTION from './utilities/toDosReducerActions.mjs'
import './App.css'
import AddToDo from './components/AddToDo'
import DisplayToDo from './components/DisplayToDo'

function App() {
  const [formData, setFormData] = useState('')
  const [toDos, dispatch] = useReducer(toDosReducer,[])


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

//Components:
  //AddToDo
  //UpdateToDO
  //DisplayToDo
    //Newest at top
//Utilities:
  //Actions
  //Reducer cases
    //Add to do
    //Update to do
  