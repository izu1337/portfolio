import { Dialog, DialogContent, DialogTitle } from './dialog'
import { ScrollArea, ScrollBar } from './scroll-area'
import { Tooltip, TooltipTrigger, TooltipContent } from './tooltip'

export type ProjectSection = {
  title: string
  description: string
  techs: string[]
}

export type ProjectDetail = {
  title: string
  description: string
  image: string
  techs: string[]
  images: string[]
  sections: ProjectSection[]
}

type Props = {
  project: ProjectDetail | null
  open: boolean
  onClose: () => void
  techIcons: Record<string, string>
}

export function ProjectDialog({ project, open, onClose, techIcons }: Props) {
  if (!project) return null

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="sm:max-w-3xl gap-0 p-0 overflow-hidden">
        <ScrollArea className="max-h-[85vh]">

          {/* Galerie d'images */}
          <ScrollArea className="w-full" type="always">
            <div className="flex gap-2 p-4">
              {project.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${project.title} ${i + 1}`}
                  className="h-52 w-auto flex-shrink-0 rounded-lg object-cover"
                />
              ))}
            </div>
            <ScrollBar
              orientation="horizontal"
              className="[&>[data-slot=scroll-area-thumb]]:bg-[#3a3a38]"
            />
          </ScrollArea>

          {/* Contenu */}
          <div className="flex flex-col gap-5 px-6 pb-6 pt-2">
            <DialogTitle className="text-xl">{project.title}</DialogTitle>

            {project.sections.map((section, i) => (
              <div key={i} className="flex flex-col gap-2">
                <h4 className="text-white text-sm font-medium">{section.title}</h4>
                <p className="text-[#6b6b69] text-sm leading-relaxed">{section.description}</p>
                <div className="flex flex-wrap gap-2">
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

        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
