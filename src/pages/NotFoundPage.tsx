import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#111110] font-sans flex items-center justify-center">
      <div className="text-center">
        <p className="text-[#6b6b69] text-8xl font-semibold mb-4">404</p>
        <p className="text-[#6b6b69] text-base mb-6">Cette page n'existe pas ou a été déplacée.</p>
        <Link
          to="/"
          className="text-white underline decoration-dotted underline-offset-4 hover:text-[#6b6b69] transition-colors duration-150"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}
