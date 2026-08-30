export function HeroCard({ heroi }) {
  return (
    <div className="hero-card"> 
      <div className="card-image-wrapper">
        <span className="role-badge">{heroi.role}</span>
        {heroi.portrait && (
          <img src={heroi.portrait} alt={heroi.name} className="hero-img" />
        )}
      </div>
      <div className="card-info">
        <h3 className="hero-name">{heroi.name}</h3>
      </div>
    </div>
  );
}