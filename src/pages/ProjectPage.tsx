import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeftIcon } from 'lucide-react'
import { projects, techIcons } from '../data/projects'
import { Tooltip, TooltipTrigger, TooltipContent } from '../components/tooltip'
import { Dialog, DialogContent } from '../components/dialog'

export default function ProjectPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const [lightbox, setLightbox] = useState<string | null>(null)
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    navigate('/')
    return null
  }

  return (
    <div className="min-h-screen bg-[#111110] font-sans">
      <div className="max-w-3xl mx-auto px-8 py-12">

        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-[#6b6b69] hover:text-white transition-colors duration-150 mb-8 text-sm"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Retour
        </button>

        {/* Galerie */}
        <div className="overflow-x-auto mb-6 pb-2 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#3a3a38] [&::-webkit-scrollbar-track]:bg-transparent">
          <div className="flex gap-2 mx-auto w-fit">
            {project.images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${project.title} ${i + 1}`}
                onClick={() => setLightbox(src)}
                className="h-80 w-auto flex-shrink-0 rounded-lg object-cover cursor-zoom-in"
              />
            ))}
          </div>
        </div>

        <h1 className="text-white text-3xl font-semibold mb-2">{project.title}</h1>
        <p className="text-[#6b6b69] text-base leading-relaxed mb-8">{project.description}</p>

        <hr className="border-[#222220] mb-8" />

        <div className="flex flex-col gap-8">
          {project.sections.map((section, i) => (
            <div key={i} className="flex flex-col gap-2">
              <h2 className="text-white text-xl font-medium">{section.title}</h2>
              <p className="text-[#6b6b69] text-base leading-relaxed">{section.description}</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {section.techs.map((tech) => {
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
          ))}
        </div>

      </div>

      {/* Lightbox */}
      <Dialog open={!!lightbox} onOpenChange={(v) => !v && setLightbox(null)}>
        <DialogContent showCloseButton={false} className="max-w-[95vw] w-fit p-2 bg-transparent border-0 shadow-none ring-0 flex items-center justify-center">
          {lightbox && (
            <img
              src={lightbox}
              alt="preview"
              className="max-h-[50vw] max-w-[50vw] rounded-md object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
