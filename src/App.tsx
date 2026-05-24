import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Classrooms from './pages/Classrooms'
import Students from './pages/Students'
import Staff from './pages/Staff'
import Invoicing from './pages/Invoicing'
import './App.css'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/classrooms" element={<Classrooms />} />
        <Route path="/students" element={<Students />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/invoicing" element={<Invoicing />} />
      </Routes>
    </Layout>
  )
}

export default App
