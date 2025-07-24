import { useState } from "react";


export default function Home (){
  const[input, setInput] = useState("")
  const[tarefas, setTarefas]=useState([
    "Pagar a conta de Luz",
    "Estudar Javascript"
  ])


  function handleSubmit(e){
    e.preventDefault()
    setTarefas([...tarefas, input])
    

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