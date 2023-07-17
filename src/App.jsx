import { useState } from "react";
import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";

function App() {
  const [github, setGithub] = useState('')
  return (
    <>
      <header className="searchBar ">
          <h1>Procure o seu github</h1>
          <input type="text" placeholder="Usuario do seu github" onBlur={e => setGithub(e.target.value)} /> 
      </header>
      {github.length > 4 &&(
        <>
          <Perfil github={github} />
          <ReposList/>
        </>
      )}
    </>
  )
}

export default App
