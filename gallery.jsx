// Temporary gallery page — ARK Recorder prototype renders

function GalleryPage() {
  const images = [
    { src: 'assets/photos/OBR_on.jpg', label: 'Front · powered on', caption: 'OLED display active, green status indicator, SDI cable connected. Dual Wi-Fi antennas.' },
    { src: 'assets/photos/OBR_oled.jpg', label: 'Front · ports visible', caption: 'USB-C, BNC SDI connectors, OLED display, control buttons. Compact black anodized enclosure.' },
    { src: 'assets/photos/OBR_sdi.jpg', label: 'Rear · antenna detail', caption: 'SMA antenna connectors with pigtails. Ventilation slots. Low-profile form factor.' },
    { src: 'assets/photos/OBR_top.jpg', label: 'Top-down', caption: 'Top view showing antenna placement and overall footprint.' },
    { src: 'assets/photos/OBR_bebob.jpg', label: 'With Bebob A45 battery', caption: 'External Bebob A45 connected via D-tap. 2h30m recording time. A98 gives over 5 hours.' },
  ];

  return (
    <div className="page">
      <section className="p-hero" style={{paddingBottom: 48}}>
        <div className="inner" style={{gridTemplateColumns: '1fr'}}>
          <div>
            <span className="eyebrow dot">Prototype · Internal</span>
            <h1>ARK Recorder <em>gallery.</em></h1>
            <p className="lede">
              Prototype photography for site placement. These images show the current development hardware. Styled treatments below for evaluating how they sit in the brand context.
            </p>
          </div>
        </div>
      </section>

      {/* Full-bleed hero treatment */}
      <section className="section tinted">
        <div className="container">
          <div className="head center">
            <span className="eyebrow">Treatment 1 · Hero crop</span>
            <h2>Full-width, dark background blend</h2>
          </div>
          <div className="gallery-hero-frame">
            <img src="assets/photos/OBR_on.jpg" alt="ARK Recorder powered on" />
            <div className="gallery-hero-overlay"></div>
            <div className="gallery-hero-label">
              <span className="eyebrow">ARK Recorder</span>
              <span style={{font:'var(--type-mono-md)', fontSize:11, color:'var(--fg-subtle)'}}>ON-BODY · FACEWARE MKIV · PROTOTYPE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Card grid treatment */}
      <section className="section">
        <div className="container">
          <div className="head center">
            <span className="eyebrow">Treatment 2 · Card grid</span>
            <h2>Product cards with captions</h2>
          </div>
          <div className="gallery-grid">
            {images.map((img, i) => (
              <div className="gallery-card" key={i}>
                <div className="gallery-card-img">
                  <img src={img.src} alt={img.label} />
                </div>
                <div className="gallery-card-info">
                  <span className="gallery-card-label">{img.label}</span>
                  <p>{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating on dark treatment */}
      <section className="section tinted">
        <div className="container">
          <div className="head center">
            <span className="eyebrow">Treatment 3 · Floating product shot</span>
            <h2>Centered with glow and specs</h2>
          </div>
          <div className="gallery-float">
            <img src="assets/photos/OBR_oled.jpg" alt="ARK Recorder front view" />
            <div className="gallery-float-glow"></div>
          </div>
          <div className="gallery-float-specs">
            <span><b>SDI / USB-C</b></span>
            <span><b>Wi-Fi 6</b> dual antenna</span>
            <span><b>OLED</b> status display</span>
            <span><b>Bebob</b> A45 / A98</span>
          </div>
        </div>
      </section>

      {/* Side-by-side comparison */}
      <section className="section">
        <div className="container">
          <div className="head center">
            <span className="eyebrow">Treatment 4 · Side by side</span>
            <h2>With and without battery</h2>
          </div>
          <div className="gallery-compare">
            <div className="gallery-compare-item">
              <div className="gallery-compare-img">
                <img src="assets/photos/OBR_sdi.jpg" alt="ARK Recorder standalone" />
              </div>
              <span>Recorder only</span>
            </div>
            <div className="gallery-compare-item">
              <div className="gallery-compare-img">
                <img src="assets/photos/OBR_bebob.jpg" alt="ARK Recorder with Bebob A45" />
              </div>
              <span>With Bebob A45 · 2h30m</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { GalleryPage });
