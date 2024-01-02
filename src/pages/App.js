import { useState } from 'react';
import gitLogo from '../assets/github.png'; 
import ItemList from '../components/ItemList';
import Input from '../components/input';



import {Container} from './style';
import Button from '../components/button';
import { api } from './services/api';



function App() {

  const [currentRepo, setCurrentRepo] = useState('')
  const [repo, setRepo] = useState([]);

  const handleSearchRepo = async () =>{
    try {
      const {data} = await api.get(`repos/${currentRepo}`)
   
      if (data.id) {
        const isExist = repo.find(repo => repo.id === data.id);
   
        if (!isExist) {
          setRepo(prev => [...prev, data]);
          setCurrentRepo('');
          return;
        }
      }
      alert("Repositório não encontrado!");
    } catch (error) {
      console.error("Erro ao buscar o repositório:", error);
      alert("Erro ao buscar o repositório. Tente novamente.");
    }

    
  }
  const handleRemoveRepo = (id) => {
   const newRepos = repo.filter((repo) => repo.id !==id);
   setRepo(newRepos);
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="Logo" className='img-logo'/>
      <Input valeu={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}>Search</Button>
      <div className='repository'>
      <h1 className='title-repository'>Repositórios</h1>
      {repo.map(repo=><ItemList repo={repo} handleRemoveRepo={handleRemoveRepo}/>)}
      </div>
    </Container>
  );
}

export default App;
