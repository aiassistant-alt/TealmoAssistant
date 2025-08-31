import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main className="app-container">
      {/* Rectángulo Izquierdo Neumórfico */}
      <div className="sidebar sidebar-left">
        <div className="sidebar-content">
          <div className="neomorphic-card">
            <h3>Assistant</h3>
            <p>Herramientas</p>
          </div>
          <div className="neomorphic-card">
            <h3>Configuración</h3>
            <p>Ajustes</p>
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
