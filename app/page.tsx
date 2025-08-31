'use client';

import { useState } from 'react';
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true);
  const [modulesDropdownOpen, setModulesDropdownOpen] = useState(false);
  return (
    <main className="app-container">
      {/* Botones para reabrir sidebars */}
      {!leftSidebarOpen && (
        <button 
          className="reopen-sidebar-btn reopen-left"
          onClick={() => setLeftSidebarOpen(true)}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M3 12h18m-9-9l9 9-9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
      
      {!rightSidebarOpen && (
        <button 
          className="reopen-sidebar-btn reopen-right"
          onClick={() => setRightSidebarOpen(true)}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M21 12H3m18-9l-9 9 9 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
      {/* Módulos del Curso de Inglés */}
      {leftSidebarOpen && (
        <div className="sidebar sidebar-left">
          <div className="sidebar-frame">
            <div className="sidebar-header-frame">
              <div 
                className="dropdown-trigger"
                onClick={() => setModulesDropdownOpen(!modulesDropdownOpen)}
              >
                <h2>Modules</h2>
                <div className="dropdown-arrow">
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none"
                    className={modulesDropdownOpen ? 'rotated' : ''}
                  >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <button 
                className="close-sidebar-btn"
                onClick={() => setLeftSidebarOpen(false)}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          
          {modulesDropdownOpen && (
            <div className="sidebar-frame">
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
          )}
        </div>
      )}

      {/* Contenido Central - Spline */}
      <div className={`main-content ${!leftSidebarOpen ? 'expand-left' : ''} ${!rightSidebarOpen ? 'expand-right' : ''}`}>
        <Spline
          scene="https://prod.spline.design/jpptJsbqA5KYoI05/scene.splinecode" 
        />
      </div>

      {/* Sidebar Derecho - Search & Sources */}
      {rightSidebarOpen && (
        <div className="sidebar sidebar-right">
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
              <button 
                className="close-sidebar-btn close-right"
                onClick={() => setRightSidebarOpen(false)}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
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
      )}
    </main>
  );
}
