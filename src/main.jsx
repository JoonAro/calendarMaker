import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './components/theme/ThemeContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider initialTheme="light">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
)
