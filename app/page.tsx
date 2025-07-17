import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, MessageCircle, ExternalLink, Play, Code, Palette, Volume2, Monitor } from "lucide-react"
import Image from "next/image"

export default function CascadingPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Fixed Action Buttons */}
      <div className="fixed top-1/2 right-6 transform -translate-y-1/2 z-50 flex flex-col gap-4">
        <Button
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 shadow-lg rounded-full px-6 py-3 text-white font-semibold"
        >
          <Download className="w-5 h-5 mr-2" />
          Descargar CV
        </Button>
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 shadow-lg rounded-full px-6 py-3 text-white font-semibold"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          WhatsApp
        </Button>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="container mx-auto">
          <div className="text-center space-y-8">
            {/* Profile Photo */}
            <div className="relative inline-block">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <Image
                  src="/placeholder.svg?height=256&width=256"
                  alt="Oscar Estrada - goa.jpg"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white"></div>
            </div>

            {/* Introduction Text */}
            <div className="max-w-4xl mx-auto space-y-6">
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
                Hi, I'm <span className="text-blue-600">Oscar Estrada</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
                and I have experience in various fields of technology. I'm eager to learn every day and have a lot of
                enthusiasm. I'd like to share some of the projects I've worked on previously.
              </p>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce mt-16">
              <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Cascading Design */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Mi Portafolio</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* Modelado 2D y 3D */}
          <div className="mb-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Palette className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <Badge className="mb-2 bg-blue-100 text-blue-800 text-lg px-4 py-2">Modelado 2D y 3D</Badge>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Diseño y Modelado Digital</h3>
                  </div>
                </div>

                <p className="text-lg text-slate-600 leading-relaxed">
                  Creación de modelos 2D y 3D para diferentes aplicaciones, desde personajes hasta objetos técnicos.
                  Experiencia en software especializado y técnicas avanzadas de renderizado que dan vida a las ideas.
                </p>

                <Button variant="outline" size="lg" className="group bg-transparent">
                  <ExternalLink className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Ver Proyectos Completos
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-xl">
                  <CardContent className="p-0">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="Rig modeling - rig pic.jpg"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-slate-900">Character Rigging</h4>
                      <p className="text-sm text-slate-600">Sistema de huesos avanzado</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-xl">
                  <CardContent className="p-0">
                    <Image
                      src="/placeholder.svg?height=300&width=400"
                      alt="3D Serum model - suero.jpg"
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-slate-900">Modelado Médico</h4>
                      <p className="text-sm text-slate-600">Visualización 3D precisa</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Trabajos de Audio y Podcast */}
          <div className="mb-32">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <Card className="overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-xl">
                  <CardContent className="p-0 relative">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Podcast production - podcast pic.jpg"
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <Button size="lg" className="bg-white/20 backdrop-blur-sm border border-white/30">
                        <Play className="w-6 h-6 mr-2" />
                        Reproducir Demo
                      </Button>
                    </div>
                    <div className="p-6">
                      <h4 className="font-semibold text-slate-900 text-lg">Estudio de Podcast</h4>
                      <p className="text-slate-600">Producción profesional de audio</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="order-1 lg:order-2 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <Volume2 className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <Badge className="mb-2 bg-purple-100 text-purple-800 text-lg px-4 py-2">Audio y Podcast</Badge>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Producción de Audio</h3>
                  </div>
                </div>

                <p className="text-lg text-slate-600 leading-relaxed">
                  Experiencia en producción de podcasts, edición de audio y creación de contenido sonoro. Manejo de
                  herramientas profesionales para lograr la mejor calidad de audio y narrativa envolvente.
                </p>

                <Button variant="outline" size="lg" className="group bg-transparent">
                  <Volume2 className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Escuchar Portfolio
                </Button>
              </div>
            </div>
          </div>

          {/* Diseño Web */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <Monitor className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <Badge className="mb-2 bg-green-100 text-green-800 text-lg px-4 py-2">Diseño Web</Badge>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Desarrollo Web Moderno</h3>
                  </div>
                </div>

                <p className="text-lg text-slate-600 leading-relaxed">
                  Creación de sitios web modernos y responsivos utilizando las últimas tecnologías. Enfoque en
                  experiencia de usuario excepcional y diseño que convierte visitantes en clientes.
                </p>

                <Button variant="outline" size="lg" className="group bg-transparent">
                  <Code className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Ver Sitio en Vivo
                </Button>
              </div>

              <div>
                <Card className="overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-xl">
                  <CardContent className="p-0 relative">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Web design project - goa.jpg"
                      width={600}
                      height={400}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h4 className="font-semibold text-xl mb-2">Proyecto Web Destacado</h4>
                      <p className="text-white/90">Diseño responsivo y experiencia optimizada</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">¿Trabajamos Juntos?</h2>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Estoy siempre abierto a nuevas oportunidades y proyectos desafiantes. Si tienes una idea increíble,
            ¡hablemos y hagámosla realidad!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
              <Download className="w-6 h-6 mr-3" />
              Descargar Mi CV
            </Button>
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-lg px-8 py-4">
              <MessageCircle className="w-6 h-6 mr-3" />
              Contactar por WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">&copy; 2024 Oscar Estrada. Creando el futuro, un proyecto a la vez.</p>
        </div>
      </footer>
    </div>
  )
}
