import { useState, useEffect } from "react";


export default function Home (){

  const[mapear, setMapear]= useState([])
  const[input, setInput]= useState("")
  useEffect(()=>{

    localStorage.setItem("@tarefas", JSON.stringify(mapear))
  },[mapear])

  function enviar(e){
    e.preventDefault()
    setMapear([...mapear, input])

  }

return(
  <>
  <form onSubmit={enviar}>
  <label>nome</label>
  <input
  value={input}
  placeholder="DIGITE ALGO"
  type="text"
  onChange={(e)=>setInput(e.target.value)}
  >
  </input>
  <button type="submit">
    enviar
  </button>
  </form>
    <div>
      {mapear.map(tarefa=>(
        <ul>
          <li key={tarefa}> {tarefa}</li>
        </ul>
      ))}
    </div>

  </>)

    

}