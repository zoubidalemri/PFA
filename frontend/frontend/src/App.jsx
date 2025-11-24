import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Barre du haut */}
      <header className="navbar">
        <div className="logo">Career Platform IA</div>
        <nav className="nav-links">
          <a href="#features">Fonctionnalités</a>
          <a href="#roles">Pour qui ?</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="btn-outline">Se connecter</button>
      </header>

      {/* Section principale */}
      <main className="hero">
        <div className="hero-text">
          <h1>
            La plateforme IA qui <span>connecte</span> les talents aux
            opportunités.
          </h1>
          <p>
            Centralisez les profils, les offres et laissez l’IA vous aider à
            trouver le meilleur match entre étudiants, diplômés et recruteurs.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Je suis étudiant(e)</button>
            <button className="btn-secondary">Je suis recruteur</button>
          </div>
          <p className="hero-note">
            Version PFA – Prototype en cours de développement.
          </p>
        </div>

        <div className="hero-card">
          <h2>Statut du projet</h2>
          <ul>
            <li>✅ Backend Spring Boot installé</li>
            <li>✅ Base de données PostgreSQL configurée</li>
            <li>✅ Frontend React/Vite prêt</li>
            <li>🚧 Matching IA en cours de conception</li>
          </ul>
        </div>
      </main>

      {/* Section fonctionnalités */}
      <section id="features" className="section features">
        <h2>Fonctionnalités principales</h2>
        <div className="cards">
          <div className="card">
            <h3>Profils intelligents</h3>
            <p>
              Les étudiants créent un profil complet : compétences, intérêts,
              expériences, CV et projets.
            </p>
          </div>
          <div className="card">
            <h3>Matching IA</h3>
            <p>
              Un moteur de recommandation suggère les offres les plus adaptées
              à chaque profil.
            </p>
          </div>
          <div className="card">
            <h3>Espace recruteur</h3>
            <p>
              Les entreprises publient des offres, filtrent les candidats et
              visualisent les meilleurs matchs.
            </p>
          </div>
        </div>
      </section>

      {/* Section rôles */}
      <section id="roles" className="section roles">
        <h2>Une plateforme pour tous les acteurs</h2>
        <div className="cards">
          <div className="card role-card">
            <h3>Étudiants / Diplômés</h3>
            <p>
              Découvrez des opportunités alignées avec votre profil et vos
              objectifs professionnels.
            </p>
          </div>
          <div className="card role-card">
            <h3>Recruteurs</h3>
            <p>
              Gagnez du temps avec des listes courtes de candidats déjà
              filtrés par l’IA.
            </p>
          </div>
          <div className="card role-card">
            <h3>Écoles / Universités</h3>
            <p>
              Suivez les placements, les offres et les besoins du marché en
              temps réel.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <p>Projet PFA – Career Platform IA</p>
        <p>Backend : Spring Boot · Frontend : React/Vite · DB : PostgreSQL</p>
      </footer>
    </div>
  );
}

export default App;
