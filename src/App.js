import { useState } from "react";


export default function Home (){
  const[email, setEmail]=useState('')
  const[nome, setNome]=useState('')
  const[idade,setIdade] = useState(0)
  const[user,setUser]= useState({})

  function handleSubmit(e){
    e.preventDefault()
    setUser({
      email:email,
      nome:nome,
      idade:idade,
    })
  }
  return(
  <>
  <h1>Cadastro de Usuário</h1>
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu email"
        required
      />
    </div>
    
    <div>
      <label htmlFor="nome">Nome:</label>
      <input
        type="text"
        id="nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome"
        required
      />
    </div>
    
    <div>
      <label htmlFor="idade">Idade:</label>
      <input
        type="number"
        id="idade"
        value={idade}
        onChange={(e) => setIdade(parseInt(e.target.value) || 0)}
        placeholder="Digite sua idade"
        min="18"
        required
      />
    </div>
    
    <button type="submit">Cadastrar</button>
  </form>
  
  {user.nome && (
    <div style={{marginTop: '20px', padding: '10px', border: '1px solid #ccc'}}>
      <h3>Usuário Cadastrado:</h3>
      <p><strong>Nome:</strong> {user.nome}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Idade:</strong> {user.idade} anos</p>
    </div>
  )}
  </>)

}