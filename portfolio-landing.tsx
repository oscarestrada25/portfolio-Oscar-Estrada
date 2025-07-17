import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Linkedin, Github, Twitter, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PortfolioLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-slate-800">Oscar Estrada</div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">
                Sobre Mí
              </Link>
              <Link href="#portfolio" className="text-slate-600 hover:text-slate-900 transition-colors">
                Portafolio
              </Link>
              <Link href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">
                Contacto
              </Link>
              <Button className="bg-slate-900 hover:bg-slate-800">Descargar CV</Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">Hi, I'm Oscar Estrada</h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                and I have experience in various fields of technology. I'm eager to learn every day and have a lot of
                enthusiasm. I'd like to share some of the projects I've worked on previously.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800">
                  Ver Mis Proyectos
                </Button>
                <Button size="lg" variant="outline">
                  Contactar
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <Image
                    src="/placeholder.svg?height=320&width=320"
                    alt="Oscar Estrada - Profile Photo"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-slate-900 text-white p-4 rounded-full">
                  <Badge variant="secondary" className="bg-green-500 text-white">
                    Disponible
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Mi Portafolio</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Explora algunos de mis proyectos más destacados en diferentes áreas de la tecnología
            </p>
          </div>

          <div className="grid gap-12">
            {/* Modelado 2D y 3D */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-blue-100 text-blue-800">Modelado 2D y 3D</Badge>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Diseño y Modelado Digital</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Creación de modelos 2D y 3D para diferentes aplicaciones, desde personajes hasta objetos técnicos.
                  Experiencia en software especializado y técnicas avanzadas de renderizado.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Proyecto
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Rig modeling example"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                  </CardContent>
                </Card>
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src="/placeholder.svg?height=200&width=300"
                      alt="Suero 3D model"
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Trabajos de Audio y Podcast */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Podcast production setup"
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
              <div className="order-1 lg:order-2">
                <Badge className="mb-4 bg-purple-100 text-purple-800">Audio y Podcast</Badge>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Producción de Audio</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Experiencia en producción de podcasts, edición de audio y creación de contenido sonoro. Manejo de
                  herramientas profesionales para lograr la mejor calidad de audio.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Escuchar Demos
                  </Button>
                </div>
              </div>
            </div>

            {/* Diseño Web */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-green-100 text-green-800">Diseño Web</Badge>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Desarrollo Web Moderno</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Creación de sitios web modernos y responsivos utilizando las últimas tecnologías. Enfoque en
                  experiencia de usuario y diseño atractivo.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Sitio Web
                  </Button>
                </div>
              </div>
              <div>
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Web design project showcase"
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">¿Listo para Trabajar Juntos?</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Estoy siempre abierto a nuevas oportunidades y proyectos interesantes. ¡Hablemos sobre tu próxima idea!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
              <Mail className="w-5 h-5 mr-2" />
              Enviar Email
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 bg-transparent"
            >
              <Phone className="w-5 h-5 mr-2" />
              Llamar
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mt-12">
            <Link href="#" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-400 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>&copy; 2024 Oscar Estrada. Todos los derechos reservados.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Términos de Uso
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
