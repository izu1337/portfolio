import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'sonner'
import { Button } from './button'
import { Field, FieldGroup, FieldLabel } from './field'
import { Input } from './input'
import { Textarea } from './textarea'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(formRef.current!)
    setSending(true)
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name:    data.get('name'),
        title:   data.get('title'),
        message: data.get('message'),
        time:    new Date().toLocaleString('fr-FR'),
      }, { publicKey: PUBLIC_KEY })
      toast.success('Email envoyé avec succès !')
      formRef.current!.reset()
    } catch {
      toast.error('Une erreur est survenue, veuillez réessayer.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contacts" className="mt-8 mb-12">
      <hr className="border-[#222220] mb-6" />
      <h2 className="text-white text-xl font-medium mb-4">Contactez moi !</h2>
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="email-from">Votre email</FieldLabel>
            <Input id="email-from" name="title" type="email" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="email-name">Votre nom</FieldLabel>
            <Input id="email-name" name="name" type="text" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="email-message">Message</FieldLabel>
            <Textarea id="email-message" name="message" rows={4} required />
          </Field>
        </FieldGroup>
        <div>
          <Button type="submit" size="lg" disabled={sending}>
            {sending ? 'Envoi en cours...' : 'Envoyer'}
          </Button>
        </div>
      </form>
    </section>
  )
}
