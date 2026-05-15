// ARK Commander product page + Contact

function CommanderPage() {
  return (
    <div className="page">
      <section className="p-hero">
        <div className="inner">
          <div>
            <span className="eyebrow dot">Software · ARK Commander</span>
            <h1>One screen. The whole <em>stage.</em></h1>
            <p className="lede">
              ARK Commander controls every ARK Recorder on your network from a single interface. Manage Projects, Sessions, Shots, and Takes. Send and receive triggers to your mocap systems. Sync footage and get it into the pipeline — named, organized, and ready.
            </p>
            <div className="ctas">
              <button className="btn btn-primary" onClick={() => location.hash = '/contact'}>Request a demo</button>
              {/* <a className="btn btn-secondary" href="#workflow">See the workflow</a> */}
            </div>
            <div className="keyline">
              <span>Project · Session · Shot · Take</span>
              <span>Record triggers</span>
              <span>macOS · Windows</span>
            </div>
          </div>
          <FleetMock large />
        </div>
      </section>

      <section className="section tinted">
        <div className="container">
          <div className="head">
            <span className="eyebrow">What Commander does</span>
            <h2>Fleet control and project management in one application.</h2>
            <p>ARK Commander is the control layer for studios running ARK Recorders. It replaces the walk-the-floor workflow with a single operator, a single screen, and a structured take pipeline.</p>
          </div>
          <div className="feature-grid">
            <Feature icon="circle-dot" title="Arm and record">One-tap arm-all and rec-all across every connected ARK Recorder.</Feature>
            <Feature icon="folders" title="Project hierarchy">Organize work into Projects, Sessions, Shots, and Takes. Labels propagate to every device.</Feature>
            <Feature icon="radio" title="Record triggers">Send and receive record triggers to your motion capture systems.</Feature>
            <Feature icon="clock" title="Frame-accurate sync">LTC input supports distributed timecode sync into the ARK Recorders. Every ARK Recorder stays synced across the entire shoot day.</Feature>
            <Feature icon="activity" title="Live fleet monitor">Battery, storage, device health, network quality, rec state and much more — surfaced for every device simultaneously.</Feature>
            <Feature icon="download" title="Footage ingest">Download as you go. Commander lets you sync your recordings to a network location as you shoot. Or wait till the session ends — the choice is yours.</Feature>
          </div>
        </div>
      </section>

      <section className="section" id="integrations">
        <div className="container">
          <div className="head">
            <span className="eyebrow">Trigger integrations</span>
            <h2>Talks to the systems already on your stage.</h2>
            <p>ARK Commander sends and receives record triggers to synchronize facial capture with other motion capture systems. Start recording on ARK when body capture starts. Stop when it stops. Or drive both from Commander.</p>
          </div>
          {/*
          <div className="compat">
            <span className="lbl">Supported systems</span>
            <span className="item">OptiTrack</span>
            <span className="item">Vicon</span>
            <span className="item">Rokoko</span>
            <span className="item">Manus</span>
            <span className="item">Peel Capture</span>
            <span className="item">Movella</span>
          </div>
          */}
        </div>
      </section>

      <section className="section tinted" id="workflow">
        <div className="container">
          <div className="head">
            <span className="eyebrow">The workflow</span>
            <h2>Project. Session. Shot. Take.</h2>
            <p>Commander structures your shoot day into a hierarchy that maps directly to your pipeline. The footage arrives where it belongs.</p>
          </div>
          <FleetMock large />
        </div>
      </section>

      <section className="section" id="naming">
        <div className="container">
          <div className="head">
            <span className="eyebrow">File naming</span>
            <h2>Every file named correctly. No typing required.</h2>
            <p>ARK Commander generates file names automatically using template-based naming conventions. Choose from built-in templates or build your own from variables — project, session, shot, take, actor, device, date, timecode, and more.</p>
          </div>
          <div className="naming-demo">
            <div className="naming-template">
              <span className="naming-label">Template</span>
              <code className="naming-code">{'{project}_{session}_{shot}_{take}_{actor}'}</code>
            </div>
            <div className="naming-arrow"><i data-lucide="arrow-down"></i></div>
            <div className="naming-result">
              <span className="naming-label">Output</span>
              <code className="naming-code result">Alpha_Session03_Shot014_Take07_KIRA.mov</code>
            </div>
          </div>
          <div className="feature-grid" style={{marginTop:48}}>
            <Feature icon="file-text" title="Template-based">Choose from built-in templates or create custom patterns. Variables resolve automatically at record time.</Feature>
            <Feature icon="variable" title="Custom variables">Use built-in variables like project, actor, and timecode — or define your own for studio-specific conventions.</Feature>
            <Feature icon="keyboard-off" title="Zero typing on set">Once the template is set, every take names itself. No manual entry, no typos, no post-shoot renaming.</Feature>
          </div>
        </div>
      </section>

      <section className="section tinted" id="shot-library">
        <div className="container">
          <div className="head">
            <span className="eyebrow">Shot library</span>
            <h2>Every shot in one place. Past, present, and planned.</h2>
            <p>The Shot Library is where every shot and take lives — a single view across your entire project. Browse what's been captured, review takes, and plan what's next without leaving Commander.</p>
          </div>
          <ShotLibraryMock />
          <div className="feature-grid" style={{marginTop:48}}>
            <Feature icon="library" title="Complete shot history">Every shot and take from every session, searchable and filterable. See what's been captured at a glance.</Feature>
            <Feature icon="upload" title="Import shot lists">Bring in an existing shot list from pre-production. Assign shots to current sessions or create draft sessions for future shoot days.</Feature>
            <Feature icon="calendar" title="Plan ahead">Create draft sessions and pre-assign shots before the stage is booked. When the day arrives, the plan is already in place.</Feature>
          </div>
        </div>
      </section>

      <section className="section" id="download">
        <div className="container">
          <div className="head center">
            <span className="eyebrow">Available on</span>
            <h2>macOS and Windows. Ready for your stage.</h2>
            <p>ARK Commander runs natively on both platforms. Request a demo and we'll get you set up.</p>
          </div>
          <div className="platform-cards">
            <div className="platform-card">
              <div className="platform-icon">
                <i data-lucide="apple"></i>
              </div>
              <h4>macOS</h4>
              <button className="btn btn-primary" onClick={() => location.hash = '/contact'}>Request a demo</button>
            </div>
            <div className="platform-card">
              <div className="platform-icon">
                <i data-lucide="monitor"></i>
              </div>
              <h4>Windows</h4>
              <button className="btn btn-primary" onClick={() => location.hash = '/contact'}>Request a demo</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section tinted" id="pricing">
        <div className="container">
          <div className="head center">
            <span className="eyebrow">Pricing</span>
            <h2>Annual subscription. Scales with your stage.</h2>
            <p>ARK Commander is licensed as a yearly subscription. Pricing scales with the number of ARK Recorders on your network. Every ARK Recorder works standalone without Commander — Commander adds project management, fleet control, and trigger sync.</p>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

function ShotLibraryMock() {
  const shots = [
    { id: 'SH-001', name: 'Hero entrance', session: 'Session 03', takes: 4, status: 'complete', best: 'Take 03' },
    { id: 'SH-002', name: 'Dialogue close-up A', session: 'Session 03', takes: 7, status: 'complete', best: 'Take 05' },
    { id: 'SH-003', name: 'Reaction wide', session: 'Session 03', takes: 2, status: 'in-progress', best: '—' },
    { id: 'SH-004', name: 'Fight sequence opener', session: 'Session 04 (draft)', takes: 0, status: 'planned', best: '—' },
    { id: 'SH-005', name: 'Emotional breakdown', session: 'Session 04 (draft)', takes: 0, status: 'planned', best: '—' },
    { id: 'SH-006', name: 'Final monologue', session: 'Session 05 (draft)', takes: 0, status: 'planned', best: '—' },
  ];
  return (
    <div className="shot-library-mock">
      <div className="sl-topbar">
        <div className="sl-title"><b>Shot Library</b> · Project Alpha</div>
        <div className="sl-actions">
          <span className="sl-filter">All sessions</span>
          <span className="sl-btn">Import shot list</span>
        </div>
      </div>
      <div className="sl-header">
        <span>Shot</span>
        <span>Name</span>
        <span>Session</span>
        <span>Takes</span>
        <span>Best</span>
        <span>Status</span>
      </div>
      <div className="sl-rows">
        {shots.map(s => (
          <div className={`sl-row ${s.status}`} key={s.id}>
            <span className="sl-id">{s.id}</span>
            <span className="sl-name">{s.name}</span>
            <span className="sl-session">{s.session}</span>
            <span className="sl-takes">{s.takes}</span>
            <span className="sl-best">{s.best}</span>
            <span className={`sl-status-pill ${s.status}`}>
              {s.status === 'complete' ? 'Complete' : s.status === 'in-progress' ? 'In progress' : 'Planned'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FleetMock({ large }) {
  const devices = [
    { name: 'A01 · KIRA', state: 'rec', id: 'ARK-1A4F', tc: '01:23:46:04', bat: '87%', stor: '218 GB' },
    { name: 'A02 · DESH', state: 'rec', id: 'ARK-1A5C', tc: '01:23:46:04', bat: '92%', stor: '241 GB' },
    { name: 'A03 · MARI', state: 'rec', id: 'ARK-1A61', tc: '01:23:46:04', bat: '74%', stor: '189 GB' },
    { name: 'A04 · TOMI', state: 'idle', id: 'ARK-1A6E', tc: '—', bat: '100%', stor: '0 GB' },
    { name: 'A05 · NORA', state: 'warn', id: 'ARK-1A7B', tc: '01:23:46:04', bat: '12%', stor: '276 GB' },
    { name: 'A06 · KAEL', state: 'rec', id: 'ARK-1A88', tc: '01:23:46:04', bat: '68%', stor: '203 GB' },
  ];
  return (
    <div className="fleet" style={ large ? { minHeight: 520 } : null }>
      <div className="topbar">
        <div className="lights"><span></span><span></span><span></span></div>
        <div className="title"><b>ARK Commander</b> · Project Alpha · Session 03</div>
        <div className="right">
          <span>LTC <b style={{color:'var(--c-aqua)'}}>LOCKED</b></span>
          <span className="timecode">01:23:46:04</span>
        </div>
      </div>
      <div className="body">
        <div className="sidebar">
          <div className="group">Project</div>
          <div className="item active">Alpha <span className="badge">6</span></div>
          <div className="group">Sessions</div>
          <div className="item">Session 01</div>
          <div className="item">Session 02</div>
          <div className="item active">Session 03 <span className="badge">live</span></div>
          <div className="group">Shots</div>
          <div className="item active">Shot 014</div>
          <div className="item">Shot 015</div>
          <div className="item">Shot 016</div>
        </div>
        <div className="main">
          <div className="toolbar">
            <span className="pill"><span className="dot"></span>RECORDING · 5 of 6</span>
            <span className="pill muted">Shot 014 · Take 07</span>
            <div className="right">
              <button>Arm</button>
              <button>Mark</button>
              <button className="rec">Stop &amp; Ingest</button>
            </div>
          </div>
          <div className="device-list">
            {devices.map(d => (
              <div className={`device ${d.state}`} key={d.id}>
                <div className="name">
                  <span className="led"></span>
                  <span>
                    <span className="label">{d.name}</span>
                    <span className="id">{d.id}</span>
                  </span>
                </div>
                <div className="stat">TC <b>{d.tc.split(':').slice(-2).join(':')}</b></div>
                <div className="stat" style={d.state==='warn'?{color:'#E9A24B'}:null}>BAT <b>{d.bat}</b></div>
                <div className="stat">FREE <b>{d.stor}</b></div>
                <div className="recpill">{d.state==='warn' ? 'LOW BAT' : d.state.toUpperCase()}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ===== CONTACT =====
function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="page">
      <section className="p-hero">
        <div className="inner" style={{gridTemplateColumns:'1fr 1fr'}}>
          <div>
            <span className="eyebrow dot">Talk to us</span>
            <h1>Tell us about your <em>stage.</em></h1>
            <p className="lede">
              Send us your headcam setup, your stage size, and what you're trying to capture. We'll come back with a configuration and a date for a demo on your floor.
            </p>
            <div style={{marginTop:32, display:'flex', flexDirection:'column', gap:16, font:'var(--type-body-md)', color:'var(--fg-muted)'}}>
              <div>
                <div style={{font:'var(--type-label-sm)', textTransform:'uppercase', letterSpacing:'0.08em', color:'var(--c-aqua)', marginBottom:6}}>Sales</div>
                sales@mantalabs.ai
              </div>
              <div>
                <div style={{font:'var(--type-label-sm)', textTransform:'uppercase', letterSpacing:'0.08em', color:'var(--c-aqua)', marginBottom:6}}>Support</div>
                support@mantalabs.ai
              </div>
            </div>
          </div>
          <form action="https://formspree.io/f/xaqvgpeo" method="POST" onSubmit={(e) => { e.preventDefault(); fetch(e.target.action, { method:'POST', body: new FormData(e.target), headers: {'Accept':'application/json'} }).then(r => { if(r.ok) setSent(true); }); }} style={{
            padding: 32, background: 'var(--c-abyss)', border: '1px solid var(--border)', borderRadius: 16,
            display: 'flex', flexDirection: 'column', gap: 18
          }}>
            {sent ? (
              <div style={{textAlign:'center', padding:'40px 0'}}>
                <div style={{font:'700 28px/1.1 var(--font-display)', marginBottom:12}}>Thanks — we'll be in touch.</div>
                <p style={{font:'var(--type-body-md)', color:'var(--fg-muted)', margin:0}}>We typically reply within one business day.</p>
              </div>
            ) : (
              <>
                <Field label="Name" name="name" placeholder="Jamie Thorne" />
                <Field label="Studio" name="studio" placeholder="Studio name" />
                <Field label="Email" name="email" type="email" placeholder="you@studio.com" />
                <Field label="Setup" name="setup" placeholder="e.g. 4 actors, SDI headcams, mocap stage with OptiTrack" />
                <Field label="What are you trying to do?" name="message" textarea placeholder="A few sentences. Capture format, pipeline, timeline, body mocap system if relevant." />
                <button type="submit" className="btn btn-primary" style={{justifyContent:'center'}}>Send request</button>
              </>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, placeholder, type='text', textarea }) {
  const sty = {
    font:'400 15px/1.5 var(--font-body)', color:'var(--fg)',
    background:'rgba(11,19,38,0.6)',
    border:'1px solid var(--border)',
    borderRadius:8, padding:'12px 14px', width:'100%',
    outline:'none',
    fontFamily:'var(--font-body)'
  };
  return (
    <label style={{display:'flex', flexDirection:'column', gap:6}}>
      <span style={{font:'var(--type-label-sm)', textTransform:'uppercase', letterSpacing:'0.08em', color:'var(--fg-subtle)'}}>{label}</span>
      {textarea
        ? <textarea name={name} rows={4} placeholder={placeholder} style={{...sty, resize:'vertical', minHeight:96}} />
        : <input name={name} type={type} placeholder={placeholder} style={sty} />
      }
    </label>
  );
}

Object.assign(window, { CommanderPage, ContactPage, FleetMock, ShotLibraryMock });
