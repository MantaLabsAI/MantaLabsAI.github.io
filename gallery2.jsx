// Gallery 2 — Stylized SVG product illustrations of ARK Recorder
// Inspired by Tentacle Sync's clean vector product graphics
// Based on real prototype: black anodized enclosure, dual SMA antennas,
// OLED display, green status button, BNC SDI connectors, USB-C, ventilation slots

function Gallery2Page() {
  return (
    <div className="page">
      <section className="p-hero" style={{paddingBottom: 48}}>
        <div className="inner" style={{gridTemplateColumns: '1fr'}}>
          <div>
            <span className="eyebrow dot">Prototype · Stylized</span>
            <h1>ARK Recorder <em>illustrated.</em></h1>
            <p className="lede">
              Vector product illustrations based on the real prototype hardware. Clean, technical, brand-native.
            </p>
          </div>
        </div>
      </section>

      {/* Front 3/4 view — the hero illustration */}
      <section className="section tinted">
        <div className="container">
          <div className="head center">
            <span className="eyebrow">Front 3/4 view</span>
            <h2>The primary product illustration</h2>
          </div>
          <div className="g2-frame">
            <ArkIllustrationFront />
          </div>
        </div>
      </section>

      {/* Port detail — front face */}
      <section className="section">
        <div className="container">
          <div className="head center">
            <span className="eyebrow">Front panel</span>
            <h2>Ports and controls</h2>
          </div>
          <div className="g2-frame wide">
            <ArkPortDiagram />
          </div>
        </div>
      </section>

      {/* With battery */}
      <section className="section tinted">
        <div className="container">
          <div className="head center">
            <span className="eyebrow">Power options</span>
            <h2>With Bebob A45 battery</h2>
            <p>External Bebob A45 via D-tap gives 2h30m. The A98 gives over 5 hours of continuous recording.</p>
          </div>
          <div className="g2-frame">
            <ArkWithBattery />
          </div>
        </div>
      </section>

      {/* Exploded / callout view */}
      <section className="section">
        <div className="container">
          <div className="head center">
            <span className="eyebrow">Feature callouts</span>
            <h2>What's on the device</h2>
          </div>
          <div className="g2-frame wide">
            <ArkCalloutView />
          </div>
        </div>
      </section>
    </div>
  );
}

// ===== FRONT 3/4 ILLUSTRATION =====
function ArkIllustrationFront() {
  return (
    <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="g2-svg">
      <defs>
        <linearGradient id="g2body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2A2A2A"/>
          <stop offset="100%" stopColor="#1A1A1A"/>
        </linearGradient>
        <linearGradient id="g2top" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#333"/>
          <stop offset="100%" stopColor="#222"/>
        </linearGradient>
        <linearGradient id="g2side" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1A1A1A"/>
          <stop offset="100%" stopColor="#111"/>
        </linearGradient>
        <linearGradient id="g2glow" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#49C5B6" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#49C5B6" stopOpacity="0"/>
        </linearGradient>
      </defs>

      {/* Subtle glow underneath */}
      <ellipse cx="300" cy="360" rx="180" ry="20" fill="url(#g2glow)" opacity="0.5"/>

      {/* Main body — 3/4 perspective */}
      {/* Right side face */}
      <path d="M 380 140 L 520 170 L 520 310 L 380 330 Z" fill="url(#g2side)" stroke="#49C5B6" strokeOpacity="0.2" strokeWidth="1"/>
      {/* Ventilation slots on right side */}
      {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => (
        <line key={`vent${i}`} x1={395 + i*10} y1={180 + i*1.2} x2={395 + i*10} y2={300 + i*1.2} stroke="#49C5B6" strokeOpacity="0.08" strokeWidth="1"/>
      ))}

      {/* Top face */}
      <path d="M 120 110 L 380 140 L 520 170 L 260 140 Z" fill="url(#g2top)" stroke="#49C5B6" strokeOpacity="0.15" strokeWidth="1"/>
      {/* Fan vent circle on top */}
      <ellipse cx="300" cy="138" rx="22" ry="8" fill="none" stroke="#49C5B6" strokeOpacity="0.2" strokeWidth="0.8"/>

      {/* Front face */}
      <path d="M 120 110 L 380 140 L 380 330 L 120 300 Z" fill="url(#g2body)" stroke="#49C5B6" strokeOpacity="0.25" strokeWidth="1"/>

      {/* Antennas */}
      {/* Antenna 1 */}
      <rect x="420" y="80" width="8" height="70" rx="4" fill="#222" stroke="#49C5B6" strokeOpacity="0.3" strokeWidth="0.8"/>
      <circle cx="424" cy="80" r="4" fill="#B8860B" stroke="#49C5B6" strokeOpacity="0.2"/>
      {/* SMA base */}
      <rect x="418" y="148" width="12" height="8" rx="2" fill="#B8860B" opacity="0.8"/>

      {/* Antenna 2 */}
      <rect x="470" y="90" width="8" height="65" rx="4" fill="#222" stroke="#49C5B6" strokeOpacity="0.3" strokeWidth="0.8"/>
      <circle cx="474" cy="90" r="4" fill="#B8860B" stroke="#49C5B6" strokeOpacity="0.2"/>
      <rect x="468" y="153" width="12" height="8" rx="2" fill="#B8860B" opacity="0.8"/>

      {/* OLED Display */}
      <rect x="280" y="180" width="80" height="40" rx="3" fill="#0B1326" stroke="#49C5B6" strokeOpacity="0.4" strokeWidth="1"/>
      <text x="290" y="196" fill="#49C5B6" fontFamily="JetBrains Mono, monospace" fontSize="7" letterSpacing="0.8">CPU: 45C</text>
      <text x="290" y="207" fill="#49C5B6" fontFamily="JetBrains Mono, monospace" fontSize="7" letterSpacing="0.8">GPU: 70C 28%</text>
      <text x="290" y="218" fill="#B6C2D6" fontFamily="JetBrains Mono, monospace" fontSize="6" letterSpacing="0.8">Bat1: 3.4V Bat2: 0</text>

      {/* Green status button */}
      <rect x="248" y="190" width="18" height="18" rx="3" fill="#1A3A1A" stroke="#22C55E" strokeWidth="1.5"/>
      <rect x="252" y="194" width="10" height="10" rx="2" fill="#22C55E" opacity="0.9"/>

      {/* Control buttons (right of display) */}
      <circle cx="375" cy="192" r="8" fill="#1A1A1A" stroke="#49C5B6" strokeOpacity="0.3" strokeWidth="0.8"/>
      <circle cx="375" cy="215" r="8" fill="#1A1A1A" stroke="#49C5B6" strokeOpacity="0.3" strokeWidth="0.8"/>

      {/* USB-C port */}
      <rect x="145" y="240" width="22" height="10" rx="5" fill="#0B1326" stroke="#49C5B6" strokeOpacity="0.4" strokeWidth="0.8"/>
      <text x="143" y="262" fill="#5A6B82" fontFamily="JetBrains Mono, monospace" fontSize="5" letterSpacing="0.5">USB-C</text>

      {/* BNC SDI connectors */}
      <circle cx="200" cy="245" r="10" fill="#0B1326" stroke="#B8860B" strokeWidth="1.2"/>
      <circle cx="200" cy="245" r="4" fill="#B8860B" opacity="0.6"/>
      <text x="188" y="265" fill="#5A6B82" fontFamily="JetBrains Mono, monospace" fontSize="5" letterSpacing="0.5">SDI</text>

      <circle cx="235" cy="247" r="10" fill="#0B1326" stroke="#B8860B" strokeWidth="1.2"/>
      <circle cx="235" cy="247" r="4" fill="#B8860B" opacity="0.6"/>
      <text x="223" y="267" fill="#5A6B82" fontFamily="JetBrains Mono, monospace" fontSize="5" letterSpacing="0.5">LTC</text>

      {/* Status LED indicator */}
      <circle cx="175" cy="200" r="3" fill="#49C5B6" opacity="0.8"/>

      {/* Label */}
      <text x="130" y="320" fill="#49C5B6" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1.5" opacity="0.6">ARK RECORDER</text>
    </svg>
  );
}

// ===== PORT DIAGRAM =====
function ArkPortDiagram() {
  return (
    <svg viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="g2-svg">
      {/* Device front face — flat orthographic */}
      <rect x="100" y="50" width="600" height="200" rx="8" fill="#1A1A1A" stroke="#49C5B6" strokeOpacity="0.3" strokeWidth="1.5"/>

      {/* USB-C port 1 */}
      <rect x="140" y="130" width="30" height="14" rx="7" fill="#0B1326" stroke="#49C5B6" strokeOpacity="0.5" strokeWidth="1"/>
      {/* USB-C port 2 */}
      <rect x="190" y="130" width="30" height="14" rx="7" fill="#0B1326" stroke="#49C5B6" strokeOpacity="0.5" strokeWidth="1"/>

      {/* Status LED */}
      <circle cx="245" cy="137" r="4" fill="#49C5B6" opacity="0.7"/>

      {/* BNC connector 1 (SDI) */}
      <circle cx="310" cy="137" r="16" fill="#0B1326" stroke="#B8860B" strokeWidth="1.5"/>
      <circle cx="310" cy="137" r="6" fill="#B8860B" opacity="0.5"/>
      <circle cx="310" cy="137" r="2.5" fill="#B8860B"/>

      {/* BNC connector 2 (LTC) */}
      <circle cx="380" cy="137" r="16" fill="#0B1326" stroke="#B8860B" strokeWidth="1.5"/>
      <circle cx="380" cy="137" r="6" fill="#B8860B" opacity="0.5"/>
      <circle cx="380" cy="137" r="2.5" fill="#B8860B"/>

      {/* Divider */}
      <line x1="430" y1="70" x2="430" y2="230" stroke="#49C5B6" strokeOpacity="0.1" strokeWidth="1"/>

      {/* Green button */}
      <rect x="460" y="120" width="30" height="30" rx="4" fill="#1A3A1A" stroke="#22C55E" strokeWidth="1.5"/>
      <rect x="467" y="127" width="16" height="16" rx="3" fill="#22C55E" opacity="0.85"/>

      {/* OLED display */}
      <rect x="520" y="100" width="120" height="60" rx="4" fill="#0B1326" stroke="#49C5B6" strokeOpacity="0.5" strokeWidth="1"/>
      <text x="532" y="122" fill="#49C5B6" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="0.8">REC · 02:34</text>
      <text x="532" y="138" fill="#B6C2D6" fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing="0.8">SDI · 4K</text>
      <text x="532" y="152" fill="#5A6B82" fontFamily="JetBrains Mono, monospace" fontSize="7" letterSpacing="0.8">BAT: 87% · 45°C</text>

      {/* Control knobs */}
      <circle cx="665" cy="120" r="12" fill="#222" stroke="#49C5B6" strokeOpacity="0.3" strokeWidth="1"/>
      <circle cx="665" cy="120" r="3" fill="#49C5B6" opacity="0.4"/>
      <circle cx="665" cy="160" r="12" fill="#222" stroke="#49C5B6" strokeOpacity="0.3" strokeWidth="1"/>
      <circle cx="665" cy="160" r="3" fill="#49C5B6" opacity="0.4"/>

      {/* Labels with lines */}
      <line x1="155" y1="155" x2="155" y2="270" stroke="#49C5B6" strokeOpacity="0.3" strokeWidth="0.8" strokeDasharray="2 2"/>
      <text x="130" y="285" fill="#49C5B6" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="0.5">USB-C</text>

      <line x1="310" y1="160" x2="310" y2="270" stroke="#49C5B6" strokeOpacity="0.3" strokeWidth="0.8" strokeDasharray="2 2"/>
      <text x="295" y="285" fill="#49C5B6" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="0.5">SDI</text>

      <line x1="380" y1="160" x2="380" y2="270" stroke="#49C5B6" strokeOpacity="0.3" strokeWidth="0.8" strokeDasharray="2 2"/>
      <text x="365" y="285" fill="#49C5B6" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="0.5">LTC</text>

      <line x1="475" y1="155" x2="475" y2="270" stroke="#49C5B6" strokeOpacity="0.3" strokeWidth="0.8" strokeDasharray="2 2"/>
      <text x="452" y="285" fill="#49C5B6" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="0.5">STATUS</text>

      <line x1="580" y1="165" x2="580" y2="270" stroke="#49C5B6" strokeOpacity="0.3" strokeWidth="0.8" strokeDasharray="2 2"/>
      <text x="562" y="285" fill="#49C5B6" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="0.5">OLED</text>

      <line x1="665" y1="175" x2="665" y2="270" stroke="#49C5B6" strokeOpacity="0.3" strokeWidth="0.8" strokeDasharray="2 2"/>
      <text x="640" y="285" fill="#49C5B6" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="0.5">CONTROL</text>
    </svg>
  );
}

// ===== WITH BATTERY =====
function ArkWithBattery() {
  return (
    <svg viewBox="0 0 600 450" fill="none" xmlns="http://www.w3.org/2000/svg" className="g2-svg">
      <defs>
        <linearGradient id="g2bat" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3A3A3A"/>
          <stop offset="100%" stopColor="#1A1A1A"/>
        </linearGradient>
      </defs>

      {/* Subtle glow */}
      <ellipse cx="300" cy="410" rx="160" ry="18" fill="url(#g2glow)" opacity="0.4"/>

      {/* ARK Recorder body — top-down angled */}
      <rect x="200" y="60" width="250" height="160" rx="8" fill="#1A1A1A" stroke="#49C5B6" strokeOpacity="0.3" strokeWidth="1.5"/>

      {/* Top features */}
      <circle cx="325" cy="120" r="18" fill="none" stroke="#49C5B6" strokeOpacity="0.15" strokeWidth="0.8"/>
      <circle cx="325" cy="120" r="8" fill="none" stroke="#49C5B6" strokeOpacity="0.1" strokeWidth="0.5"/>

      {/* Antennas */}
      <rect x="380" y="30" width="7" height="55" rx="3.5" fill="#222" stroke="#49C5B6" strokeOpacity="0.3" strokeWidth="0.8"/>
      <rect x="376" y="82" width="15" height="8" rx="2" fill="#B8860B" opacity="0.7"/>
      <rect x="420" y="35" width="7" height="50" rx="3.5" fill="#222" stroke="#49C5B6" strokeOpacity="0.3" strokeWidth="0.8"/>
      <rect x="416" y="82" width="15" height="8" rx="2" fill="#B8860B" opacity="0.7"/>

      {/* OLED on front edge */}
      <rect x="320" y="185" width="70" height="25" rx="3" fill="#0B1326" stroke="#49C5B6" strokeOpacity="0.4" strokeWidth="0.8"/>
      <text x="328" y="200" fill="#49C5B6" fontFamily="JetBrains Mono, monospace" fontSize="7">REC · 02:34</text>

      {/* Green button */}
      <rect x="290" y="188" width="16" height="16" rx="3" fill="#22C55E" opacity="0.8"/>

      {/* D-tap cable */}
      <path d="M 250 220 Q 250 280 200 320 Q 150 360 180 390" stroke="#49C5B6" strokeWidth="2" strokeOpacity="0.5" fill="none" strokeLinecap="round"/>
      <circle cx="250" cy="220" r="4" fill="#49C5B6" opacity="0.5"/>

      {/* Bebob A45 battery */}
      <rect x="120" y="320" width="180" height="100" rx="6" fill="url(#g2bat)" stroke="#49C5B6" strokeOpacity="0.25" strokeWidth="1.5"/>
      {/* Battery label */}
      <text x="140" y="350" fill="#49C5B6" fontFamily="JetBrains Mono, monospace" fontSize="11" letterSpacing="0.5" fontWeight="700">A45</text>
      <text x="140" y="368" fill="#5A6B82" fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing="0.5">BEBOB</text>
      <text x="140" y="385" fill="#5A6B82" fontFamily="JetBrains Mono, monospace" fontSize="7" letterSpacing="0.5">14.4V · 45Wh</text>
      {/* D-tap connector on battery */}
      <rect x="140" y="400" width="24" height="12" rx="2" fill="#222" stroke="#49C5B6" strokeOpacity="0.3" strokeWidth="0.8"/>

      {/* Runtime label */}
      <text x="350" y="350" fill="#49C5B6" fontFamily="JetBrains Mono, monospace" fontSize="12" letterSpacing="0.5">2h 30m</text>
      <text x="350" y="370" fill="#5A6B82" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="0.5">recording time</text>
      <text x="350" y="400" fill="#5A6B82" fontFamily="JetBrains Mono, monospace" fontSize="8" letterSpacing="0.5">A98: over 5 hours</text>
    </svg>
  );
}

// ===== CALLOUT VIEW =====
function ArkCalloutView() {
  return (
    <svg viewBox="0 0 900 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="g2-svg">
      {/* Central device */}
      <rect x="300" y="150" width="300" height="200" rx="8" fill="#1A1A1A" stroke="#49C5B6" strokeOpacity="0.3" strokeWidth="1.5"/>

      {/* Antennas */}
      <rect x="520" y="90" width="7" height="65" rx="3.5" fill="#222" stroke="#49C5B6" strokeOpacity="0.3" strokeWidth="0.8"/>
      <rect x="516" y="150" width="15" height="8" rx="2" fill="#B8860B" opacity="0.7"/>
      <rect x="555" y="95" width="7" height="60" rx="3.5" fill="#222" stroke="#49C5B6" strokeOpacity="0.3" strokeWidth="0.8"/>
      <rect x="551" y="150" width="15" height="8" rx="2" fill="#B8860B" opacity="0.7"/>

      {/* OLED */}
      <rect x="430" y="220" width="100" height="50" rx="3" fill="#0B1326" stroke="#49C5B6" strokeOpacity="0.4" strokeWidth="1"/>
      <text x="442" y="242" fill="#49C5B6" fontFamily="JetBrains Mono, monospace" fontSize="8">REC · A03</text>
      <text x="442" y="258" fill="#F4F7FB" fontFamily="Syne, sans-serif" fontSize="14" fontWeight="700">02:34</text>

      {/* Green button */}
      <rect x="395" y="230" width="22" height="22" rx="4" fill="#22C55E" opacity="0.8"/>

      {/* USB-C */}
      <rect x="320" y="260" width="26" height="12" rx="6" fill="#0B1326" stroke="#49C5B6" strokeOpacity="0.4" strokeWidth="0.8"/>

      {/* BNC */}
      <circle cx="370" cy="266" r="12" fill="#0B1326" stroke="#B8860B" strokeWidth="1.2"/>
      <circle cx="370" cy="266" r="4" fill="#B8860B" opacity="0.5"/>

      {/* Vent slots */}
      {[0,1,2,3,4,5,6,7].map(i => (
        <rect key={`vs${i}`} x="545" y={175 + i*18} width="40" height="2" rx="1" fill="#49C5B6" fillOpacity="0.06"/>
      ))}

      {/* Callout lines and labels */}
      {/* Antenna callout */}
      <line x1="540" y1="100" x2="700" y2="60" stroke="#49C5B6" strokeOpacity="0.4" strokeWidth="0.8"/>
      <circle cx="540" cy="100" r="3" fill="#49C5B6" opacity="0.5"/>
      <text x="710" y="55" fill="#49C5B6" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="0.5">DUAL WI-FI 6</text>
      <text x="710" y="70" fill="#5A6B82" fontFamily="JetBrains Mono, monospace" fontSize="8">2.4 / 5 GHz · SMA</text>

      {/* OLED callout */}
      <line x1="530" y1="245" x2="700" y2="180" stroke="#49C5B6" strokeOpacity="0.4" strokeWidth="0.8"/>
      <circle cx="530" cy="245" r="3" fill="#49C5B6" opacity="0.5"/>
      <text x="710" y="175" fill="#49C5B6" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="0.5">OLED DISPLAY</text>
      <text x="710" y="190" fill="#5A6B82" fontFamily="JetBrains Mono, monospace" fontSize="8">Status · TC · Temp · Battery</text>

      {/* Button callout */}
      <line x1="406" y1="255" x2="700" y2="280" stroke="#49C5B6" strokeOpacity="0.4" strokeWidth="0.8"/>
      <circle cx="406" cy="255" r="3" fill="#49C5B6" opacity="0.5"/>
      <text x="710" y="275" fill="#49C5B6" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="0.5">STATUS / REC</text>
      <text x="710" y="290" fill="#5A6B82" fontFamily="JetBrains Mono, monospace" fontSize="8">Illuminated · Green / Red</text>

      {/* USB callout */}
      <line x1="333" y1="275" x2="150" y2="350" stroke="#49C5B6" strokeOpacity="0.4" strokeWidth="0.8"/>
      <circle cx="333" cy="275" r="3" fill="#49C5B6" opacity="0.5"/>
      <text x="40" y="345" fill="#49C5B6" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="0.5">USB-C</text>
      <text x="40" y="360" fill="#5A6B82" fontFamily="JetBrains Mono, monospace" fontSize="8">UVC camera input · Charging</text>

      {/* BNC callout */}
      <line x1="370" y1="280" x2="150" y2="420" stroke="#49C5B6" strokeOpacity="0.4" strokeWidth="0.8"/>
      <circle cx="370" cy="280" r="3" fill="#49C5B6" opacity="0.5"/>
      <text x="40" y="415" fill="#49C5B6" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="0.5">3G-SDI BNC</text>
      <text x="40" y="430" fill="#5A6B82" fontFamily="JetBrains Mono, monospace" fontSize="8">Faceware MKIV · Up to 4K</text>

      {/* Vent callout */}
      <line x1="570" y1="220" x2="700" y2="370" stroke="#49C5B6" strokeOpacity="0.4" strokeWidth="0.8"/>
      <circle cx="570" cy="220" r="3" fill="#49C5B6" opacity="0.5"/>
      <text x="710" y="365" fill="#49C5B6" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="0.5">ACTIVE COOLING</text>
      <text x="710" y="380" fill="#5A6B82" fontFamily="JetBrains Mono, monospace" fontSize="8">Ventilation · Continuous recording</text>

      {/* Enclosure callout */}
      <line x1="300" y1="200" x2="150" y2="200" stroke="#49C5B6" strokeOpacity="0.4" strokeWidth="0.8"/>
      <circle cx="300" cy="200" r="3" fill="#49C5B6" opacity="0.5"/>
      <text x="40" y="195" fill="#49C5B6" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="0.5">ENCLOSURE</text>
      <text x="40" y="210" fill="#5A6B82" fontFamily="JetBrains Mono, monospace" fontSize="8">Black anodized aluminum</text>
    </svg>
  );
}

Object.assign(window, { Gallery2Page, ArkIllustrationFront, ArkPortDiagram, ArkWithBattery, ArkCalloutView });
