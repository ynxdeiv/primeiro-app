
import { useState } from 'react';
function App(){
  const[aluno, setAluno ]=useState('Deivid Costa')

  function handleChangeName(name){
    setAluno(name)
  }
  return(

  <>
  <div>
    <h1>Componente App</h1>
    <h2>Olá: {aluno} </h2>
    <button onClick={() => handleChangeName('Lucas Oliveira')}>
      mudar nome
    </button>
    <br/>
  </div>
  </>    
  );

}

export default App;
