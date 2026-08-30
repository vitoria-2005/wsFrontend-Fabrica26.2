export function RoleFilter({ filtroRole, setFiltroRole }) {
  return (
    <div className="filter-container">
      <button 
        className={`filter-btn ${filtroRole === 'todos' ? 'active' : ''}`}
        onClick={() => setFiltroRole('todos')}
      >
        Todos
      </button>

      <button 
        className={`filter-btn ${filtroRole === 'tank' ? 'active' : ''}`}
        onClick={() => setFiltroRole('tank')}
      >
        Tanque
      </button>

      <button 
        className={`filter-btn ${filtroRole === 'damage' ? 'active' : ''}`}
        onClick={() => setFiltroRole('damage')}
      >
        Dano
      </button>

      <button 
        className={`filter-btn ${filtroRole === 'support' ? 'active' : ''}`}
        onClick={() => setFiltroRole('support')}
      >
        Suporte
      </button>
    </div>
  );
}