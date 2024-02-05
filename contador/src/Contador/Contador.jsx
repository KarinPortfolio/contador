import React,{ useState } from 'react'
import './Contador.css'

function Contador() {
  const [numero, setNumero] = useState(0)

  function Adicionar(){
    if (numero < 20) {
    setNumero(numero + 1)
  }
}

  const Subtrair = () =>{
    if(numero > 0){
    setNumero(numero -1)
  }
}

  const Limpar = () =>{
    setNumero(0)
  }

  return (
    <>
      <h1>{numero}</h1>
      <button onClick ={Adicionar}>+</button>
      <button onClick={Subtrair}>-</button>
      <button onClick={Limpar}>C</button>
    </>
  )
 }
export default Contador

