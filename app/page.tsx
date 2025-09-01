'use client';

import Spline from '@splinetool/react-spline/next';
import { useEffect, useState, useRef, useCallback } from 'react';

export default function Home() {
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(true);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true);
  const [isModulesOpen, setIsModulesOpen] = useState(true);
  const [isMicActive, setIsMicActive] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);
  const splineRef = useRef<any>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // Función para iniciar el micrófono y análisis de audio
  const startMicrophone = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;
      
      // Crear contexto de audio para análisis
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      analyserRef.current = audioContextRef.current.createAnalyser();
      const source = audioContextRef.current.createMediaStreamSource(stream);
      source.connect(analyserRef.current);
      analyserRef.current.fftSize = 256;
      
      setIsMicActive(true);
      
      // Analizar audio y animar Spline
      const analyzeAudio = () => {
        if (analyserRef.current) {
          const dataArray = new Uint8Array(analyserRef.current.frequencyBinCount);
          analyserRef.current.getByteFrequencyData(dataArray);
          
          // Calcular nivel promedio de audio
          const average = dataArray.reduce((a, b) => a + b) / dataArray.length;
          const normalizedLevel = average / 255;
          setAudioLevel(normalizedLevel);
          
          // Animar el objeto Spline basado en el nivel de audio
          if (splineRef.current && normalizedLevel > 0.1) {
            try {
              // Intentar animar rotación o escala basado en el audio
              const scale = 1 + normalizedLevel * 0.3;
              const rotation = normalizedLevel * Math.PI * 2;
              
              // Estos métodos dependen de la API de Spline
              // Puedes ajustar según tu escena específica
              if (splineRef.current.setVariable) {
                splineRef.current.setVariable('audioLevel', normalizedLevel);
              }
            } catch (e) {
              // Si la API de Spline no soporta estos métodos, ignorar
            }
          }
        }
        
        animationFrameRef.current = requestAnimationFrame(analyzeAudio);
      };
      
      analyzeAudio();
    } catch (error) {
      console.error('Error al acceder al micrófono:', error);
      alert('Por favor, permite el acceso al micrófono para usar el asistente de voz.');
    }
  }, []);

  // Función para detener el micrófono
  const stopMicrophone = useCallback(() => {
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
      mediaStreamRef.current = null;
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    setIsMicActive(false);
    setAudioLevel(0);
  }, []);

  // Toggle del micrófono
  const toggleMicrophone = useCallback(() => {
    if (isMicActive) {
      stopMicrophone();
    } else {
      startMicrophone();
    }
  }, [isMicActive, startMicrophone, stopMicrophone]);

  useEffect(() => {
    // Función para ocultar el badge de Spline
    const hideSplineBadge = () => {
      // Buscar y ocultar elementos con texto "Built with Spline"
      const elements = document.querySelectorAll('a[href*="spline"], div[style*="bottom"], div[style*="z-index"]');
      elements.forEach(el => {
        const element = el as HTMLElement;
        if (element.textContent?.includes('Built with Spline') || 
            element.textContent?.includes('Spline') ||
            element.getAttribute('href')?.includes('spline.design')) {
          element.style.display = 'none';
          element.style.visibility = 'hidden';
          element.style.opacity = '0';
          element.style.pointerEvents = 'none';
          // También ocultar el elemento padre si existe
          if (element.parentElement) {
            element.parentElement.style.display = 'none';
          }
        }
      });
    };

    // Ejecutar inmediatamente
    hideSplineBadge();
    
    // Ejecutar periódicamente para capturar elementos cargados dinámicamente
    const interval = setInterval(hideSplineBadge, 100);
    
    // Limpiar después de 5 segundos (cuando ya debería estar todo cargado)
    setTimeout(() => clearInterval(interval), 5000);
    
    return () => {
      clearInterval(interval);
      stopMicrophone();
    };
  }, [stopMicrophone]);

  return (
    <main className="app-container">
      {/* Módulos del Curso de Inglés */}
      <div className={`sidebar sidebar-left ${!isLeftSidebarOpen ? 'sidebar-closed' : ''}`}>
        {/* Botón de cerrar neumórfico */}
        <button 
          className="neomorphic-close-btn"
          onClick={() => setIsLeftSidebarOpen(!isLeftSidebarOpen)}
          aria-label={isLeftSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path 
              d={isLeftSidebarOpen ? "M18 6L6 18M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
        
        {/* Efecto de humo gradiente */}
        <div className="sidebar-smoke-effect"></div>
        <div className="sidebar-frame">
          <div className="sidebar-header-frame dropdown-header" onClick={() => setIsModulesOpen(!isModulesOpen)}>
            <h2>Modules</h2>
            <svg 
              className={`dropdown-arrow ${isModulesOpen ? 'open' : ''}`}
              width="12" 
              height="12" 
              viewBox="0 0 24 24" 
              fill="none"
            >
              <path 
                d="M6 9l6 6 6-6" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        
        <div className={`sidebar-frame modules-container ${!isModulesOpen ? 'collapsed' : ''}`}>
          <div className="sidebar-content">
            <div className="lesson-card active">
              <div className="lesson-number">01</div>
              <div className="lesson-info">
                <h3>Greetings & Introductions</h3>
                <p>Basic conversations</p>
              </div>
            </div>
            <div className="lesson-card">
              <div className="lesson-number">02</div>
              <div className="lesson-info">
                <h3>Family & Friends</h3>
                <p>Describing people</p>
              </div>
            </div>
            <div className="lesson-card">
              <div className="lesson-number">03</div>
              <div className="lesson-info">
                <h3>Daily Routines</h3>
                <p>Present simple tense</p>
              </div>
            </div>
            <div className="lesson-card">
              <div className="lesson-number">04</div>
              <div className="lesson-info">
                <h3>Food & Dining</h3>
                <p>Restaurant vocabulary</p>
              </div>
            </div>
            <div className="lesson-card locked">
              <div className="lesson-number">05</div>
              <div className="lesson-info">
                <h3>Travel & Directions</h3>
                <p>Getting around</p>
              </div>
            </div>
            <div className="lesson-card locked">
              <div className="lesson-number">06</div>
              <div className="lesson-info">
                <h3>Work & Business</h3>
                <p>Professional English</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido Central - Spline */}
      <div className="main-content">
        <div className="spline-container">
          <Spline
            scene="https://prod.spline.design/jpptJsbqA5KYoI05/scene.splinecode"
            onLoad={(spline) => {
              splineRef.current = spline;
              console.log('🎯 Spline loaded successfully');
            }}
            onError={(error) => {
              console.error('❌ Spline loading error:', error);
            }}
          />
          <div className="spline-fallback">
            <div className="loading-indicator">
              <div className="loading-spinner"></div>
              <p>Loading 3D Assistant...</p>
            </div>
          </div>
        </div>
        
        {/* Botón de micrófono flotante */}
        <button 
          className={`mic-button ${isMicActive ? 'active' : ''}`}
          onClick={toggleMicrophone}
          aria-label="Toggle microphone"
        >
          <div className="mic-pulse" style={{ transform: `scale(${1 + audioLevel * 0.5})` }}></div>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path 
              d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" 
              fill="currentColor"
            />
            <path 
              d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          {isMicActive && (
            <div className="audio-visualizer">
              <span style={{ height: `${audioLevel * 100}%` }}></span>
              <span style={{ height: `${audioLevel * 80}%` }}></span>
              <span style={{ height: `${audioLevel * 120}%` }}></span>
              <span style={{ height: `${audioLevel * 90}%` }}></span>
              <span style={{ height: `${audioLevel * 110}%` }}></span>
            </div>
          )}
        </button>
      </div>

      {/* Sidebar Derecho - Search & Sources */}
      <div className={`sidebar sidebar-right ${!isRightSidebarOpen ? 'sidebar-closed' : ''}`}>
        {/* Botón de cerrar neumórfico */}
        <button 
          className="neomorphic-close-btn right"
          onClick={() => setIsRightSidebarOpen(!isRightSidebarOpen)}
          aria-label={isRightSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path 
              d={isRightSidebarOpen ? "M18 6L6 18M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
        
        {/* Efecto de humo gradiente */}
        <div className="sidebar-smoke-effect"></div>
        <div className="sidebar-frame">
          <div className="search-frame">
            <input 
              type="text" 
              placeholder="Search lessons..." 
              className="neomorphic-search"
            />
            <div className="search-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="sidebar-frame">
          <div className="sources-header-frame">
            <h3>Available Sources</h3>
          </div>
          <div className="sources-content">
            <div className="source-item">
              <div className="source-icon">📚</div>
              <div className="source-info">
                <h4>Grammar Guide</h4>
                <p>Essential rules & examples</p>
              </div>
            </div>
            <div className="source-item">
              <div className="source-icon">🎧</div>
              <div className="source-info">
                <h4>Audio Library</h4>
                <p>Pronunciation & listening</p>
              </div>
            </div>
            <div className="source-item">
              <div className="source-icon">📝</div>
              <div className="source-info">
                <h4>Practice Tests</h4>
                <p>Interactive exercises</p>
              </div>
            </div>
            <div className="source-item">
              <div className="source-icon">💬</div>
              <div className="source-info">
                <h4>Conversation</h4>
                <p>Real-world scenarios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
