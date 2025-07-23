
import { useState } from 'react';
function App(){
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState(0);

  const [user, setUser] = useState({});
  const [cont, setCount]= useState(0);

  function handleRegister(e){
    e.preventDefault()
    setUser({
      nome: nome,
      email:email,
      idade: idade
    })
    setCount(cont+1)
  }
  return(

  <>
  <div>
    <form onSubmit={handleRegister}>
      <h1>Cadastrando usuario</h1>

      <label>Nome: </label>
      <input 
      placeholder='digite seu nome'
      value={nome}
      onChange = {(e)=> setNome(e.target.value)}

      
      />
      <br/>
            <label>Email: </label>
      <input placeholder='ddigite seu email'
      value={email}
      onChange = {(e)=> setEmail(e.target.value)}

      />
      <br/>
            <label>Idade: </label>
      <input placeholder='Digite sua idade'
            value={idade}
      onChange = {(e)=> setIdade(e.target.value)}/>
      <br/>
      <button type='submit'>registrar</button>
    </form>

    <br/>
        <br/>
        <span>Bem vindo: {user.nome} </span>        <br/>
        <span>Idade: </span>  {user.idade}      <br/>

        <span>Email: </span>   {user.email}     <br/>
                <span>Contador </span>   {cont}     <br/>

  </div>
  </>    
  );

}

export default App;
