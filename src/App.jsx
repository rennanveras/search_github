import { useState } from "react";
import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";
import Footer from "./components/Footer";

function App() {
  const [github, setGithub] = useState('');
  const [nickBar , setNickBar] = useState('');

  function searchForUser() {
    if(nickBar && nickBar.length > 0) {
      setGithub(nickBar)
    }else {
      alert('Digite um usuário válido')
    }
  }

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      searchForUser();
    }
  }
  return (
    <>
      <header className="searchBar ">
        <h1 className="title">Procure o seu github</h1>
        <div>
          <input
            type="text"
            placeholder="Usuario do seu github"
            onChange={e => setNickBar(e.target.value)}
            onKeyPress={e => handleEnterPress(e)}
          />
          <button onClick={() => searchForUser()}>Buscar</button>
        </div>
      </header>
      <div className="content">
        <main>
          <Perfil github={github} />
          <ReposList/>
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default App;
