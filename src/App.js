import { useState, useEffect } from "react";


export default function Home (){
  const[input, setInput] = useState("")
  const[tarefas, setTarefas]=useState([
  ])


  useEffect(()=>{
    const tarefaStorage = localStorage.getItem('@tarefa')

    if(tarefaStorage){
      setTarefas(JSON.parse(tarefaStorage))
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('@tarefa', JSON.stringify(tarefas))

  }, 
  [tarefas])

  function handleSubmit(e){
    e.preventDefault()
    setTarefas([...tarefas, input]);
    setInput("");
    

  }
  return(
  <>
  <h1>Cadastro de Usuário</h1>
  <form onSubmit={handleSubmit}>
    
    <div>
      <label>Nome da tarefa:</label><br/>
      <input
        type="text"
    
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite uma tarefa"
        required
      />
    </div>
    <ul>

        {tarefas.map(tarefa =>(
        <li key={tarefa}>{tarefa}</li>

        ))}

    </ul>
    
    <button type="submit">Registrar tarefa</button>
  </form>
  

  </>)

}