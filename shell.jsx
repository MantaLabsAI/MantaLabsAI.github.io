// Manta Labs · ARK platform website
// Shared components: Nav, Footer, decorative visuals.

const { useState, useEffect, useRef } = React;

// ===== ROUTING (simple hash-driven) =====
function useRoute() {
  const get = () => (location.hash || '#/home').replace(/^#/, '');
  const [route, setRoute] = useState(get());
  useEffect(() => {
    const onHash = () => { setRoute(get()); window.scrollTo({ top: 0, behavior: 'instant' }); };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return [route, (r) => { location.hash = r; }];
}

// ===== NAV =====
const MANTA_GLYPH = (typeof window !== 'undefined' && window.__resources && window.__resources.mantaGlyph) || 'assets/logos/manta-glyph-aqua.svg';

function Nav({ route, accentLevel }) {
  const [open, setOpen] = useState(false);
  const isActive = (path) => route === path || (path !== '/home' && route.startsWith(path));
  useEffect(() => { setOpen(false); }, [route]);
  useEffect(() => { if (window.lucide) lucide.createIcons(); });
  const go = (path) => (e) => { e.preventDefault(); location.hash = path; };
  return (
    <>
      <nav className="nav">
        <a href="#/home" onClick={go('/home')} className="brand">
          <img src={MANTA_GLYPH} alt="" />
          <span>MANTA<span className="labs">LABS</span></span>
        </a>
        <ul className="links">
          <li><a onClick={go('/ark')} className={isActive('/ark') && !route.startsWith('/commander') ? 'active' : ''}>ARK Recorder</a></li>
          <li><a onClick={go('/commander')} className={isActive('/commander') ? 'active' : ''}>ARK Commander</a></li>
        </ul>
        <div className="spacer"></div>
        <a className="sign-in" onClick={go('/contact')}>Contact</a>
        <button className="cta" onClick={go('/contact')}>Request a demo</button>
        <button className="menu-btn" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <i data-lucide={open ? 'x' : 'menu'}></i>
        </button>
      </nav>
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <a onClick={go('/home')}>Home</a>
        <a onClick={go('/ark')}>ARK Recorder</a>
        <a onClick={go('/commander')}>ARK Commander</a>
        <a onClick={go('/contact')}>Contact</a>
        <button className="mobile-cta" onClick={go('/contact')}>Request a demo</button>
      </div>
    </>
  );
}

// ===== FOOTER =====
function Footer() {
  return (
    <footer className="footer">
      <div className="grid">
        <div className="brand-col">
          <a className="lockup" href="#/home" onClick={(e)=>{e.preventDefault();location.hash='/home';}}>
            <img src={MANTA_GLYPH} alt="" />
            <span>MANTA<span className="labs">LABS</span></span>
          </a>
          <p>Purpose-built recording infrastructure for facial motion capture.</p>
        </div>
        <div>
          <h5>Products</h5>
          <ul>
            <li><a href="#/ark">ARK Recorder</a></li>
            <li><a href="#/commander">ARK Commander</a></li>
          </ul>
        </div>
        <div>
          <h5>Company</h5>
          <ul>
            <li><a href="#/about">About</a></li>
            <li><a href="#/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="bottom">
        <span>© 2026 Manta Labs, Inc.</span>
        <span>Shipping June 2026</span>
      </div>
    </footer>
  );
}

// ===== HERO VISUAL =====
function HeroVisual() {
  return (
    <div className="viz split-hero">
      <div className="split-half split-hardware">
        <img src="assets/photos/OBR_on.jpg" alt="ARK Recorder prototype" />
        <div className="split-label">ARK Recorder</div>
      </div>
      <div className="split-divider"></div>
      <div className="split-half split-software">
        <div className="split-commander">
          <div style={{display:'flex', alignItems:'center', gap:6, padding:'8px 12px', borderBottom:'1px solid var(--border)', background:'rgba(11,19,38,0.6)'}}>
            <div style={{display:'flex', gap:4}}>
              <span style={{width:6, height:6, borderRadius:999, background:'var(--c-tide)'}}></span>
              <span style={{width:6, height:6, borderRadius:999, background:'var(--c-tide)'}}></span>
              <span style={{width:6, height:6, borderRadius:999, background:'var(--c-tide)'}}></span>
            </div>
            <span style={{font:'500 9px/1 var(--font-body)', color:'var(--fg-muted)', marginLeft:4}}>ARK Commander</span>
            <span style={{marginLeft:'auto', font:'400 8px/1 var(--font-mono)', color:'var(--c-aqua)'}}>01:23:45:12</span>
          </div>
          <div style={{padding:8, display:'flex', flexDirection:'column', gap:4}}>
            {[
              {name:'A01 · KIRA', state:'rec'},
              {name:'A02 · DESH', state:'rec'},
              {name:'A03 · MARI', state:'rec'},
              {name:'A04 · TOMI', state:'idle'},
              {name:'A05 · NORA', state:'warn'},
            ].map((d,i)=>(
              <div key={i} style={{
                display:'flex', alignItems:'center', gap:6,
                padding:'5px 8px', borderRadius:4,
                border:'1px solid var(--border)',
                background:'rgba(11,19,38,0.4)',
                font:'400 9px/1 var(--font-mono)'
              }}>
                <span style={{
                  width:5, height:5, borderRadius:999,
                  background: d.state==='idle' ? 'var(--fg-subtle)' : d.state==='warn' ? '#E9A24B' : 'var(--c-aqua)',
                  boxShadow: d.state==='idle' ? 'none' : `0 0 4px ${d.state==='warn'?'#E9A24B':'var(--c-aqua)'}`
                }}></span>
                <span style={{color:'var(--fg)'}}>{d.name}</span>
                <span style={{
                  marginLeft:'auto', fontSize:7, padding:'2px 5px', borderRadius:999, letterSpacing:'0.06em', fontWeight:700,
                  background: d.state==='rec' ? 'rgba(226,106,106,0.15)' : d.state==='warn' ? 'rgba(233,162,75,0.15)' : 'rgba(255,255,255,0.05)',
                  color: d.state==='rec' ? '#E26A6A' : d.state==='warn' ? '#E9A24B' : 'var(--fg-subtle)'
                }}>{d.state==='warn' ? 'LOW' : d.state.toUpperCase()}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="split-label">ARK Commander</div>
      </div>
    </div>
  );
}

// Stylized headcam silhouette — line-art, no photographic detail.
function HeadcamSVG() {
  return (
    <svg viewBox="0 0 400 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="hcGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#49C5B6" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#0684C9" stopOpacity="0.7"/>
        </linearGradient>
      </defs>
      {/* Head silhouette */}
      <path d="M 130 120 Q 130 60 200 60 Q 270 60 270 130 L 268 180 Q 264 220 248 240 Q 232 260 200 264 Q 168 260 152 240 Q 136 220 132 180 Z"
            stroke="url(#hcGrad)" strokeWidth="1.5" fill="rgba(73,197,182,0.04)"/>
      {/* Headcam crown band */}
      <path d="M 116 100 Q 200 70 284 100 L 286 116 Q 200 86 114 116 Z" stroke="#49C5B6" strokeWidth="1.5" fill="rgba(73,197,182,0.08)"/>
      {/* Camera arm */}
      <path d="M 112 110 Q 80 130 70 170 Q 65 200 80 230" stroke="#49C5B6" strokeWidth="1.5" fill="none"/>
      <path d="M 80 230 L 110 240 L 110 222 L 80 212 Z" stroke="#49C5B6" strokeWidth="1.5" fill="rgba(73,197,182,0.10)"/>
      {/* Lens */}
      <circle cx="118" cy="231" r="9" stroke="#49C5B6" strokeWidth="1.5" fill="rgba(73,197,182,0.18)"/>
      <circle cx="118" cy="231" r="4" fill="#49C5B6"/>
      {/* Cable */}
      <path d="M 100 215 Q 50 240 40 285" stroke="#0684C9" strokeWidth="1.2" strokeDasharray="2 4" fill="none"/>
      {/* Marker dots on face */}
      {[
        [185,140],[200,140],[215,140],
        [180,160],[200,158],[220,160],
        [185,180],[215,180],
        [195,200],[205,200],
        [185,220],[200,220],[215,220],
      ].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="2.2" fill="#49C5B6"/>
      ))}
      {/* ARK Recorder device on chest */}
      <rect x="320" y="200" width="60" height="44" rx="6" stroke="#49C5B6" strokeWidth="1.5" fill="rgba(11,130,143,0.20)"/>
      <rect x="328" y="208" width="22" height="14" rx="2" fill="rgba(73,197,182,0.15)" stroke="rgba(73,197,182,0.4)" strokeWidth="0.8"/>
      <circle cx="370" cy="215" r="2" fill="#49C5B6"/>
      <text x="328" y="238" fill="#49C5B6" fontFamily="JetBrains Mono, monospace" fontSize="7" letterSpacing="1">ARK</text>
      {/* Connection */}
      <path d="M 40 285 Q 200 295 322 222" stroke="#49C5B6" strokeWidth="1" strokeDasharray="3 4" fill="none" opacity="0.7"/>
    </svg>
  );
}

Object.assign(window, { useRoute, Nav, Footer, HeroVisual, HeadcamSVG });
