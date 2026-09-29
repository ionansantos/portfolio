"use client";

import { useEffect } from "react";

const experiences = [
  {
    period: "fev 2025 — atual",
    company: "App Facilita",
    role: "Desenvolvedor Back-End Pleno",
    description:
      "Desenvolvimento do backend de um CRM imobiliário, com APIs REST, integrações com Sienge, UAU, Informakon e Mega, processamento assíncrono via Amazon SQS, observabilidade no CloudWatch e otimização de consultas SQL.",
    tags: ["PHP", "Laravel", "Amazon SQS", "CloudWatch", "Pest"],
  },
  {
    period: "fev 2023 — fev 2025",
    company: "D3T Inovação Tecnológica",
    role: "Desenvolvedor Full Stack | PHP/Laravel",
    description:
      "Atuação full stack com foco no backend em PHP e Laravel: APIs com autenticação JWT, processamento assíncrono, WebSockets, integração com aplicações Vue.js e React Native, Docker e pipelines de CI/CD.",
    tags: ["JWT", "WebSockets", "Docker", "SonarQube", "PHPUnit"],
  },
  {
    period: "dez 2022 — dez 2023",
    company: "INNYX Tecnologia LTDA",
    role: "Desenvolvedor Full Stack | PHP/Laravel",
    description:
      "Sistemas web e APIs em Laravel, com manutenção evolutiva, MySQL e boas práticas de versionamento.",
    tags: ["Laravel", "MySQL", "Git", "APIs REST"],
  },
  {
    period: "ago 2021 — ago 2022",
    company: "Clinicarx",
    role: "Desenvolvedor Full Stack | PHP/Laravel",
    description:
      "Soluções para o setor de saúde, combinando APIs, arquitetura MVC e otimização de consultas.",
    tags: ["PHP", "Laravel", "Clean Code", "SQL"],
  },
];

const technologies = [
  ["Backend", "PHP", "Laravel", "Symfony", "CakePHP", "APIs REST", "JWT", "Jobs/Queues"],
  ["Arquitetura", "DDD", "SOLID", "Hexagonal", "Clean Code", "WebSockets"],
  ["Infraestrutura", "AWS", "CloudWatch", "Amazon SQS", "Apache Kafka", "Docker", "CI/CD"],
  ["Dados e qualidade", "MySQL", "PostgreSQL", "SQL", "Pest", "PHPUnit", "TDD", "SonarQube", "Git"],
  ["Frontend", "JavaScript", "Vue.js", "React", "React Native"],
];

const certifications = [
  "APIs Poderosas com Laravel",
  "Ambiente Docker na DigitalOcean",
  "Livewire Essencial",
  "Docker Swarm e Kubernetes",
  "Laravel e Vue.js",
];

const laravelCode = `<span class="purple">&lt;?php</span>

<span class="purple">namespace</span> <span class="white">App\\Application\\Orders</span>;

<span class="purple">use</span> <span class="white">App\\Domain\\Orders\\Order</span>;
<span class="purple">use</span> <span class="white">App\\Domain\\Orders\\OrderData</span>;
<span class="purple">use</span> <span class="white">App\\Domain\\Orders\\OrderRepository</span>;

<span class="purple">final readonly class</span> <span class="white">CreateOrder</span>
{
    <span class="purple">public function</span> <span class="green">__construct</span>(
        <span class="purple">private</span> <span class="blue">OrderRepository</span> $orders,
    ) {}

    <span class="purple">public function</span> <span class="green">execute</span>(<span class="blue">OrderData</span> $data): <span class="purple">void</span>
    {
        $order = <span class="white">Order</span>::<span class="green">fromData</span>($data);

        <span class="purple">$this</span>-&gt;orders-&gt;<span class="green">save</span>($order);
    }
}`;

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.16 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Início">
          <span className="brand-mark">&gt;_</span>
          Ionan Santos
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
            <h1>Backend que <em>integra, escala</em> e sustenta o negócio</h1>
            <p className="hero-text">
              Há 5 anos, projeto sistemas, APIs e automações que conectam processos, eliminam gargalos e fazem a tecnologia trabalhar a favor do negócio.
            </p>
            <p className="terminal-line"><span>~</span> PHP · Laravel · APIs REST · AWS <b>▋</b></p>
            <div className="hero-actions">
              <a className="button primary" href="#contato">Entrar em contato <span>→</span></a>
              <a className="button ghost" href="#experiencia">Ver trajetória <span>↓</span></a>
            </div>
            <div className="service-list">
              <div><i>▣</i><span>Backend: APIs,<br />integrações e automações</span></div>
              <div><i>♙</i><span>Full stack: sistemas web<br />sob medida</span></div>
              <div><i>◇</i><span>DevOps: Docker, filas e<br />deploy</span></div>
            </div>
          </div>
          <div className="code-wrap" aria-label="Exemplo de código">
            <div className="code-card">
              <div className="code-top"><span><i /><i /><i /></span><p>app/Application/Orders/CreateOrder.php</p></div>
              <pre><code dangerouslySetInnerHTML={{ __html: laravelCode }} /></pre>
              <div className="code-tags"><span>Laravel</span><span>Clean Code</span><span>SOLID</span><span>DDD</span></div>
            </div>
            <span className="corner c1" /><span className="corner c2" />
          </div>
        </div>
      </section>

      <section className="section about" id="sobre">
        <div className="shell two-col">
          <div className="reveal">
            <p className="eyebrow">01 / SOBRE MIM</p>
            <h2>Engenharia de software com <em>clareza</em> desde a base</h2>
          </div>
          <div className="about-copy reveal delay-1">
            <p>Minha jornada começou pela curiosidade de entender o que existe por trás de um sistema. Hoje, essa curiosidade virou um olhar atento para arquitetura, desempenho e produto.</p>
            <p>Com 5 anos de experiência profissional, atuo principalmente no backend com PHP, Laravel e APIs REST. Desenvolvo integrações entre sistemas, processamento assíncrono e soluções que sustentam operações reais.</p>
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
          <div className="section-head reveal"><div><p className="eyebrow">02 / TRAJETÓRIA</p><h2>Experiência <em>profissional</em></h2></div><p>Experiência prática desenvolvendo produtos, integrações e serviços para diferentes setores.</p></div>
          <div className="timeline">
            {experiences.map((item, index) => <article className={`experience-item reveal delay-${index + 1}`} key={item.company}>
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
          <p className="eyebrow reveal">03 / FERRAMENTAS</p>
          <h2 className="reveal delay-1">Uma stack para entregar com <em>consistência</em></h2>
          <div className="stack-grid">{technologies.map(([title, ...items], index) => <article className={`stack-card reveal delay-${index + 1}`} key={title}>
            <span>0{index + 1}</span><h3>{title}</h3><div>{items.map(item => <b key={item}>{item}</b>)}</div>
          </article>)}</div>
          <div className="credentials reveal">
            <article>
              <p className="eyebrow">FORMAÇÃO ACADÊMICA</p>
              <h3>Análise e Desenvolvimento de Sistemas</h3>
              <span>Anhanguera Educacional · Conclusão em agosto de 2025</span>
            </article>
            <article>
              <p className="eyebrow">CERTIFICAÇÕES</p>
              <div>{certifications.map((certification) => <span key={certification}>{certification}</span>)}</div>
            </article>
          </div>
        </div>
      </section>

      <section className="contact" id="contato">
        <div className="contact-glow" />
        <div className="shell contact-inner reveal">
          <p className="eyebrow">04 / CONTATO</p>
          <h2>Vamos construir algo <em>relevante?</em></h2>
          <p>Se você tem um desafio técnico, uma integração para resolver ou um produto para evoluir, vamos conversar.</p>
          <div className="contact-actions">
            <a className="button primary" href="mailto:ionans564@gmail.com">ionans564@gmail.com <span>↗</span></a>
            <a className="text-link" href="https://www.linkedin.com/in/ionan-santos" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
          </div>
        </div>
      </section>

      <footer className="shell"><span>© {new Date().getFullYear()} Ionan Santos</span><span>Desenvolvedor backend / São Luís, MA</span></footer>
    </main>
  );
}
