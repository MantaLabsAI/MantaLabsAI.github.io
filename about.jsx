// About page

function AboutPage() {
  return (
    <div className="page">
      <section className="p-hero">
        <div className="inner" style={{gridTemplateColumns: '1fr'}}>
          <div>
            <span className="eyebrow dot">Company</span>
            <h1>Tools that move with the <em>artist.</em></h1>
            <p className="lede">
              Manta Labs builds recording infrastructure and production software for facial motion capture. We exist to give performers, animators, and technical artists tools that respect the craft — precise, reliable, and invisible when they need to be.
            </p>
          </div>
        </div>
      </section>

      <section className="section tinted">
        <div className="container">
          <div className="head">
            <span className="eyebrow">What we do</span>
            <h2>Hardware and software for the headcam pipeline.</h2>
          </div>
          <div style={{maxWidth:'65ch'}}>
            <p style={{font:'var(--type-body-lg)', color:'var(--fg-muted)', marginBottom:24}}>
              Facial motion capture has a recording problem. The cameras are small and wearable — but the recording infrastructure behind them hasn't kept up. Wireless transmitters interfere with set networks, limit device counts, and put the take at risk every time a link drops.
            </p>
            <p style={{font:'var(--type-body-lg)', color:'var(--fg-muted)', marginBottom:24}}>
              Manta Labs builds ARK — a platform that records at the source, on the actor's body, and manages the entire fleet from one screen. The master file never depends on the network. The take is never at risk.
            </p>
            <p style={{font:'var(--type-body-lg)', color:'var(--fg-muted)', marginBottom:0}}>
              ARK Recorder is a purpose-built custom system, not repurposed from off-the-shelf hardware that's too big for the actor. Designed to be compact yet powerful, allowing ARK to grow with your stage and expand with new on-device capabilities over time.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head">
            <span className="eyebrow">Who we serve</span>
            <h2>Built for the people who build the worlds.</h2>
          </div>
          <div className="feature-grid">
            <Feature icon="clapperboard" title="Motion capture studios">Stage operators, solving artists, and pipeline engineers running multi-actor facial capture sessions day after day.</Feature>
            <Feature icon="gamepad-2" title="Games studios">Character teams, technical animators, and performance capture departments looking for the best quality solutions.</Feature>
            <Feature icon="film" title="Production companies">Virtual production supervisors, animation directors, and previs teams on episodic and feature work.</Feature>
          </div>
        </div>
      </section>

      <section className="section tinted">
        <div className="container">
          <div className="head">
            <span className="eyebrow">What we believe</span>
            <h2>The artist is the protagonist.</h2>
          </div>
          <div style={{maxWidth:'65ch'}}>
            <p style={{font:'var(--type-body-lg)', color:'var(--fg-muted)', marginBottom:24}}>
              We believe the people who animate, perform, and direct deserve tools that meet them at the level of their craft. Technology handles the process. The artist handles the craft.
            </p>
            <p style={{font:'var(--type-body-lg)', color:'var(--fg-muted)', marginBottom:0}}>
              We don't ship black boxes. We don't call generated output "creativity." We build instruments — precise, transparent, and designed to disappear into the workflow so the performance stays in focus.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="head center">
            <span className="eyebrow">Get in touch</span>
            <h2>We'd like to hear from you.</h2>
            <p>Whether you're evaluating ARK for your stage, interested in integration, or just want to talk about the future of facial capture — reach out.</p>
          </div>
          <div style={{display:'flex', justifyContent:'center', gap:14, flexWrap:'wrap'}}>
            <button className="btn btn-primary" onClick={() => location.hash = '/contact'}>Contact us</button>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { AboutPage });
