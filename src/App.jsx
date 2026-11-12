const features = [
  {
    title: 'Generate product ideas',
    description: 'Turn rough concepts into polished product requirements and implementation plans.',
    icon: '✦',
  },
  {
    title: 'Build with AI',
    description: 'Create landing pages, dashboards, and workflows from simple prompts and examples.',
    icon: '⚡',
  },
  {
    title: 'Ship faster',
    description: 'Move from brainstorm to working app with reusable prompts and production-ready code.',
    icon: '🚀',
  },
]

const stats = [
  { value: '12x', label: 'faster product iteration' },
  { value: '3.4k', label: 'teams using CodeBuddy' },
  { value: '99.9%', label: 'reliable deploys' },
]

const plans = [
  {
    name: 'Starter',
    price: '$29',
    description: 'For freelancers and early-stage builders',
    highlight: false,
    features: ['Unlimited AI prompts', 'Project workspace', '3 live deploys', 'Email support'],
  },
  {
    name: 'Pro',
    price: '$79',
    description: 'For product teams shipping weekly',
    highlight: true,
    features: ['Everything in Starter', 'Advanced AI agents', 'Unlimited deploys', 'Priority support'],
  },
  {
    name: 'Scale',
    price: '$199',
    description: 'For orgs building at scale',
    highlight: false,
    features: ['Private workspaces', 'Custom integrations', 'Team analytics', 'Dedicated onboarding'],
  },
]

function App() {
  return (
    <div className="page-shell">
      <header className="topbar container">
        <div className="brand">
          <span className="brand-mark">CB</span>
          <span>CodeBuddy</span>
        </div>

        <nav className="nav">
          <a href="#features">Features</a>
          <a href="#workflow">Workflow</a>
          <a href="#pricing">Pricing</a>
          <a href="#docs">Docs</a>
        </nav>

        <div className="actions">
          <button className="ghost-btn">Sign in</button>
          <button className="primary-btn">Start building</button>
        </div>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-copy">
            <span className="eyebrow">AI product studio</span>
            <h1>Build, ship, and scale ideas with an AI coding partner.</h1>
            <p>
              Transform product ideas into live experiences with AI-assisted design,
              development, previews, and deployment workflows in one workspace.
            </p>

            <div className="hero-actions">
              <button className="primary-btn large">Try CodeBuddy</button>
              <button className="ghost-btn large">Book demo</button>
            </div>

            <div className="social-proof">
              <span>Trusted by teams building at</span>
              <div className="logos">
                <span>Nova</span>
                <span>Flow</span>
                <span>Skylab</span>
                <span>Northstar</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="window-card">
              <div className="window-bar">
                <span className="dot red" />
                <span className="dot orange" />
                <span className="dot green" />
              </div>

              <div className="workspace-grid">
                <aside className="sidebar-panel">
                  <div className="sidebar-label">Workspace</div>
                  <ul>
                    <li className="active">Product brief</li>
                    <li>Frontend</li>
                    <li>Database</li>
                    <li>Deployments</li>
                  </ul>
                </aside>

                <div className="main-panel">
                  <div className="prompt-box">
                    <span className="prompt-tag">AI</span>
                    <p>Generate a SaaS onboarding flow with analytics cards and pricing blocks.</p>
                  </div>

                  <div className="editor-preview">
                    <div className="code-header">
                      <span>app/page.tsx</span>
                      <span className="status-pill">Ready</span>
                    </div>
                    <pre>{`export default function App() {
  return (
    <Dashboard />
  )
}`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="stats container" aria-label="Key product metrics">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </section>

        <section id="features" className="features container">
          <div className="section-header">
            <span className="eyebrow">Why teams choose CodeBuddy</span>
            <h2>Everything you need to turn ideas into digital products.</h2>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="workflow" className="workflow container">
          <div className="section-header left">
            <span className="eyebrow">Workflow</span>
            <h2>From concept to launch in a single flow.</h2>
          </div>

          <div className="workflow-steps">
            <div className="step-card">
              <span>01</span>
              <h3>Describe your idea</h3>
              <p>Give the AI your vision, target users, and business goals.</p>
            </div>
            <div className="step-card">
              <span>02</span>
              <h3>Generate the product</h3>
              <p>Build landing pages, flows, dashboards, and app logic with AI.</p>
            </div>
            <div className="step-card">
              <span>03</span>
              <h3>Preview and deploy</h3>
              <p>Test in real time, iterate quickly, and publish when ready.</p>
            </div>
          </div>
        </section>

        <section id="pricing" className="pricing container">
          <div className="section-header">
            <span className="eyebrow">Pricing</span>
            <h2>Simple plans for builders at every stage.</h2>
          </div>

          <div className="plan-grid">
            {plans.map((plan) => (
              <article key={plan.name} className={`plan-card ${plan.highlight ? 'featured' : ''}`}>
                <div className="plan-top">
                  <h3>{plan.name}</h3>
                  {plan.highlight && <span className="popular">Popular</span>}
                </div>
                <div className="plan-price">
                  <strong>{plan.price}</strong>
                  <span>/mo</span>
                </div>
                <p>{plan.description}</p>
                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <button className={plan.highlight ? 'primary-btn large' : 'ghost-btn large'}>
                  Choose plan
                </button>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="docs" className="footer container">
        <div>
          <div className="brand footer-brand">
            <span className="brand-mark">CB</span>
            <span>CodeBuddy</span>
          </div>
        </div>

        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#workflow">Workflow</a>
          <a href="#pricing">Pricing</a>
          <a href="#docs">Docs</a>
        </div>
      </footer>
    </div>
  )
}

export default App
