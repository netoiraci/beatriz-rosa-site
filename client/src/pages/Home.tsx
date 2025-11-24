import { Button } from "@/components/ui/button";
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
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-pink-500 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Beatriz Rosa</h1>
                <p className="text-xs text-rose-600 font-medium">PSICÓLOGA INFANTIL</p>
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
                    activeNav === item.id
                      ? "bg-rose-100 text-rose-700"
                      : "text-gray-700 hover:bg-rose-50"
                  }`}
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
      <section id="inicio" className="py-12 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                  Beatriz Rosa
                </h2>
                <p className="text-lg sm:text-xl text-gray-700 font-semibold mb-2">
                  Psicóloga Infantil | Avaliação do desenvolvimento
                </p>
                <p className="text-sm text-gray-600">
                  CRP: 12/29732 | Tubarão/SC
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <Heart className="w-5 h-5 text-rose-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Psicóloga com quase uma década de experiência dedicada à infância
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <Award className="w-5 h-5 text-rose-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Especialista com certificação Padrão-Ouro de avaliação do desenvolvimento infantil Bayley III
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <Globe className="w-5 h-5 text-rose-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">
                    Certificações internacionais de instituições renomadas como Stanford University
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <Users className="w-5 h-5 text-rose-500 flex-shrink-0 mt-1" />
                  <p className="text-rose-600 font-semibold">
                    Mais de 500 famílias ajudadas em 5 países
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/5532999447707?text=Olá!%20Gostaria%20de%20saber%20mais%20informações%20sobre%20seu%20atendimento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-colors w-fit"
              >
                <MessageCircle className="w-5 h-5" />
                Quero falar com a Beatriz
              </a>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-200 to-pink-200 rounded-3xl blur-xl opacity-50"></div>
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
      <section id="desafios" className="py-16 sm:py-24 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Você se identifica?
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12">
            A jornada da parentalidade é repleta de dúvidas. Talvez você esteja vivendo um destes desafios agora:
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {[
              "As birras e crises estão se tornando mais frequentes e exaustivas?",
              "A escola sinalizou alguma dificuldade de comportamento ou aprendizagem?",
              "Você compara o desenvolvimento do seu filho com o de outras crianças e sente angústia?",
              "Sente-se perdida(o) e insegura(o) sobre como impor limites com acolhimento?",
            ].map((challenge, idx) => (
              <div key={idx} className="flex gap-4 p-4 bg-rose-50 rounded-lg border border-rose-200">
                <div className="w-6 h-6 rounded-full bg-rose-500 flex-shrink-0 flex items-center justify-center text-white font-bold text-sm">
                  {idx + 1}
                </div>
                <p className="text-gray-700">{challenge}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-8 border border-rose-200">
            <p className="text-gray-900 text-center">
              <span className="font-semibold">Se você se identificou, saiba que você não está sozinha(o).</span> Meu trabalho começa exatamente por acolher essas incertezas e criar um plano claro para sua família.
            </p>
          </div>
        </div>
      </section>

      {/* Solução Section */}
      <section className="py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Existe um caminho com mais segurança
          </h2>

          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              Se você se identificou, saiba que existe uma forma de transformar essa exaustão e incerteza em ação direcionada.
            </p>
            <p className="text-lg text-gray-700">
              Meu trabalho é ser sua parceira para investigar as causas reais desses desafios, "traduzir" o que seu filho está sentindo e criar um plano de ação prático.
            </p>
            <p className="text-lg text-gray-700 font-semibold text-rose-700">
              O objetivo é trocar a culpa pela confiança, a confusão pela clareza, e trazer mais harmonia e conexão para o dia a dia da sua família.
            </p>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-16 sm:py-24 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Sobre Mim
          </h2>
          <p className="text-lg text-gray-700 text-center mb-16">
            Beatriz Rosa construiu uma trajetória marcada pela união entre conhecimento técnico e sensibilidade humana
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <Award className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Certificações Internacionais</h3>
              <p className="text-gray-700">
                Possui certificações internacionais de instituições renomadas, como PRT pela Stanford University, além de cursos em neurociência, educação parental e manejo de crises.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
              <Globe className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Alcance Global</h3>
              <p className="text-gray-700">
                Já ajudou mais de 500 famílias em 5 países e é coautora de livro publicado nos Estados Unidos, Japão e Europa.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
              <Brain className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Especialidade Principal</h3>
              <p className="text-gray-700">
                Foco na avaliação do desenvolvimento e comportamental, ajudando famílias e profissionais a compreenderem com clareza o momento da criança e os caminhos possíveis para seu progresso.
              </p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-pink-100 rounded-2xl p-8 border border-rose-200">
              <Users className="w-8 h-8 text-rose-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Atuação Atual</h3>
              <p className="text-gray-700">
                Atua como Supervisora Clínica, orientando psicólogas de todo o Brasil, além de realizar atendimentos presenciais para crianças de até 10 anos e online para pais.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl p-8 border border-rose-200">
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-rose-700">500+</p>
              <p className="text-gray-700 font-medium">Famílias Ajudadas</p>
            </div>
            <div className="text-center border-l border-r border-rose-300">
              <p className="text-3xl sm:text-4xl font-bold text-rose-700">5</p>
              <p className="text-gray-700 font-medium">Países</p>
            </div>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-rose-700">10</p>
              <p className="text-gray-700 font-medium">Anos de Experiência</p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-16 sm:py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Serviços
          </h2>
          <p className="text-lg text-gray-700 text-center mb-16">
            Oferece atendimento especializado e supervisão profissional com foco no desenvolvimento infantil e familiar
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Atendimento Terapêutico Infantil (até 10 anos)",
                description: "Acompanhamento individualizado para crianças, com foco em promover desenvolvimento emocional, social e comportamental. As intervenções são planejadas de forma lúdica, respeitando o tempo e as necessidades de cada criança.",
                items: [
                  "Acompanhamento individualizado",
                  "Intervenções lúdicas",
                  "Desenvolvimento emocional e social",
                ],
                icon: <Brain className="w-8 h-8" />,
                color: "from-blue-50 to-blue-100 border-blue-200 text-blue-600",
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
                color: "from-green-50 to-green-100 border-green-200 text-green-600",
              },
              {
                title: "Atendimento 0-3 Anos: Foco na Relação Pais-Bebê",
                description: "Diferente da terapia com crianças mais velhas, o atendimento de 0 a 3 anos tem um foco central na relação pais-bebê. Nesta fase crucial, a criança ainda não se expressa primariamente pela fala, mas sim pelo corpo, pelo choro, pelo brincar e pela forma como se relaciona com você.",
                items: [
                  "Relação pais-bebê",
                  "Desenvolvimento inicial",
                  "Construção de vínculos",
                ],
                icon: <Baby className="w-8 h-8" />,
                color: "from-pink-50 to-pink-100 border-pink-200 text-pink-600",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${service.color} rounded-2xl p-8 border transition-transform hover:scale-105`}
              >
                <div className={`text-${service.color.split(" ")[3]}`}>{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex gap-2 text-gray-700">
                      <span className="text-rose-500 font-bold">•</span>
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
      <section className="py-16 sm:py-24 px-4 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            Avaliação do Desenvolvimento
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12">
            Processo detalhado para compreender o momento único de cada criança
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 border border-amber-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">O que é a Avaliação?</h3>
              <p className="text-gray-700 mb-4">
                A avaliação do desenvolvimento é um processo cuidadoso e detalhado que visa compreender as habilidades, desafios e potencialidades de cada criança em diferentes áreas do desenvolvimento.
              </p>
              <p className="text-gray-700">
                Através de observações clínicas, aplicação de instrumentos padronizados e análise comportamental, identificamos o perfil único da criança e traçamos estratégias personalizadas para seu progresso.
              </p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-pink-100 rounded-2xl p-8 border border-rose-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Áreas Avaliadas</h3>
              <ul className="space-y-3">
                {[
                  "Desenvolvimento cognitivo e linguagem",
                  "Habilidades sociais e comunicação",
                  "Comportamento adaptativo",
                  "Desenvolvimento motor e sensorial",
                  "Aspectos emocionais e regulação",
                ].map((area, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-700">
                    <span className="text-rose-500 font-bold">✓</span>
                    {area}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-16 sm:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Vamos Conversar?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Estou aqui para ajudar você e sua família. Entre em contato para agendar uma consulta ou esclarecer suas dúvidas.
          </p>

          <a
            href="https://wa.me/5532999447707?text=Olá!%20Gostaria%20de%20saber%20mais%20informações%20sobre%20seu%20atendimento."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors"
          >
            <MessageCircle className="w-6 h-6" />
            Quero falar com a Beatriz
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Beatriz Rosa</h3>
              <p className="text-gray-400">Psicóloga Infantil</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <p className="text-gray-400 mb-2">E-mail: psibeatrizrosa@gmail.com</p>
              <p className="text-gray-400">WhatsApp: (32) 99944-7707</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Localização</h4>
              <p className="text-gray-400">Tubarão/SC</p>
              <p className="text-gray-400">CRP: 12/29732</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 Beatriz Rosa - Psicóloga Infantil | CRP: 12/29732 | Tubarão/SC - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
