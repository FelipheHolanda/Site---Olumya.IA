import { Button } from "@/components/ui/button"
import { Quote, Star, Users } from "lucide-react"
import Image from "next/image"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export default function ClientesPage() {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CEO",
      company: "TechCorp",
      avatar: "CS",
      content:
        "A OLUMYA.IA transformou completamente nosso atendimento ao cliente. Reduzimos o tempo de resposta em 80% e aumentamos a satisfação dos clientes significativamente.",
      rating: 5,
    },
    {
      name: "Ana Santos",
      role: "Diretora de Operações",
      company: "LogiFlow",
      avatar: "AS",
      content:
        "A automação de processos implementada pela OLUMYA.IA nos permitiu focar em atividades estratégicas. O ROI foi alcançado em apenas 3 meses.",
      rating: 5,
    },
    {
      name: "Roberto Lima",
      role: "CTO",
      company: "DataMax",
      avatar: "RL",
      content:
        "A análise preditiva da OLUMYA.IA nos ajudou a antecipar tendências de mercado e tomar decisões mais assertivas. Recomendo fortemente!",
      rating: 5,
    },
    {
      name: "Marina Costa",
      role: "Gerente de Marketing",
      company: "GrowthLab",
      avatar: "MC",
      content:
        "O chatbot inteligente aumentou nossas conversões em 45%. A integração foi simples e o suporte é excepcional.",
      rating: 5,
    },
    {
      name: "Pedro Oliveira",
      role: "Diretor Comercial",
      company: "SalesForce Pro",
      avatar: "PO",
      content:
        "Com as soluções da OLUMYA.IA, conseguimos automatizar todo nosso processo de qualificação de leads. Produtividade aumentou 60%.",
      rating: 5,
    },
    {
      name: "Julia Ferreira",
      role: "Head de RH",
      company: "PeopleFirst",
      avatar: "JF",
      content:
        "A IA da OLUMYA revolucionou nosso processo de recrutamento. Reduzimos o tempo de contratação pela metade mantendo a qualidade.",
      rating: 5,
    },
  ]

  const companies = [
    { name: "TechCorp", logo: "modern tech company logo" },
    { name: "LogiFlow", logo: "logistics company logo" },
    { name: "DataMax", logo: "data analytics company logo" },
    { name: "GrowthLab", logo: "marketing agency logo" },
    { name: "SalesForce Pro", logo: "sales software company logo" },
    { name: "PeopleFirst", logo: "HR consulting company logo" },
    { name: "InnovateTech", logo: "innovation technology logo" },
    { name: "CloudSystems", logo: "cloud computing company logo" },
  ]

  const stats = [
    { number: "500+", label: "Empresas Atendidas" },
    { number: "98%", label: "Satisfação dos Clientes" },
    { number: "2M+", label: "Interações Processadas" },
    { number: "24/7", label: "Suporte Disponível" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-indigo-950/20">
        <div className="absolute inset-0 bg-grid-black/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <Badge variant="secondary" className="w-fit mx-auto">
              <Users className="w-4 h-4 mr-2" />
              Nossos Clientes
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
              Empresas que{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                confiam em nós
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubra como empresas de diversos segmentos estão transformando seus negócios com nossas soluções de
              inteligência artificial
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Logos */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Empresas que{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                já transformaram
              </span>{" "}
              seus negócios
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <Image
                  src={`/placeholder.svg?height=80&width=120&query=${company.logo}`}
                  alt={company.name}
                  width={120}
                  height={80}
                  className="opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              O que nossos{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                clientes dizem
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Depoimentos reais de empresas que transformaram seus resultados com nossas soluções
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={`/placeholder-user.jpg`} />
                      <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>
                        {testimonial.role} • {testimonial.company}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Quote className="w-8 h-8 text-purple-200 dark:text-purple-800 absolute -top-2 -left-2" />
                    <p className="text-muted-foreground italic pl-6">{testimonial.content}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Casos de{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Sucesso
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça em detalhes como nossas soluções impactaram diferentes negócios
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                company: "TechCorp",
                industry: "Tecnologia",
                result: "80% redução no tempo de resposta",
                description: "Implementação de chatbot inteligente para atendimento 24/7",
                image: "tech company office with AI dashboard",
              },
              {
                company: "LogiFlow",
                industry: "Logística",
                result: "ROI em 3 meses",
                description: "Automação completa de processos operacionais",
                image: "logistics warehouse with automated systems",
              },
              {
                company: "DataMax",
                industry: "Analytics",
                result: "45% aumento em conversões",
                description: "Análise preditiva para tomada de decisões estratégicas",
                image: "data analytics dashboard with predictive charts",
              },
            ].map((caseStudy, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&query=${caseStudy.image}`}
                    alt={caseStudy.company}
                    width={400}
                    height={300}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{caseStudy.industry}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{caseStudy.company}</CardTitle>
                  <div className="text-2xl font-bold text-green-600">{caseStudy.result}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{caseStudy.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold text-white">Seja o próximo caso de sucesso</h2>
            <p className="text-xl text-purple-100">
              Junte-se a centenas de empresas que já transformaram seus negócios com nossas soluções de IA
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Falar com Consultor
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
              >
                Ver Demonstração
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
