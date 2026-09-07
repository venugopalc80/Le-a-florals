import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const work = [
  { title: 'Brand commissions', type: 'Floral direction', image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1600&q=90' },
  { title: 'Floral studies', type: 'Editorial direction', image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1400&q=90' },
  { title: 'Celebrations', type: 'Flowers & styling', image: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1400&q=90' },
];

const shop = [
  { name: 'Seasonal flowers', note: 'Arrangements created around the season', image: 'https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=1100&q=90' },
  { name: 'Flowers for the home', note: 'Sculptural seasonal arrangements', image: 'https://images.unsplash.com/photo-1455582916367-25f75c4b3d08?auto=format&fit=crop&w=1100&q=90' },
  { name: 'Something small', note: 'A considered seasonal gesture', image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=1100&q=90' },
];

function Arrow() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20 20 4M8 4h12v12"/></svg>; }
function Close() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>; }
function SafeImage({ src, alt, eager = false }) {
  const [failed, setFailed] = useState(false);
  return <div className={`safe-image ${failed ? 'is-fallback' : ''}`}>
    {!failed && <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" onError={() => setFailed(true)} />}
    {failed && <div className="fallback-art" aria-label={alt}><span>Leïa</span></div>}
  </div>;
}

function App() {
  const [menu, setMenu] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const close = () => setMenu(false);
  return <div className="site">
    <div className="topline"><span>Leïa Florals</span><span>Greater Manchester</span></div>
    <header className="nav">
      <a className="wordmark" href="#top" onClick={close}>Leïa</a>
      <nav className={menu ? 'nav-links open' : 'nav-links'}>
        <a href="#work" onClick={close}>Work</a><a href="#studio" onClick={close}>Studio</a><a href="#flowerbar" onClick={close}>Flower Bar</a><a href="#shop" onClick={close}>Flowers</a><a href="#contact" onClick={close}>Enquire</a>
      </nav>
      <button className="menu" onClick={() => setMenu(!menu)} aria-label={menu ? 'Close menu' : 'Open menu'}>{menu ? <Close/> : <span>Menu</span>}</button>
    </header>

    <main id="top">
      <section className="hero-new">
        <div className="hero-title"><p>Floral design studio</p><h1>flowers,<br/><i>arranged<br/>differently.</i></h1></div>
        <div className="hero-photo"><SafeImage eager src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1800&q=92" alt="Editorial floral arrangement"/></div>
        <div className="hero-note">Floral design for brands, spaces<br/>and moments worth remembering.</div>
      </section>

      <section className="manifesto" id="studio">
        <div className="manifesto-kicker">The point of view</div>
        <div className="manifesto-copy"><p>Leïa Florals is a floral design studio creating work with <em>shape, seasonality and feeling.</em></p><span>A considered approach to flowers, styling and spaces.</span></div>
      </section>

      <section className="work-new" id="work">
        <div className="section-intro"><span>Selected work</span><h2>Made to leave<br/><i>an impression.</i></h2></div>
        <div className="gallery">
          {work.map((item, i) => <article className={`gallery-item g${i}`} key={item.title}>
            <SafeImage src={item.image} alt={item.title}/>
            <div className="gallery-caption"><div><strong>{item.title}</strong><small>{item.type}</small></div></div>
          </article>)}
        </div>
      </section>

      <section className="collab-strip"><span>Selected collaborations</span><strong>JO MALONE</strong><strong>BENEFIT COSMETICS</strong><span>Greater Manchester</span></section>

      <section className="services-new">
        <div className="service-heading"><span>The studio</span><h2>From a stem<br/>to a <i>whole atmosphere.</i></h2></div>
        <div className="service-list">
          {['Brand collaborations','Events & installations','Weddings & celebrations','Editorial & creative styling'].map(item => <a href="#contact" key={item}><b>{item}</b><Arrow/></a>)}
        </div>
      </section>

      <section className="flowerbar-new" id="flowerbar">
        <div className="flowerbar-image"><SafeImage src="https://images.unsplash.com/photo-1494336934272-f7f4ea6cfd77?auto=format&fit=crop&w=1800&q=92" alt="Flowers in a coffeehouse setting"/></div>
        <div className="flowerbar-copy"><span>Coming soon</span><p className="huge">The<br/><i>Flower Bar.</i></p><p className="flowerbar-body">A new floral ritual at FIA Coffeehouse. Seasonal stems, considered arrangements and something beautiful to take with you.</p><a href="#contact">Keep me posted <Arrow/></a></div>
      </section>

      <section className="shop-new" id="shop">
        <div className="shop-heading"><span>Flowers</span><h2>For when you want<br/><i>something beautiful.</i></h2><button onClick={() => setOrderOpen(true)}>Order flowers <Arrow/></button></div>
        <div className="shop-list">{shop.map(item => <article key={item.name}><div className="shop-photo"><SafeImage src={item.image} alt={item.name}/></div><div className="shop-copy"><h3>{item.name}</h3><p>{item.note}</p><button onClick={() => setOrderOpen(true)}>Enquire <Arrow/></button></div></article>)}</div>
      </section>

      <section className="closing" id="contact"><div></div><div><span>Have a brief?</span><h2>Let's make<br/><i>something memorable.</i></h2><a href="mailto:Hello@Leiaflorals.co.uk">Hello@Leiaflorals.co.uk <Arrow/></a></div></section>
    </main>

    <footer><div className="footer-word">Leïa<span>Florals</span></div><div>Floral design<br/>Greater Manchester</div><div><a href="#work">Work</a><a href="#shop">Flowers</a><a href="#contact">Enquiries</a></div><div>© 2026<br/>Website concept by The Pixel Muses</div></footer>

    {orderOpen && <div className="modal" role="dialog" aria-modal="true" aria-label="Flowers enquiry" onClick={() => setOrderOpen(false)}><div className="modal-card" onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setOrderOpen(false)} aria-label="Close enquiry"><Close/></button><span>Flowers / Enquiry</span><h2>Tell us what<br/><i>you're imagining.</i></h2><form onSubmit={e => e.preventDefault()}><input aria-label="Your name" placeholder="Your name"/><input aria-label="Email address" type="email" placeholder="Email address"/><input aria-label="Preferred date" placeholder="Preferred date"/><textarea aria-label="Enquiry details" rows="4" placeholder="Occasion, location, mood..."/><button type="submit">Send enquiry <Arrow/></button></form></div></div>}
  </div>;
}
createRoot(document.getElementById('root')).render(<App />);
