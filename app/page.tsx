import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main className="app-container">
      {/* Módulos del Curso de Inglés */}
      <div className="sidebar sidebar-left">
        <div className="sidebar-header">
          <h2>Modules</h2>
        </div>
        <div className="sidebar-content">
          <div className="lesson-card active">
            <div className="lesson-number">01</div>
            <div className="lesson-info">
              <h3>Greetings & Introductions</h3>
              <p>Basic conversations</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '100%'}}></div>
              </div>
            </div>
          </div>
          <div className="lesson-card">
            <div className="lesson-number">02</div>
            <div className="lesson-info">
              <h3>Family & Friends</h3>
              <p>Describing people</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '75%'}}></div>
              </div>
            </div>
          </div>
          <div className="lesson-card">
            <div className="lesson-number">03</div>
            <div className="lesson-info">
              <h3>Daily Routines</h3>
              <p>Present simple tense</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '45%'}}></div>
              </div>
            </div>
          </div>
          <div className="lesson-card">
            <div className="lesson-number">04</div>
            <div className="lesson-info">
              <h3>Food & Dining</h3>
              <p>Restaurant vocabulary</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '20%'}}></div>
              </div>
            </div>
          </div>
          <div className="lesson-card locked">
            <div className="lesson-number">05</div>
            <div className="lesson-info">
              <h3>Travel & Directions</h3>
              <p>Getting around</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '0%'}}></div>
              </div>
            </div>
          </div>
          <div className="lesson-card locked">
            <div className="lesson-number">06</div>
            <div className="lesson-info">
              <h3>Work & Business</h3>
              <p>Professional English</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '0%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido Central - Spline */}
      <div className="main-content">
        <Spline
          scene="https://prod.spline.design/jpptJsbqA5KYoI05/scene.splinecode" 
        />
      </div>

      {/* Rectángulo Derecho Neumórfico */}
      <div className="sidebar sidebar-right">
        <div className="sidebar-content">
          <div className="neomorphic-card">
            <h3>Chat</h3>
            <p>Conversaciones</p>
          </div>
          <div className="neomorphic-card">
            <h3>Historial</h3>
            <p>Actividad</p>
          </div>
        </div>
      </div>
    </main>
  );
}
