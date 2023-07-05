import './App.css'
import Dashboard from './pages/Dashboard'
import {BrowserRouter as Router} from 'react-router-dom'
export default function App() {
  return (
    <Router>
    <main>
      <Dashboard/>
    </main>
      </Router>
  )
}

