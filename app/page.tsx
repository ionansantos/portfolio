const experiences = [
  {
    period: "fev 2025 — atual",
    company: "App Facilita",
    role: "Desenvolvedor Back-End Pleno",
    description:
      "CRM para imobiliárias com integrações críticas e foco contínuo em performance.",
    tags: ["Laravel", "REST APIs", "Queues", "Pest"],
  },
  {
    period: "jan 2023 — fev 2025",
    company: "D3T Inovação Tecnológica",
    role: "Desenvolvedor Full Stack",
    description:
      "APIs escaláveis, autenticação JWT, WebSockets, CI/CD e integrações com interfaces web e mobile.",
    tags: ["PHP", "Docker", "Vue.js", "React Native"],
  },
  {
    period: "dez 2022 — dez 2023",
    company: "INNYX Tecnologia",
    role: "Desenvolvedor Full Stack",
    description:
      "Sistemas web e APIs em Laravel, com manutenção evolutiva, MySQL e boas práticas de versionamento.",
    tags: ["Laravel", "MySQL", "Git", "APIs REST"],
  },
  {
    period: "ago 2021 — ago 2022",
    company: "Clinicarx",
    role: "Desenvolvedor Full Stack",
    description:
      "Soluções para o setor de saúde, combinando APIs, arquitetura MVC e otimização de consultas.",
    tags: ["PHP", "Laravel", "Clean Code", "SQL"],
  },
];

const technologies = [
  ["Backend", "PHP", "Laravel", "Symfony", "Node.js", "CakePHP"],
  ["Arquitetura", "APIs REST", "DDD", "SOLID", "Hexagonal", "JWT"],
  ["Infraestrutura", "Docker", "AWS", "Nginx", "Apache", "CI/CD"],
  ["Dados & qualidade", "MySQL", "PostgreSQL", "Pest", "PHPUnit", "Git"],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Início">
          <span className="brand-mark">&gt;_</span>
          ionan<span>.dev</span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#experiencia">Experiência</a>
          <a href="#stack">Stack</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="header-link" href="#contato">Vamos conversar <span>↗</span></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />
        <div className="page-grid" />
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><i /> DISPONÍVEL PARA NOVOS DESAFIOS</p>
            <h1>
              Construo o <em>backend</em> que faz produtos digitais acontecerem.
            </h1>
            <p className="hero-text">
              Sou Ionan Santos, desenvolvedor focado em APIs, integrações e sistemas escaláveis. Transformo regras complexas em software limpo, performático e pronto para crescer.
            </p>
            <p className="terminal-line"><span>~</span> Laravel · Symfony · Node.js · AWS <b>▋</b></p>
            <div className="hero-actions">
              <a className="button primary" href="#contato">Entrar em contato <span>→</span></a>
              <a className="button ghost" href="#experiencia">Ver trajetória <span>↓</span></a>
            </div>
            <div className="quick-facts">
              <span><b>4+</b> anos criando software</span>
              <span><b>Backend</b> & integrações</span>
              <span><b>São Luís</b>, Maranhão</span>
            </div>
          </div>
          <div className="code-wrap" aria-label="Exemplo de código">
            <div className="code-card">
              <div className="code-top"><span><i /><i /><i /></span><p>app/Services/IntegrationService.php</p></div>
              <pre><code><span className="purple">final class</span> <span className="white">IntegrationService</span>
{'{'}
  <span className="purple">public function</span> <span className="green">sync</span>(<span className="blue">Request</span> $request): <span className="blue">Response</span>
  {'{'}
    $data = <span className="purple">$this</span>-&gt;validator-&gt;<span className="green">validate</span>($request);

    <span className="purple">return</span> <span className="purple">$this</span>-&gt;queue-&gt;<span className="green">dispatch</span>(
      <span className="purple">new</span> <span className="white">SyncIntegration</span>($data)
    );
  {'}'}
{'}'}</code></pre>
              <div className="code-tags"><span>Laravel</span><span>REST API</span><span>Queues</span><span>Docker</span></div>
            </div>
            <span className="corner c1" /><span className="corner c2" />
          </div>
        </div>
      </section>

      <section className="section about" id="sobre">
        <div className="shell two-col">
          <div>
            <p className="eyebrow">01 / SOBRE MIM</p>
            <h2>Engenharia de software com <em>clareza</em> desde a base.</h2>
          </div>
          <div className="about-copy">
            <p>Minha jornada começou pela curiosidade de entender o que existe por trás de um sistema. Hoje, essa curiosidade virou um olhar atento para arquitetura, desempenho e produto.</p>
            <p>Embora tenha experiência full stack, atuo principalmente no backend: crio aplicações escaláveis, integrações entre sistemas e APIs que suportam operações reais.</p>
            <div className="focus-list">
              <span><b>01</b> APIs e integrações de negócio</span>
              <span><b>02</b> Arquitetura limpa e sustentável</span>
              <span><b>03</b> Testes e qualidade de código</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section experience" id="experiencia">
        <div className="shell">
          <div className="section-head"><div><p className="eyebrow">02 / TRAJETÓRIA</p><h2>Experiência <em>profissional</em></h2></div><p>Experiência prática desenvolvendo produtos, integrações e serviços para diferentes setores.</p></div>
          <div className="timeline">
            {experiences.map((item, index) => <article className="experience-item" key={item.company}>
              <div className="time"><span>{item.period}</span><i /></div>
              <div className="experience-card">
                <div className="card-title"><div><p>{item.company}</p><h3>{item.role}</h3></div><span>0{index + 1}</span></div>
                <p>{item.description}</p>
                <div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="section stack" id="stack">
        <div className="shell">
          <p className="eyebrow">03 / FERRAMENTAS</p>
          <h2>Uma stack para entregar com <em>consistência.</em></h2>
          <div className="stack-grid">{technologies.map(([title, ...items], index) => <article className="stack-card" key={title}>
            <span>0{index + 1}</span><h3>{title}</h3><div>{items.map(item => <b key={item}>{item}</b>)}</div>
          </article>)}</div>
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="contact-glow" />
        <div className="shell contact-inner">
          <p className="eyebrow">04 / CONTATO</p>
          <h2>Vamos construir algo <em>relevante?</em></h2>
          <p>Se você tem um desafio técnico, uma integração para resolver ou um produto para evoluir, vamos conversar.</p>
          <div className="contact-actions">
            <a className="button primary" href="mailto:ionan564@gmail.com">ionan564@gmail.com <span>↗</span></a>
            <a className="text-link" href="https://www.linkedin.com/in/ionan-santos-602b5a19b" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
          </div>
        </div>
      </section>

      <footer className="shell"><span>© {new Date().getFullYear()} Ionan Santos</span><span>Backend developer / São Luís, MA</span></footer>
    </main>
  );
}
