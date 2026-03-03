/**
 * Design Philosophy: Premium Legal Positioning
 * - Deep blue primary with gold accents
 * - Professional serif headers + clean body text
 * - Problem-Solution-Result (PSR) structure
 * - Trust signals: ratings, testimonials, metrics
 * - Clear CTAs focused on WhatsApp consultation
 */

'use client';

export default function Home() {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Gostaria de agendar uma análise gratuita do meu posicionamento jurídico."
    );
    // Substitua pelo número de WhatsApp real quando disponível
    window.open(`https://wa.me/5535998974559?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[color:var(--border)]">
        <div className="container-custom flex items-center justify-between py-4">
          <div className="text-xl font-bold text-[color:var(--primary)]">
            Posicionamento Jurídico
          </div>
          <button
            onClick={handleWhatsAppClick}
            className="btn-premium flex items-center gap-2"
          >
            💬
            Conversar
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-spacing bg-gradient-to-br from-[color:var(--primary)]/5 via-white to-[color:var(--accent)]/5 relative overflow-hidden">
        <div className="container-custom grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="space-y-6 z-10">
            <div className="space-y-3">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Advogado(a) Iniciante:
                <span className="gradient-text"> Pare de correr atrás de clientes ruins.</span>
              </h1>
              <p className="text-xl text-[color:var(--muted-foreground)] leading-relaxed">
                Atraia os clientes que pagam bem. Posicionamento jurídico estratégico que filtra leads qualificados, aumenta sua rentabilidade e transforma sua prática.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                onClick={handleWhatsAppClick}
                className="btn-premium flex items-center gap-2 text-lg"
              >
                Agendar Análise Gratuita
                →
              </button>
            </div>

            {/* Trust Signals */}
            <div className="pt-8 space-y-3 border-t border-[color:var(--border)]">
              <p className="text-sm text-[color:var(--muted-foreground)] font-semibold">RECONHECIMENTO</p>
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl">⭐</span>
                  ))}
                </div>
                <span className="font-semibold text-[color:var(--foreground)]">5.0 - Escritório Sara Carvalho</span>
              </div>
              <p className="text-sm text-[color:var(--muted-foreground)]">
                Experiência desde 2021 em posicionamento jurídico para advogados iniciantes
              </p>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663080990162/kyQLNpLJubwdioVNsqc8Bb/hero-advogado-34GrAD6jByn33hNjE3vmkZ.webp"
              alt="Advogado profissional em escritório"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Qual é a dor do advogado iniciante?
            </h2>
            <p className="text-xl text-[color:var(--muted-foreground)] max-w-2xl mx-auto">
              Você não está sozinho. Esses são os desafios que enfrentam 9 em cada 10 advogados que abrem seu primeiro escritório.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "💰",
                title: "Custos Fixos Altos",
                description: "Taxa OAB anual, aluguel, água, luz, internet... tudo sai do seu bolso antes de ganhar um real."
              },
              {
                icon: "📉",
                title: "Clientes de Baixo Valor",
                description: "Aqueles que aparecem não pagam bem, somem no meio do processo ou não têm capacidade de pagar."
              },
              {
                icon: "📅",
                title: "Sem Rentabilidade",
                description: "Muito trabalho, pouco retorno. Você trabalha demais para ganhar pouco e sem segurança."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl border border-red-100 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[color:var(--foreground)] mb-3">{item.title}</h3>
                <p className="text-[color:var(--muted-foreground)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Problem Image */}
          <div className="mt-12 rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663080990162/kyQLNpLJubwdioVNsqc8Bb/problema-advogado-AwnqmkbukjehKYD7BNU45f.webp"
              alt="Ilustração dos problemas do advogado iniciante"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-spacing bg-gradient-to-br from-[color:var(--primary)]/10 via-white to-[color:var(--accent)]/10">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              A Solução: Posicionamento Jurídico Estratégico
            </h2>
            <p className="text-xl text-[color:var(--muted-foreground)] max-w-2xl mx-auto">
              Não é sobre vender mais. É sobre vender melhor. Atrair os clientes certos que pagam premium por competência.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Solution Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663080990162/kyQLNpLJubwdioVNsqc8Bb/solucao-posicionamento-RB3LJerdW8WTB7gLsVFa2d.webp"
                alt="Ilustração da solução de posicionamento"
                className="w-full h-auto"
              />
            </div>

            {/* Solution Benefits */}
            <div className="space-y-6 order-1 md:order-2">
              {[
                {
                  title: "Filtra Leads Qualificados",
                  description: "Posicionamento que atrai apenas clientes com causas grandes e capacidade de pagamento."
                },
                {
                  title: "Aumenta Percepção de Valor",
                  description: "Quando você se posiciona, o cliente vê competência. Competência justifica preços altos."
                },
                {
                  title: "Reduz Volume, Aumenta Lucro",
                  description: "Menos clientes, mas clientes certos. Mais rentabilidade com menos trabalho."
                },
                {
                  title: "Conteúdo que Resolve Problemas",
                  description: "Copy focado em soluções reais, não em informações genéricas. O cliente paga quem resolve."
                },
                {
                  title: "Humanizado e Ético",
                  description: "Atendimento com empatia, compliant com OAB, sem mercantilizar a profissão."
                }
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[color:var(--foreground)] mb-1">{benefit.title}</h3>
                    <p className="text-[color:var(--muted-foreground)]">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              O Resultado: Transformação Real
            </h2>
            <p className="text-xl text-[color:var(--muted-foreground)] max-w-2xl mx-auto">
              Quando você se posiciona corretamente, tudo muda. Veja os resultados que nossos clientes conquistaram.
            </p>
          </div>

          {/* Results Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl mb-12">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663080990162/kyQLNpLJubwdioVNsqc8Bb/resultado-sucesso-2DiKTZ3QKGk63nKRiJK8kw.webp"
              alt="Métricas de sucesso do posicionamento"
              className="w-full h-auto"
            />
          </div>

          {/* Metrics Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { metric: "+150%", label: "Aumento em Consultas Qualificadas" },
              { metric: "+30%", label: "Visibilidade com 1 Post Estratégico" },
              { metric: "3+", label: "Anos de Experiência em Escritório" },
              { metric: "5⭐", label: "Avaliação no Google - Sara Carvalho" }
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-gradient-to-br from-[color:var(--primary)]/5 to-[color:var(--accent)]/5 rounded-xl border border-[color:var(--border)] text-center hover:shadow-md transition-shadow"
              >
                <div className="text-3xl md:text-4xl font-bold text-[color:var(--primary)] mb-2">
                  {item.metric}
                </div>
                <p className="text-sm text-[color:var(--muted-foreground)]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section-spacing bg-gradient-to-br from-[color:var(--primary)]/5 via-white to-[color:var(--accent)]/5">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Provas Sociais
            </h2>
            <p className="text-xl text-[color:var(--muted-foreground)] max-w-2xl mx-auto">
              Não é só teoria. Aqui estão as evidências reais do trabalho realizado.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="p-8 bg-white rounded-xl border border-[color:var(--border)] shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--accent)]" />
                <div>
                  <p className="font-bold text-[color:var(--foreground)]">Escritório Sara Carvalho</p>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-[color:var(--foreground)] italic">
                "Meu post dobrou as consultas qualificadas no escritório. Agora recebo apenas clientes que realmente precisam de nossos serviços."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="p-8 bg-white rounded-xl border border-[color:var(--border)] shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[color:var(--accent)] to-[color:var(--primary)]" />
                <div>
                  <p className="font-bold text-[color:var(--foreground)]">Experiência Comprovada</p>
                  <p className="text-sm text-[color:var(--muted-foreground)]">Desde 2021</p>
                </div>
              </div>
              <p className="text-[color:var(--foreground)] italic">
                "Trabalho há mais de 3 anos em escritório de advocacia, gerando conteúdo que qualifica leads. Sei exatamente o que funciona."
              </p>
            </div>
          </div>

          {/* Video Section */}
          <div className="mt-12 p-8 bg-white rounded-xl border border-[color:var(--border)]">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl">⚡</span>
              <h3 className="text-2xl font-bold text-[color:var(--foreground)]">Veja a Comunicação em Ação</h3>
            </div>
            <p className="text-[color:var(--muted-foreground)] mb-6">
              Vídeo do Instagram mostrando comunicação clara e profissional. Isso é o que transmite confiança aos clientes.
            </p>
            <div className="aspect-video bg-gradient-to-br from-[color:var(--primary)]/10 to-[color:var(--accent)]/10 rounded-lg flex items-center justify-center border-2 border-dashed border-[color:var(--border)]">
              <div className="text-center">
                <p className="text-[color:var(--muted-foreground)] mb-2">Vídeo de comunicação profissional</p>
                <p className="text-sm text-[color:var(--muted-foreground)]">(Embed ou link do Instagram)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--primary)]/80 text-white">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para Atrair Clientes Premium?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Agende uma análise gratuita do seu posicionamento jurídico. Vamos identificar exatamente o que você precisa fazer para atrair os clientes certos.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-[color:var(--accent)] text-[color:var(--primary)] hover:bg-[color:var(--accent)]/90 font-bold text-lg px-8 py-4 flex items-center gap-2 mx-auto rounded-lg transition-all duration-300 hover:scale-105"
          >
            💬
            Conversar no WhatsApp
          </button>
          <p className="text-sm text-white/70 mt-6">
            Resposta rápida • Sem compromisso • Análise personalizada
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[color:var(--foreground)] text-white py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Posicionamento Jurídico</h3>
              <p className="text-white/70">
                Ajudando advogados iniciantes a atrair clientes premium através de posicionamento estratégico.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Sobre</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition">Experiência desde 2021</a></li>
                <li><a href="#" className="hover:text-white transition">Especializado em Copy</a></li>
                <li><a href="#" className="hover:text-white transition">Compliant com OAB</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contato</h3>
              <button
                onClick={handleWhatsAppClick}
                className="bg-[color:var(--accent)] text-[color:var(--primary)] hover:bg-[color:var(--accent)]/90 w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Conversar no WhatsApp
              </button>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
            <p>&copy; 2026 Posicionamento Jurídico. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

