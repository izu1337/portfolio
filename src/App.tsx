import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:slug" element={<ProjectPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
