import { Heart, Globe, Users, MessageCircle, Award, Baby, Brain } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeNav, setActiveNav] = useState("inicio");

  const scrollToSection = (sectionId: string) => {
    setActiveNav(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#faf8f7" }}>
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b" style={{ borderColor: "#e8d9d3" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src="/logo-beatriz.png" alt="Logo Beatriz Rosa" className="w-10 h-10 object-contain" />
              <div>
                <h1 className="text-xl font-bold" style={{ color: "#2d2520" }}>Beatriz Rosa</h1>
                <p className="text-xs font-medium" style={{ color: "#a7706c" }}>PSICÓLOGA INFANTIL</p>
              </div>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden md:flex gap-1">
              {[
                { id: "inicio", label: "Início" },
                { id: "desafios", label: "Desafios" },
                { id: "sobre", label: "Sobre" },
                { id: "servicos", label: "Serviços" },
                { id: "contato", label: "Contato" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    activeNav === item.id ? "text-white" : "text-gray-700 hover:bg-opacity-50"
                  }`}
                  style={{
                    backgroundColor: activeNav === item.id ? "#a7706c" : "transparent",
                    color: activeNav === item.id ? "#ffffff" : "#2d2520",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/5532999447707?text=Olá!%20Gostaria%20de%20saber%20mais%20informações%20sobre%20seu%20atendimento."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="py-12 sm:py-20 px-4" style={{ backgroundColor: "#faf8f7" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: "#2d2520" }}>
                  Beatriz Rosa
                </h2>
                <p className="text-lg sm:text-xl font-semibold mb-2" style={{ color: "#2d2520" }}>
                  Psicóloga Infantil | Avaliação do desenvolvimento
                </p>
                <p className="text-sm" style={{ color: "#7a6b63" }}>
                  CRP: 12/29732 | Tubarão/SC
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <Heart className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: "#a7706c" }} />
                  <p style={{ color: "#2d2520" }}>
                    Psicóloga com quase uma década de experiência dedicada à infância
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <Award className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: "#a7706c" }} />
                  <p style={{ color: "#2d2520" }}>
                    Especialista com certificação Padrão-Ouro de avaliação do desenvolvimento infantil Bayley III
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <Globe className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: "#a7706c" }} />
                  <p style={{ color: "#2d2520" }}>
                    Certificações internacionais de instituições renomadas como Stanford University
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <Users className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: "#a7706c" }} />
                  <p className="font-semibold" style={{ color: "#a7706c" }}>
                    Mais de 500 famílias ajudadas em 5 países
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/5532999447707?text=Olá!%20Gostaria%20de%20saber%20mais%20informações%20sobre%20seu%20atendimento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-semibold transition-colors w-fit hover:opacity-90"
                style={{ backgroundColor: "#a7706c" }}
              >
                <MessageCircle className="w-5 h-5" />
                Quero falar com a Beatriz
              </a>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 rounded-3xl blur-xl opacity-30" style={{ backgroundColor: "#ba908a" }}></div>
                <div className="relative bg-white rounded-3xl p-1 shadow-2xl">
                  <img
                    src="/beatriz-rosa.jpg"
                    alt="Beatriz Rosa"
                    className="w-full h-auto rounded-3xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desafios Section */}
      <section id="desafios" className="py-16 sm:py-24 px-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center" style={{ color: "#2d2520" }}>
            Você se identifica?
          </h2>
          <p className="text-lg text-center mb-12" style={{ color: "#2d2520" }}>
            A jornada da parentalidade é repleta de dúvidas. Talvez você esteja vivendo um destes desafios agora:
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              "As birras e crises estão se tornando mais frequentes e exaustivas?",
              "A escola sinalizou alguma dificuldade de comportamento ou aprendizagem?",
              "Você compara o desenvolvimento do seu filho com o de outras crianças e sente angústia?",
              "Sente-se perdida(o) e insegura(o) sobre como impor limites com acolhimento?",
            ].map((challenge, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-lg border" style={{ backgroundColor: "#faf8f7", borderColor: "#e8d9d3" }}>
                <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: "#a7706c" }}>
                  {idx + 1}
                </div>
                <p style={{ color: "#2d2520" }}>{challenge}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl p-8 border text-center" style={{ backgroundColor: "#e8d9d3", borderColor: "#ba908a" }}>
            <p style={{ color: "#2d2520" }}>
              <span className="font-semibold">Se você se identificou, saiba que você não está sozinha(o).</span> Meu trabalho começa exatamente por acolher essas incertezas e criar um plano claro para sua família.
            </p>
          </div>
        </div>
      </section>

      {/* Solução Section */}
      <section className="py-16 sm:py-24 px-4" style={{ backgroundColor: "#faf8f7" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center" style={{ color: "#2d2520" }}>
            Existe um caminho com mais segurança
          </h2>

          <div className="space-y-6">
            <p className="text-lg" style={{ color: "#2d2520" }}>
              Se você se identificou, saiba que existe uma forma de transformar essa exaustão e incerteza em ação direcionada.
            </p>
            <p className="text-lg" style={{ color: "#2d2520" }}>
              Meu trabalho é ser sua parceira para investigar as causas reais desses desafios, "traduzir" o que seu filho está sentindo e criar um plano de ação prático.
            </p>
            <p className="text-lg font-semibold" style={{ color: "#a7706c" }}>
              O objetivo é trocar a culpa pela confiança, a confusão pela clareza, e trazer mais harmonia e conexão para o dia a dia da sua família.
            </p>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-16 sm:py-24 px-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center" style={{ color: "#2d2520" }}>
            Sobre Mim
          </h2>

          {/* Foto com vestido azul - logo abaixo do título */}
          <div className="mb-12 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              <div className="absolute inset-0 rounded-3xl blur-xl opacity-30" style={{ backgroundColor: "#ba908a" }}></div>
              <div className="relative bg-white rounded-3xl p-1 shadow-2xl">
                <img
                  src="/beatriz-azul.jpg"
                  alt="Beatriz Rosa - Vestido Azul"
                  className="w-full h-auto rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>

          <p className="text-lg text-center mb-16" style={{ color: "#2d2520" }}>
            Beatriz Rosa construiu uma trajetória marcada pela união entre conhecimento técnico e sensibilidade humana
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="rounded-2xl p-8 border" style={{ backgroundColor: "#faf8f7", borderColor: "#e8d9d3" }}>
              <Award className="w-8 h-8 mb-4" style={{ color: "#a7706c" }} />
              <h3 className="text-xl font-bold mb-3" style={{ color: "#2d2520" }}>Certificações Internacionais</h3>
              <p style={{ color: "#2d2520" }}>
                Possui certificações internacionais de instituições renomadas, como PRT pela Stanford University, além de cursos em neurociência, educação parental e manejo de crises.
              </p>
            </div>

            <div className="rounded-2xl p-8 border" style={{ backgroundColor: "#faf8f7", borderColor: "#e8d9d3" }}>
              <Globe className="w-8 h-8 mb-4" style={{ color: "#a7706c" }} />
              <h3 className="text-xl font-bold mb-3" style={{ color: "#2d2520" }}>Alcance Global</h3>
              <p style={{ color: "#2d2520" }}>
                Já ajudou mais de 500 famílias em 5 países e é coautora de livro publicado nos Estados Unidos, Japão e Europa.
              </p>
            </div>

            <div className="rounded-2xl p-8 border" style={{ backgroundColor: "#faf8f7", borderColor: "#e8d9d3" }}>
              <Brain className="w-8 h-8 mb-4" style={{ color: "#a7706c" }} />
              <h3 className="text-xl font-bold mb-3" style={{ color: "#2d2520" }}>Especialidade Principal</h3>
              <p style={{ color: "#2d2520" }}>
                Foco na avaliação do desenvolvimento e comportamental, ajudando famílias e profissionais a compreenderem com clareza o momento da criança e os caminhos possíveis para seu progresso.
              </p>
            </div>

            <div className="rounded-2xl p-8 border" style={{ backgroundColor: "#faf8f7", borderColor: "#e8d9d3" }}>
              <Users className="w-8 h-8 mb-4" style={{ color: "#a7706c" }} />
              <h3 className="text-xl font-bold mb-3" style={{ color: "#2d2520" }}>Atuação Atual</h3>
              <p style={{ color: "#2d2520" }}>
                Atua como Supervisora Clínica, orientando psicólogas de todo o Brasil, além de realizar atendimentos presenciais para crianças de até 10 anos e online para pais.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 rounded-2xl p-8 border" style={{ backgroundColor: "#e8d9d3", borderColor: "#ba908a" }}>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold" style={{ color: "#a7706c" }}>500+</p>
              <p className="font-medium" style={{ color: "#2d2520" }}>Famílias Ajudadas</p>
            </div>
            <div className="text-center" style={{ borderLeft: "1px solid #ba908a", borderRight: "1px solid #ba908a" }}>
              <p className="text-3xl sm:text-4xl font-bold" style={{ color: "#a7706c" }}>5</p>
              <p className="font-medium" style={{ color: "#2d2520" }}>Países</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold" style={{ color: "#a7706c" }}>10</p>
              <p className="font-medium" style={{ color: "#2d2520" }}>Anos de Experiência</p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-16 sm:py-24 px-4" style={{ backgroundColor: "#faf8f7" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center" style={{ color: "#2d2520" }}>
            Serviços
          </h2>
          <p className="text-lg text-center mb-16" style={{ color: "#2d2520" }}>
            Oferece atendimento especializado e supervisão profissional com foco no desenvolvimento infantil e familiar
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Atendimento 0-3 Anos: Foco na Relação Pais-Bebê",
                description: "Diferente da terapia com crianças mais velhas, o atendimento de 0 a 3 anos tem um foco central na relação pais-bebê. Nesta fase crucial, a criança ainda não se expressa primariamente pela fala, mas sim pelo corpo, pelo choro, pelo brincar e pela forma como se relaciona com você.",
                items: [
                  "Relação pais-bebê",
                  "Desenvolvimento inicial",
                  "Construção de vínculos",
                ],
                icon: <Baby className="w-8 h-8" />,
              },
              {
                title: "Atendimento Terapêutico Infantil (até 10 anos)",
                description: "Acompanhamento individualizado para crianças, com foco em promover desenvolvimento emocional, social e comportamental. As intervenções são planejadas de forma lúdica, respeitando o tempo e as necessidades de cada criança.",
                items: [
                  "Acompanhamento individualizado",
                  "Intervenções lúdicas",
                  "Desenvolvimento emocional e social",
                ],
                icon: <Brain className="w-8 h-8" />,
              },
              {
                title: "Orientação Parental Online",
                description: "Atendimento voltado aos pais e cuidadores, com foco em estratégias eficazes para lidar com desafios do dia a dia, manejo de comportamento, rotina e comunicação. Um espaço para fortalecer vínculos familiares e dar segurança às decisões parentais.",
                items: [
                  "Estratégias eficazes para o dia a dia",
                  "Manejo de comportamento",
                  "Fortalecimento de vínculos familiares",
                ],
                icon: <Users className="w-8 h-8" />,
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-8 border transition-transform hover:scale-105"
                style={{ backgroundColor: "#faf8f7", borderColor: "#e8d9d3" }}
              >
                <div style={{ color: "#a7706c" }}>{service.icon}</div>
                <h3 className="text-xl font-bold mt-4 mb-3" style={{ color: "#2d2520" }}>{service.title}</h3>
                <p className="mb-6" style={{ color: "#2d2520" }}>{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex gap-2" style={{ color: "#2d2520" }}>
                      <span className="font-bold" style={{ color: "#a7706c" }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avaliação Section */}
      <section className="py-16 sm:py-24 px-4" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center" style={{ color: "#2d2520" }}>
            Avaliação do Desenvolvimento
          </h2>
          <p className="text-lg text-center mb-12" style={{ color: "#2d2520" }}>
            Processo detalhado para compreender o momento único de cada criança
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl p-8 border" style={{ backgroundColor: "#faf8f7", borderColor: "#e8d9d3" }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: "#2d2520" }}>O que é a Avaliação?</h3>
              <p className="mb-4" style={{ color: "#2d2520" }}>
                A avaliação do desenvolvimento é um processo cuidadoso e detalhado que visa compreender as habilidades, desafios e potencialidades de cada criança em diferentes áreas do desenvolvimento.
              </p>
              <p style={{ color: "#2d2520" }}>
                Através de observações clínicas, aplicação de instrumentos padronizados e análise comportamental, identificamos o perfil único da criança e traçamos estratégias personalizadas para seu progresso.
              </p>
            </div>

            <div className="rounded-2xl p-8 border" style={{ backgroundColor: "#faf8f7", borderColor: "#e8d9d3" }}>
              <h3 className="text-xl font-bold mb-6" style={{ color: "#2d2520" }}>Áreas Avaliadas</h3>
              <ul className="space-y-3">
                {[
                  "Desenvolvimento cognitivo e linguagem",
                  "Habilidades sociais e comunicação",
                  "Comportamento adaptativo",
                  "Desenvolvimento motor e sensorial",
                  "Aspectos emocionais e regulação",
                ].map((area, idx) => (
                  <li key={idx} className="flex gap-3" style={{ color: "#2d2520" }}>
                    <span className="font-bold" style={{ color: "#a7706c" }}>✓</span>
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Foto segurando livro */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 rounded-3xl blur-xl opacity-30" style={{ backgroundColor: "#ba908a" }}></div>
              <div className="relative bg-white rounded-3xl p-1 shadow-2xl">
                <img
                  src="/beatriz-livro.jpg"
                  alt="Beatriz Rosa - Segurando Livro"
                  className="w-full h-auto rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-16 sm:py-24 px-4" style={{ backgroundColor: "#faf8f7" }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: "#2d2520" }}>
            Vamos Conversar?
          </h2>
          <p className="text-lg mb-8" style={{ color: "#2d2520" }}>
            Estou aqui para ajudar você e sua família. Entre em contato para agendar uma consulta ou esclarecer suas dúvidas.
          </p>

          <a
            href="https://wa.me/5532999447707?text=Olá!%20Gostaria%20de%20saber%20mais%20informações%20sobre%20seu%20atendimento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors hover:opacity-90"
            style={{ backgroundColor: "#a7706c" }}
          >
            <MessageCircle className="w-6 h-6" />
            Quero falar com a Beatriz
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-white py-12 px-4" style={{ backgroundColor: "#2d2520" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Beatriz Rosa</h3>
              <p style={{ color: "#ba908a" }}>Psicóloga Infantil</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <p style={{ color: "#ba908a" }} className="mb-2">E-mail: psibeatrizrosa@gmail.com</p>
              <p style={{ color: "#ba908a" }}>WhatsApp: (32) 99944-7707</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Localização</h4>
              <p style={{ color: "#ba908a" }}>Tubarão/SC</p>
              <p style={{ color: "#ba908a" }}>CRP: 12/29732</p>
            </div>
          </div>

          <div className="pt-8 text-center" style={{ borderTop: "1px solid #ba908a", color: "#ba908a" }}>
            <p>© 2024 Beatriz Rosa - Psicóloga Infantil | CRP: 12/29732 | Tubarão/SC - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
