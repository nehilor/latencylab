import React from 'react'

const App: React.FC = () => {
  return (
    <div style={{
      padding: '20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      backgroundColor: '#282c34',
      color: 'white',
      minHeight: '100vh',
      margin: 0,
    }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{
          color: '#61dafb',
          marginBottom: '10px',
          fontSize: '2.5rem',
          fontWeight: 'bold',
        }}>
          LatencyLab
        </h1>
        <p style={{
          fontSize: '1.2rem',
          marginBottom: '0',
          opacity: 0.9,
        }}>
          Network Latency Testing and Monitoring
        </p>
      </header>

      <main style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{
          backgroundColor: '#1e1e1e',
          padding: '30px',
          borderRadius: '12px',
          border: '1px solid #61dafb',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}>
          <h2 style={{
            color: '#61dafb',
            marginBottom: '20px',
            fontSize: '1.5rem',
          }}>
            Welcome to LatencyLab
          </h2>
          <p style={{
            marginBottom: '15px',
            lineHeight: '1.6',
          }}>
            Your comprehensive network latency monitoring and testing solution.
          </p>
          <div style={{
            backgroundColor: '#2d2d2d',
            padding: '15px',
            borderRadius: '8px',
            marginTop: '20px',
          }}>
            <p style={{
              color: '#888',
              margin: '0',
              fontSize: '0.9rem',
            }}>
              <strong>Backend API:</strong> <code>http://127.0.0.1:8787</code>
            </p>
            <p style={{
              color: '#888',
              margin: '5px 0 0 0',
              fontSize: '0.9rem',
            }}>
              <strong>Status:</strong> <span style={{ color: '#4caf50' }}>●</span> Ready
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
