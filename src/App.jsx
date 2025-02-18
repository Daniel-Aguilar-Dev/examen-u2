import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './componenst/user'

function App() {
  const [nombreC, setNombreC] = useState("");
  const [emailC, setEmailC] = useState("");
  const [passC, setPassC] = useState("");
  
  const [logee, setLogee] = useState(false);

  const [mensaje, setMensaje] = useState("");
  const nombre = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const handleSubmit = (event) => {
    event.preventDefault();

    const passValidation = password.current.value
    const totalLetras = passValidation.length
    if(totalLetras<=6){
      setMensaje("Contraseña debe ser mayor a 6 caracteres")
    }else if(nombre.current.value != "" && nombre.current.value != null){
      setLogee(true);
      setNombreC(nombre.current.value);
      setEmailC(email.current.value);
      setPassC(password.current.value)
    }else{
      setMensaje("Nombre no puede estar vacio")
    }
  }

  const elementFalse = (
    <div>
      <form onSubmit={handleSubmit} action={"#"}>
        <input type="text"  ref={nombre} placeholder='Ingresa tu nombre' /> <br />
        <input type="email" ref={email}  placeholder='Ingresa tu email'/> <br />
        <input type="password" ref={password} placeholder='Ingresa tu contraseña'/> <br />
        <input type="submit" value="Registrar" />
      </form>
      <p>{mensaje}</p>
    </div>
    
  );

  const elemenTrue =(
    <>
    {console.log(nombreC)}
          <User nombre={nombreC} email={emailC} password={passC} />
    </>
  );

  

  return (
    <>
      <div>
        {logee ? elemenTrue : elementFalse}
      </div>
    </>
  )
}

export default App
