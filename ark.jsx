// ARK Recorder product page

function ArkPage() {
  return (
    <div className="page">
      <section className="p-hero">
        <div className="inner">
          <div>
            <span className="eyebrow dot">Hardware · ARK Recorder</span>
            <h1>The recorder lives on the <em>actor.</em></h1>
            <p className="lede">
              ARK Recorder captures headcam footage directly to internal storage — on the actor's body, untethered from the cart. Designed for SDI cameras and compatible with USB cameras. Works standalone via its built-in web interface, or networked under ARK Commander.
            </p>
            <div className="ctas">
              <button className="btn btn-primary" onClick={() => location.hash = '/contact'}>Request a demo</button>
              <a className="btn btn-secondary" href="#specs">Read the specs</a>
            </div>
            <div className="keyline">
              <span>SDI cameras native</span>
              <span>SDI / USB input</span>
              <span>LTC sync</span>
              <span>Built-in web UI</span>
            </div>
          </div>
          <div className="ark-device">
            <img src="assets/photos/OBR_on.jpg" alt="ARK Recorder powered on" style={{width:'100%', height:'100%', objectFit:'cover', mixBlendMode:'lighten', opacity:0.9, position:'absolute', inset:0, borderRadius:'inherit'}} />
            <span className="tag" style={{background:'rgba(6,11,26,0.7)', padding:'4px 8px', borderRadius:4}}>ARK RECORDER</span>
            <span className="tag-r" style={{background:'rgba(6,11,26,0.7)', padding:'4px 8px', borderRadius:4, color:'var(--fg-muted)'}}>ON-BODY · SDI CAMERAS</span>
          </div>
        </div>
      </section>

      <section className="section tinted" id="why">
        <div className="container">
          <div className="head">
            <span className="eyebrow">Why on-body</span>
            <h2>Record at the source. Don't rely on the network.</h2>
            <p>The master records on-body. Always. The network carries preview, control, and ingest — but the take is never at risk. Drop the link, keep the performance.</p>
          </div>
          <div className="feature-grid">
            <Feature icon="hard-drive" title="On-device recording">The master writes to internal SSD on the actor's body. No network dependency. Drop the link, keep the take.</Feature>
            <Feature icon="plug" title="Multi-input">2× 3G-SDI, 3× USB 3.1, and LTC input (continuous sync, not jam). Connect headcams, lav mics, and lights.</Feature>
            <Feature icon="feather" title="Lightweight and wearable">12 oz. Clips to a belt. Bebob A45 or A98 via hot-swap LEMO — 2.5 to 5+ hours on-body.</Feature>
            <Feature icon="wifi-off" title="Network-optional">Record without any network at all. Connect directly via AP mode, join your existing Wi-Fi, plug in over USB-C as a drive, or work fully offline.</Feature>
            <Feature icon="cpu" title="Edge compute built in">More than a recorder. On-board processing opens the door to features that used to require a workstation on set.</Feature>
            <Feature icon="blocks" title="Open and integrated">REST API, Samba shares, UDP triggers. ARK fits into your pipeline — it doesn't replace it.</Feature>
          </div>
        </div>
      </section>

      <section className="section" id="use-cases">
        <div className="container">
          <div className="head">
            <span className="eyebrow">Use cases</span>
            <h2>Stage. Desktop. Booth. Same recorder.</h2>
            <p>ARK Recorder works wherever your camera goes. On a mocap stage with twenty actors, at a desk for reference capture, or in a voice-over booth for facial performance.</p>
          </div>
          <div className="use-cases">
            <div className="use-case">
              <div className="label">01 · Mocap stage</div>
              <h4>Full-stage facial capture</h4>
              <p>Multiple actors, synced, with ARK Commander running the fleet. Every take synced to body mocap via UDP triggers.</p>
            </div>
            <div className="use-case">
              <div className="label">02 · Desktop</div>
              <h4>Reference and iteration</h4>
              <p>Plug a USB camera in, open the web interface, and record. No stage infrastructure required. Ideal for animators capturing reference.</p>
            </div>
            <div className="use-case">
              <div className="label">03 · VO booth</div>
              <h4>Voice-over with facial performance</h4>
              <p>Capture facial data alongside audio in the booth. The headcam stays on the actor, the recorder stays out of the way.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section tinted" id="compatibility">
        <div className="container">
          <div className="head">
            <span className="eyebrow">Compatibility</span>
            <h2>SDI and USB. Bring your own camera.</h2>
            <p>ARK Recorder supports SDI cameras over 3G-SDI and USB cameras over UVC. For custom camera integrations — including machine vision sensors — talk to us.</p>
          </div>
          <div className="compat">
            <span className="lbl">Supported</span>
            <span className="item">SDI cameras (3G-SDI)</span>
            <span className="item">UVC USB-C cameras</span>
          </div>
        </div>
      </section>

      <section className="section" id="specs">
        <div className="container">
          <div className="head">
            <span className="eyebrow">Specifications</span>
            <h2>ARK Recorder · Technical detail.</h2>
            <p>Pre-release specifications. Final unit shipping June 2026. Contact us for the full engineering data sheet.</p>
          </div>
          <div className="spec-table">
            <Row k="Form factor" v="Body-worn recorder · clips to belt" />
            <Row k="Weight" v="12 oz (340 g)" />
            <Row k="Dimensions" v='H: 1.2" × W: 3.3" × L: 4.1"' />
            <Row k="Video inputs" v="2× 3G-SDI (HD-BNC) · 3× USB 3.1 (UVC)" />
            <Row k="Sync" v="LTC input · continuous sync (not jam)" />
            <Row k="Storage" v="1 TB internal SSD · NVMe" />
            <Row k="Power" v="Bebob A45 (2.5 h) or A98 (5+ h) · LEMO hot-swap" />
            <Row k="Wireless" v="Wi-Fi 6 (2.4 / 5 GHz) · AP mode or join existing network" />
            <Row k="Wired" v="USB-C direct attach (drive mode + control)" />
            <Row k="File access" v="Samba network share · USB-C direct attach · built-in web UI" />
            <Row k="Streaming" v="Preview streaming over Wi-Fi" />
            <Row k="Display" v="OLED status display · RGB LED indicator" />
            <Row k="Compute" v="Edge-class on-board processing" />
            <Row k="API" v="REST API for integration and automation" />
            <Row k="Control" v="Built-in web UI · ARK Commander · USB-C · AP mode" />
          </div>
        </div>
      </section>

      <section className="section tinted" id="pricing">
        <div className="container">
          <div className="head center">
            <span className="eyebrow">Pricing</span>
            <h2>Hardware you own. Support that keeps it current.</h2>
            <p>ARK Recorder ships with no software license. A maintenance and support plan keeps firmware updated and your team covered. Volume pricing available.</p>
          </div>
          <div className="use-cases" style={{gridTemplateColumns:'repeat(2, 1fr)', maxWidth:720, margin:'0 auto'}}>
            <div className="use-case">
              <div className="label">Device</div>
              <h4>ARK Recorder</h4>
              <p>One-time purchase. Includes the recorder, belt-clip, SDI cable, wall plug &amp; built-in web UI for control. (battery and belt optional)</p>
            </div>
            <div className="use-case">
              <div className="label">Support</div>
              <h4>Maintenance plan</h4>
              <p>Firmware updates, priority support, and extended warranty. Annual subscription.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

function Feature({ icon, title, children }) {
  return (
    <div className="feature">
      <div className="icon"><i data-lucide={icon}></i></div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}

function Row({ k, v }) {
  return (
    <div className="row">
      <div className="k">{k}</div>
      <div className="v">{v}</div>
    </div>
  );
}

Object.assign(window, { ArkPage, Feature, Row });
