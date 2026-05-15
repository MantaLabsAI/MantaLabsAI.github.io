// Pages: Home

// ===== HOME =====
function HomePage({ accent }) {
  return (
    <div className="page">
      <section className="company-banner">
        <div className="inner company-banner-layout">
          <div className="company-glyph">
            <img src="assets/logos/manta-glyph-aqua.svg" alt="Manta Labs" />
          </div>
          <div className="company-banner-text">
            <span className="eyebrow">Manta Labs</span>
            <p>Precision tools for facial motion capture. Hardware and software built for the people who capture performance.</p>
          </div>
        </div>
      </section>

      <section className="hero">
        <div className="inner">
          <div>
            <span className="eyebrow dot">Manta Labs · Facial Motion Capture</span>
            <h1>Actor to artist. <em>ARK</em> in between.</h1>
            <p className="lede">
              ARK is purpose-built recording infrastructure for facial motion capture.
            </p>
            <p className="lede lede-sub">
              <em>ARK Recorder</em> is a wearable lightweight recording device — capture in your volume, at your desk or wherever production takes you.
            </p>
            <p className="lede lede-sub">
              <em>ARK Commander</em> is your motion capture command center. It provides total control of your ARK Recorder fleet and manages every aspect of your recording pipeline.
            </p>
            <div className="ctas">
              <button className="btn btn-primary" onClick={() => location.hash = '/contact'}>
                Request a demo
              </button>
              <button className="btn btn-secondary" onClick={() => location.hash = '/ark'}>
                See ARK Recorder
              </button>
            </div>
            <div className="meta">
              <span><b>SDI cameras</b> native</span>
              <span><b>USB camera</b> support</span>
              <span><b>LTC</b> sync</span>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <ProductSplit />

      <section className="stat-band stat-band-cards">
        <div className="inner">
          <div className="stat-card">
            <div className="stat-card-icon"><i data-lucide="shirt"></i></div>
            <div className="num">Wearable</div>
            <div className="label">On the actor. Lightweight, wireless, out of the way.</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-icon"><i data-lucide="radio"></i></div>
            <div className="num">Synced</div>
            <div className="label">To body mocap, to timecode, to every other device on stage.</div>
          </div>
          <div className="stat-card">
            <div className="stat-card-icon"><i data-lucide="layout-dashboard"></i></div>
            <div className="num">Managed</div>
            <div className="label">From one screen. Armed, recorded, ingested, named.</div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

function ProductSplit() {
  const go = (p) => () => { location.hash = p; };
  return (
    <section className="product-split">
      <div className="head">
        <span className="eyebrow">Two products. One platform.</span>
        <h2>A recorder small enough to wear. Software powerful enough to run the stage.</h2>
        <p>Each ARK Recorder can be self-contained — record, monitor, and pull footage from its built-in interface. ARK Commander brings the studio layer: project hierarchy, fleet-wide sync, automated file naming and record triggers to any of your mocap systems.</p>
      </div>
      <div className="grid">
        <div className="product-card">
          <span className="pkind">Hardware · ARK Recorder</span>
          <h3>On-body recording for facial performance capture.</h3>
          <p className="tagline">Captures headcam footage directly to internal storage — on the actor without worrying about wireless interruption. Works standalone via its built-in web interface or network control under ARK Commander.</p>
          <div className="visual">
            <div style={{position:'absolute', inset:0, background:'var(--c-deep-navy)', overflow:'hidden', borderRadius:'inherit', display:'flex', alignItems:'center', justifyContent:'center'}}>
              <img src="assets/photos/OBR_bebob_nobackground.webp" alt="ARK Recorder with Bebob A45 battery" style={{width:'100%', height:'100%', objectFit:'cover'}} />
            </div>
          </div>
          <div className="footer-row">
            <div className="specs">
              <span><b>SDI cameras</b></span>
              <span><b>SDI / USB</b></span>
              <span><b>LTC sync</b></span>
            </div>
            <button className="more" onClick={go('/ark')}>
              Explore ARK Recorder <i data-lucide="arrow-right"></i>
            </button>
          </div>
        </div>

        <div className="product-card">
          <span className="pkind">Software · ARK Commander</span>
          <h3>Fleet control, project management, and trigger sync.</h3>
          <p className="tagline">Arm, record, monitor, and ingest from every ARK Recorder on stage. Manage Projects, Sessions, Shots, and Takes. Send and receive record triggers to body mocap systems.</p>
          <div className="visual">
            <CommanderPreview />
          </div>
          <div className="footer-row">
            <div className="specs">
              <span><b>macOS · Win</b></span>
              <span><b>LTC sync</b></span>
              <span><b>Record triggers</b></span>
            </div>
            <button className="more" onClick={go('/commander')}>
              Explore Commander <i data-lucide="arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ARK device illustration (small, for product card)
function ArkDeviceCard() {
  return (
    <div style={{position:'absolute', inset:0}}>
      <div className="grid-bg" style={{
        position:'absolute', inset:0,
        backgroundImage:'linear-gradient(rgba(73,197,182,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(73,197,182,0.05) 1px, transparent 1px)',
        backgroundSize:'24px 24px',
        maskImage:'radial-gradient(60% 60% at 50% 50%, #000 30%, transparent 80%)'
      }}></div>
      <div style={{position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center'}}>
        <ArkSVG />
      </div>
      <div style={{position:'absolute', left:14, top:14, font:'400 11px/1 JetBrains Mono', color:'#49C5B6', letterSpacing:'0.06em'}}>ARK RECORDER</div>
      <div style={{position:'absolute', right:14, bottom:14, font:'400 11px/1 JetBrains Mono', color:'#5A6B82', letterSpacing:'0.06em'}}>ON-BODY · SDI CAMERAS</div>
    </div>
  );
}

function ArkSVG() {
  return (
    <svg viewBox="0 0 320 220" width="62%" height="auto" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="arkBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0E97A6" stopOpacity="0.55"/>
          <stop offset="100%" stopColor="#054450" stopOpacity="0.65"/>
        </linearGradient>
        <linearGradient id="arkHi" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#49C5B6" stopOpacity="0"/>
          <stop offset="50%" stopColor="#49C5B6" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#49C5B6" stopOpacity="0"/>
        </linearGradient>
      </defs>
      {/* Body */}
      <rect x="40" y="40" width="240" height="140" rx="14" fill="url(#arkBody)" stroke="#49C5B6" strokeOpacity="0.5" strokeWidth="1.5"/>
      {/* Top edge highlight */}
      <rect x="44" y="44" width="232" height="2" rx="1" fill="url(#arkHi)"/>
      {/* Display */}
      <rect x="60" y="60" width="120" height="60" rx="6" fill="#0B1326" stroke="#49C5B6" strokeOpacity="0.4" strokeWidth="1"/>
      <text x="70" y="78" fill="#49C5B6" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1.2">REC · A03</text>
      <text x="70" y="98" fill="#F4F7FB" fontFamily="Syne, sans-serif" fontSize="20" fontWeight="700" letterSpacing="-0.5">02:34</text>
      <text x="70" y="113" fill="#B6C2D6" fontFamily="JetBrains Mono, monospace" fontSize="7" letterSpacing="1">SDI · 4K · 23.976</text>
      {/* Status LEDs row */}
      <circle cx="200" cy="68" r="4" fill="#E26A6A"/>
      <circle cx="214" cy="68" r="4" fill="#49C5B6" opacity="0.85"/>
      <circle cx="228" cy="68" r="4" fill="#5A6B82" opacity="0.4"/>
      <circle cx="242" cy="68" r="4" fill="#5A6B82" opacity="0.4"/>
      <text x="200" y="86" fill="#5A6B82" fontFamily="JetBrains Mono, monospace" fontSize="6" letterSpacing="1">REC SYNC NET BAT</text>
      {/* Knob */}
      <circle cx="220" cy="110" r="14" fill="#060B1A" stroke="#49C5B6" strokeOpacity="0.4" strokeWidth="1"/>
      <circle cx="220" cy="110" r="5" fill="#49C5B6"/>
      <line x1="220" y1="110" x2="220" y2="100" stroke="#0B1326" strokeWidth="2" strokeLinecap="round"/>
      {/* Buttons */}
      <rect x="248" y="100" width="20" height="20" rx="4" fill="#0B1326" stroke="#49C5B6" strokeOpacity="0.4" strokeWidth="1"/>
      <circle cx="258" cy="110" r="4" fill="#E26A6A"/>
      {/* Bottom port row */}
      <rect x="60" y="142" width="44" height="22" rx="3" fill="#060B1A" stroke="#49C5B6" strokeOpacity="0.3"/>
      <text x="62" y="154" fill="#5A6B82" fontFamily="JetBrains Mono, monospace" fontSize="6" letterSpacing="0.5">SDI IN</text>
      <rect x="112" y="142" width="44" height="22" rx="3" fill="#060B1A" stroke="#49C5B6" strokeOpacity="0.3"/>
      <text x="114" y="154" fill="#5A6B82" fontFamily="JetBrains Mono, monospace" fontSize="6" letterSpacing="0.5">USB-C</text>
      <rect x="164" y="142" width="44" height="22" rx="3" fill="#060B1A" stroke="#49C5B6" strokeOpacity="0.3"/>
      <text x="166" y="154" fill="#5A6B82" fontFamily="JetBrains Mono, monospace" fontSize="6" letterSpacing="0.5">LTC IN</text>
      <rect x="216" y="142" width="60" height="22" rx="3" fill="#060B1A" stroke="#49C5B6" strokeOpacity="0.3"/>
      <text x="220" y="154" fill="#5A6B82" fontFamily="JetBrains Mono, monospace" fontSize="6" letterSpacing="0.5">CHG · 12V</text>
      {/* Strap loops */}
      <rect x="20" y="80" width="20" height="60" rx="4" fill="none" stroke="#49C5B6" strokeOpacity="0.3" strokeWidth="1"/>
      <rect x="280" y="80" width="20" height="60" rx="4" fill="none" stroke="#49C5B6" strokeOpacity="0.3" strokeWidth="1"/>
    </svg>
  );
}

function CommanderPreview() {
  // mini commander interface inside product card visual
  return (
    <div style={{position:'absolute', inset:0, display:'flex', flexDirection:'column'}}>
      <div style={{display:'flex', alignItems:'center', gap:8, padding:'10px 14px', borderBottom:'1px solid var(--border)', background:'rgba(11,19,38,0.6)'}}>
        <div style={{display:'flex', gap:5}}>
          <span style={{width:8, height:8, borderRadius:999, background:'var(--c-tide)'}}></span>
          <span style={{width:8, height:8, borderRadius:999, background:'var(--c-tide)'}}></span>
          <span style={{width:8, height:8, borderRadius:999, background:'var(--c-tide)'}}></span>
        </div>
        <span style={{font:'500 11px/1 var(--font-body)', color:'var(--fg-muted)', marginLeft:6}}>ARK Commander · Project Alpha</span>
        <span style={{marginLeft:'auto', font:'400 10px/1 var(--font-mono)', color:'var(--c-aqua)'}}>01:23:45:12</span>
      </div>
      <div style={{flex:1, padding:10, display:'flex', flexDirection:'column', gap:6}}>
        {[
          {name:'A01 · KIRA', state:'rec', tc:'02:34', bat:'87%'},
          {name:'A02 · DESH', state:'rec', tc:'02:34', bat:'92%'},
          {name:'A03 · MARI', state:'rec', tc:'02:34', bat:'74%'},
          {name:'A04 · TOMI', state:'idle', tc:'—', bat:'100%'},
          {name:'A05 · NORA', state:'warn', tc:'02:34', bat:'12%'},
        ].map((d,i)=>(
          <div key={i} style={{
            display:'grid', gridTemplateColumns:'1fr 60px 50px 56px', gap:8, alignItems:'center',
            padding:'7px 10px', borderRadius:6,
            border:'1px solid var(--border)',
            background:'rgba(11,19,38,0.4)',
            font:'400 11px/1 var(--font-mono)'
          }}>
            <span style={{display:'flex', alignItems:'center', gap:8, color:'var(--fg)'}}>
              <span style={{
                width:6, height:6, borderRadius:999,
                background: d.state==='idle' ? 'var(--fg-subtle)' : d.state==='warn' ? '#E9A24B' : 'var(--c-aqua)',
                boxShadow: d.state==='idle' ? 'none' : `0 0 6px ${d.state==='warn'?'#E9A24B':'var(--c-aqua)'}`
              }}></span>
              {d.name}
            </span>
            <span style={{color:'var(--fg-muted)'}}>{d.tc}</span>
            <span style={{color: d.state==='warn'?'#E9A24B':'var(--fg-muted)'}}>{d.bat}</span>
            <span style={{
              justifySelf:'end', fontSize:9, padding:'3px 7px', borderRadius:999, letterSpacing:'0.08em', fontWeight:700,
              background: d.state==='rec' ? 'rgba(226,106,106,0.15)' : d.state==='warn' ? 'rgba(233,162,75,0.15)' : 'rgba(255,255,255,0.05)',
              color: d.state==='rec' ? '#E26A6A' : d.state==='warn' ? '#E9A24B' : 'var(--fg-subtle)'
            }}>{d.state.toUpperCase()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CTASection() {
  return (
    <section className="cta-section">
      <div className="inner">
        <h2>Ready to see it on your stage?</h2>
        <p>Tell us about your headcam setup, your stage, and your pipeline. We'll come back with a configuration and a date for a demo.</p>
        <div className="ctas">
          <button className="btn btn-primary" onClick={() => location.hash = '/contact'}>Request a demo</button>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { HomePage, ProductSplit, ArkSVG, ArkDeviceCard, CommanderPreview, CTASection });
