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
    <section class="caixa_maior">
      <h1>{numero}</h1>
      <div class="caixa_funcionalidades">
      <button onClick ={Adicionar}>+</button>
      <button onClick={Subtrair}>-</button>
      <button onClick={Limpar}>C</button>
      </div>
      </section>
    </>
  )
 }
export default Contador

