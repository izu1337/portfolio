import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import cvPdf from '../assets/CV.pdf'
import codalysIcon from '../assets/codalys.ico'
import nflIcon from '../assets/nfl-icon.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Tooltip, TooltipTrigger, TooltipContent } from '../components/tooltip'
import { ContactSection } from '../components/ContactSection'
import { Toaster } from 'sonner'
import { projects, techIcons } from '../data/projects'

function Typewriter({ texts, period = 2000 }: { texts: string[]; period?: number }) {
  const [txt, setTxt] = useState('')
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const fullTxt = texts[loopNum % texts.length]
    let delta = 200 - Math.random() * 100
    if (isDeleting) delta /= 2
    if (!isDeleting && txt === fullTxt) delta = period
    if (isDeleting && txt === '') delta = 500

    const timeout = setTimeout(() => {
      if (!isDeleting && txt === fullTxt) {
        setIsDeleting(true)
      } else if (isDeleting && txt === '') {
        setIsDeleting(false)
        setLoopNum(n => n + 1)
      } else if (isDeleting) {
        setTxt(fullTxt.substring(0, txt.length - 1))
      } else {
        setTxt(fullTxt.substring(0, txt.length + 1))
      }
    }, delta)

    return () => clearTimeout(timeout)
  }, [txt, loopNum, isDeleting, texts, period])

  useEffect(() => {
    if (txt) document.title = txt
  }, [txt])

  return (
    <span>
      {txt}
      <span className="inline-block align-middle h-[1em] w-0 border-r-[2px] border-white ml-[2px] animate-[cursor-blink_1s_step-end_infinite]" />
    </span>
  )
}

const experiences = [
  {
    icon: nflIcon,
    role: 'Assistance informatique',
    type: 'Stage',
    company: 'NFL Bureautique',
    from: 'Mai',
    to: 'Juin 2023',
    url: 'https://sas-nfl.fr',
  },
  {
    icon: codalysIcon,
    role: 'Développeur full-stack',
    type: 'Alternant',
    company: 'Codalys',
    from: 'Janvier 2025',
    to: 'Mai 2026',
    url: 'https://codalys.fr',
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#111110] font-sans">
      <div className="max-w-3xl mx-auto px-8 py-12">

        {/* About */}
        <section id="about" className="mb-6">
          <h1 className="text-white text-3xl font-semibold mb-4">
            <Typewriter texts={['Mahau Cribier,', 'Développeur full-stack,', 'Etudiant à Epitech Lille,']} />
          </h1>
          <p className="text-[#6b6b69] text-base leading-relaxed mb-3">
            Développeur de 21 ans passionné par le code. Vous retrouverez certains
            de mes projets {' '}
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="text-white hover:underline transition-colors duration-150"
            >
              ici
            </a>
            .
          </p>
          <p className="text-[#6b6b69] text-base leading-relaxed">
            Etudiant à Epitech Lille, je suis à la recherche d'un poste en tant que développeur full-stack
            où je pourrais contribuer activement au développement de projets de qualité, tout
            en mettant à profit mes compétences et mon expérience. N'hésitez pas à me{' '}
            <a
              href="#contacts"
              onClick={(e) => { e.preventDefault(); document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="text-white hover:underline transition-colors duration-150"
            >
              contacter
            </a>
            .
          </p>
        </section>
        {/* Separator */}
        <hr className="border-[#222220] mb-4" />

        {/* Contact links */}
        <div className="flex items-center gap-5 mb-4">
          <a href={cvPdf} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
            Mon CV
          </a>
          <a href="https://github.com/izu1337" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-white hover:underline">
            <FaGithub /> Github
          </a>
          <a href="https://www.linkedin.com/in/mahau-c-53abba250/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-white hover:underline">
            <FaLinkedin /> LinkedIn
          </a>
        </div>

        {/* Separator */}
        <hr className="border-[#222220] mb-8" />

        {/* Experience */}
        <section id="experience" className="mb-4">
          <h2 className="text-white text-xl font-medium mb-4">Expérience</h2>
          <div className="flex flex-col gap-3">
            {experiences.map((exp, i) => (
              <a
                key={i}
                href={exp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img src={exp.icon} alt={exp.company} className="w-7 h-7 rounded-md flex-shrink-0 object-contain" />
                  <span className="text-[#6b6b69] text-base truncate group-hover:text-white transition-colors duration-150">
                    {exp.role}, {exp.type} —{' '}
                    <span className="text-white">{exp.company}</span>
                  </span>
                </div>
                <span className="text-[#6b6b69] text-base whitespace-nowrap flex-shrink-0 group-hover:text-white transition-colors duration-150">
                  {exp.from} - {exp.to}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Separator */}
        <hr className="border-[#222220] mb-8" />

        {/* Projects */}
        <section id="projects">
          <h2 className="text-white text-xl font-medium mb-4">Projects</h2>
          <div className="grid grid-cols-2 gap-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                to={`/${project.slug}`}
                className="rounded-xl overflow-hidden bg-[#191918] hover:bg-[#1f1f1e] transition-colors duration-150 flex flex-col"
              >
                {project.image
                  ? <img src={project.image} alt={project.title} className="h-[120px] w-full object-cover" />
                  : <div className="h-[120px] w-full bg-[#222220]" />
                }
                <div className="p-3 flex flex-col flex-1">
                  <h3 className="text-white text-lg font-medium mb-1 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-[#555553] text-md leading-relaxed mb-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-2">
                    {project.techs.map((tech) => {
                      const icon = techIcons[tech]
                      return icon ? (
                        <Tooltip key={tech}>
                          <TooltipTrigger asChild>
                            <img src={icon} alt={tech} className="w-5 h-5 object-contain" />
                          </TooltipTrigger>
                          <TooltipContent side="bottom">{tech}</TooltipContent>
                        </Tooltip>
                      ) : (
                        <span key={tech} className="text-xs text-[#555553]">{tech}</span>
                      )
                    })}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <ContactSection />

      </div>
      <Toaster position="bottom-right" />
    </div>
  )
}
