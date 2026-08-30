import logoOverwatch from '../assets/favicon.png';

export function Header() {
  return (
    <header >
        <div className="nav-header">
            <div className="logo-container">
                <img src={logoOverwatch} alt="Overwatch Logo" className="header-logo-icon"/>
            <div className="logo">OVERWATCH</div>
            </div>
           <a 
           href="https://overwatch.blizzard.com/pt-br/" 
           target="_blank" rel="noopener noreferrer" 
           className="play-btn"
           >
            Jogar Agora
            </a>
        </div>
    <section className="hero-banner">
        <h1>Heróis de <span>Overwatch</span></h1>
        <p>
          Em um mundo devastado pelo conflito, heróis surgem. 
          Escolha o seu personagem e lidere a sua equipe rumo à vitória!
        </p>
      </section>
    </header>
  );
}