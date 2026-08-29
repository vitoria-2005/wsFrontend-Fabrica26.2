import { useEffect, useState } from 'react';
import { chamarApi } from './services/api';

function App() {
  const [herois, setHerois] = useState([]);

  useEffect(() => {
    async function carregarHerois() {
      const dados = await chamarApi();
      if (dados) {
        setHerois(dados);
      }
    }
    carregarHerois();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Overwatch Heroes</h1>
      <p>Lista carregada dinamicamente da API:</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', marginTop: '20px' }}>
        {herois.map((heroi) => (
          <div 
            key={heroi.key} 
            style={{ 
              border: '1px solid #ddd', 
              borderRadius: '8px', 
              padding: '16px', 
              textAlign: 'center',
              backgroundColor: '#1e1e1e',
              color: '#fff'
            }}
          >
            {heroi.portrait && (
              <img 
                src={heroi.portrait} 
                alt={heroi.name} 
                style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} 
              />
            )}
            <h3>{heroi.name}</h3>
            <p style={{ color: '#aaa', textTransform: 'capitalize' }}>
              <strong>Função:</strong> {heroi.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;