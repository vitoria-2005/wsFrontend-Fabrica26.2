import { useEffect, useState } from 'react';
import { chamarApi } from './services/api';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroCard } from './components/HeroCard';
import { RoleFilter } from './components/RoleFilter';

function App() {
  const [herois, setHerois] = useState([]);

  const [filtroRole, setFiltroRole] = useState('todos');

  useEffect(() => {
    async function carregarHerois() {
      const dados = await chamarApi(filtroRole);
      if (dados) setHerois(dados);
    }
    carregarHerois();
  }, [filtroRole]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <main className="container" style={{ flex: 1 }}>
        
        <RoleFilter filtroRole={filtroRole} setFiltroRole={setFiltroRole} />

        <p className="hero-count-info">
          Exibindo <span>{herois.length}</span> herói(s)
        </p>

        <div className="heroes-grid">
          {herois.map((heroi) => (
            <HeroCard key={heroi.key} heroi={heroi} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;