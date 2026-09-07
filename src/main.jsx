import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, Instagram, Menu, X } from 'lucide-react';
import './styles.css';

const work = [
  {
    title: 'Soft architecture',
    type: 'Floral installation',
    image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1400&q=85',
  },
  {
    title: 'A study in bloom',
    type: 'Editorial styling',
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1400&q=85',
  },
  {
    title: 'Wild romance',
    type: 'Celebration florals',
    image: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1400&q=85',
  },
];

const shop = [
  { name: 'Seasonal bouquet', note: 'A one-off hand-tied arrangement', image: 'https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=900&q=85' },
  { name: 'The studio vase', note: 'Sculptural florals for the home', image: 'https://images.unsplash.com/photo-1455582916367-25f75c4b3d08?auto=format&fit=crop&w=900&q=85' },
  { name: 'Little wild thing', note: 'A smaller seasonal gesture', image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=900&q=85' },
];

function App() {
  const [menu, setMenu] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);

  const closeMenu = () => setMenu(false);

  return (
    <div className="site-shell">
      <div className="announce">GREATER MANCHESTER · FLORAL DESIGN · FLOWER BAR COMING SOON</div>
      <header className="nav-wrap">
        <a className="brand" href="#top" onClick={closeMenu}>Leïa <span>Florals</span></a>
        <nav className={menu ? 'nav mobile-open' : 'nav'}>
          <a href="#shop" onClick={closeMenu}>Shop</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#flowerbar" onClick={closeMenu}>Flower Bar</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <div className="nav-actions">
          <button className="pill pill-dark" onClick={() => setOrderOpen(true)}>Order flowers</button>
          <button className="menu-button" aria-label="Toggle menu" onClick={() => setMenu(!menu)}>{menu ? <X size={21}/> : <Menu size={21}/>}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow">Floral design, thoughtfully composed</p>
            <h1>Flowers with<br/><em>a point of view.</em></h1>
            <p className="hero-text">Seasonal florals, installations and styling for brands, spaces and the moments worth remembering.</p>
            <div className="hero-actions">
              <a href="#work" className="pill pill-dark">Explore the work <ArrowUpRight size={15}/></a>
              <a href="#contact" className="text-link">Work with Leïa</a>
            </div>
          </div>
          <div className="hero-image-wrap">
            <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1500&q=90" alt="Editorial floral arrangement" />
            <div className="hero-caption"><span>01</span><span>Made by hand · Manchester</span></div>
          </div>
        </section>

        <section className="intro section-pad">
          <p className="eyebrow">A floral studio for modern moments</p>
          <div className="intro-grid">
            <h2>Not just flowers.<br/><em>A feeling.</em></h2>
            <div className="intro-body">
              <p>Leïa Florals creates expressive floral work that feels natural, elevated and unmistakably personal. From a single considered arrangement to full-scale installations, every piece begins with seasonality and the story behind the brief.</p>
              <a className="text-link" href="#services">Discover the studio <ArrowUpRight size={14}/></a>
            </div>
          </div>
        </section>

        <section id="work" className="work section-pad">
          <div className="section-heading">
            <div><p className="eyebrow">Selected work</p><h2>Made to be noticed.</h2></div>
            <a className="text-link" href="#contact">View portfolio <ArrowUpRight size={14}/></a>
          </div>
          <div className="work-grid">
            {work.map((item, i) => (
              <article className={`work-card card-${i}`} key={item.title}>
                <img src={item.image} alt={item.title} />
                <div className="card-meta"><span>{item.type}</span><h3>{item.title}</h3></div>
              </article>
            ))}
          </div>
        </section>

        <section id="shop" className="shop section-pad">
          <div className="section-heading">
            <div><p className="eyebrow">Order flowers</p><h2>The shop, by season.</h2></div>
            <p className="section-note">A small edit of flowers, arranged by hand. Availability follows what is looking beautiful now.</p>
          </div>
          <div className="shop-grid">
            {shop.map((item) => (
              <article className="shop-card" key={item.name}>
                <div className="shop-image"><img src={item.image} alt={item.name}/><button className="quick-add" onClick={() => setOrderOpen(true)}>Order</button></div>
                <div className="shop-meta"><div><h3>{item.name}</h3><p>{item.note}</p></div><span className="price">Enquire</span></div>
              </article>
            ))}
          </div>
          <div className="shop-foot"><span>Seasonal availability · Greater Manchester</span><button className="text-link" onClick={() => setOrderOpen(true)}>Start an order <ArrowUpRight size={14}/></button></div>
        </section>

        <section id="services" className="services section-pad">
          <div className="services-intro"><p className="eyebrow">What we do</p><h2>Florals for<br/><em>every kind of brief.</em></h2></div>
          <div className="service-list">
            {['Brand collaborations', 'Events & installations', 'Weddings & celebrations', 'Editorial & creative styling'].map((s, i) => (
              <a href="#contact" className="service-row" key={s}><span>0{i + 1}</span><h3>{s}</h3><ArrowUpRight size={20}/></a>
            ))}
          </div>
        </section>

        <section id="flowerbar" className="flowerbar">
          <div className="flowerbar-image"><img src="https://images.unsplash.com/photo-1494336934272-f7f4ea6cfd77?auto=format&fit=crop&w=1500&q=90" alt="Flowers on a café table" /></div>
          <div className="flowerbar-copy">
            <p className="eyebrow">Something new is growing</p>
            <h2>The Flower Bar<br/><em>at FIA Coffeehouse.</em></h2>
            <p>A new way to pick up something beautiful. Follow the journey as Leïa Florals brings seasonal stems, thoughtful arrangements and a little floral joy to FIA.</p>
            <a href="#contact" className="pill pill-light">Keep me posted <ArrowUpRight size={15}/></a>
          </div>
        </section>

        <section className="credibility section-pad">
          <p className="eyebrow">Selected collaborations</p>
          <div className="logos"><span>JO MALONE</span><span>BENEFIT</span><span>CREATIVE PARTNERS</span><span>GREATER MANCHESTER</span></div>
        </section>

        <section id="contact" className="contact section-pad">
          <div><p className="eyebrow">Let's create something beautiful</p><h2>Have a brief?<br/><em>Tell us everything.</em></h2></div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <label>Name<input placeholder="Your name" /></label>
            <label>Email<input type="email" placeholder="you@example.com" /></label>
            <label>Project type<select defaultValue=""><option value="" disabled>Select one</option><option>Flowers</option><option>Wedding / celebration</option><option>Brand collaboration</option><option>Event / installation</option></select></label>
            <label>Tell us about it<textarea rows="4" placeholder="Date, location, mood, and anything else useful..."></textarea></label>
            <button className="pill pill-dark" type="submit">Send enquiry <ArrowUpRight size={15}/></button>
          </form>
        </section>
      </main>

      <footer className="footer section-pad">
        <div><a className="brand footer-brand" href="#top">Leïa <span>Florals</span></a><p>Floral design · Greater Manchester</p></div>
        <div className="footer-links"><a href="#shop">Shop</a><a href="#work">Work</a><a href="#flowerbar">Flower Bar</a><a href="#contact">Enquiries</a></div>
        <div className="footer-social"><a href="#top"><Instagram size={18}/> Instagram</a><span>Hello@Leiaflorals.co.uk</span></div>
        <div className="footer-bottom"><span>© 2026 Leïa Florals</span><span>Website concept by The Pixel Muses</span></div>
      </footer>

      {orderOpen && <div className="modal-backdrop" onClick={() => setOrderOpen(false)}><div className="order-modal" onClick={(e) => e.stopPropagation()}><button className="modal-close" onClick={() => setOrderOpen(false)} aria-label="Close"><X size={20}/></button><p className="eyebrow">Order flowers</p><h2>Let's make it<br/><em>just right.</em></h2><p>Tell us the occasion, preferred date and the kind of flowers you're after. We'll come back with seasonal options and availability.</p><form onSubmit={(e) => e.preventDefault()}><input placeholder="Your name"/><input type="email" placeholder="Email address"/><input placeholder="Preferred date"/><textarea rows="4" placeholder="What are you looking for?"></textarea><button className="pill pill-dark">Send order enquiry <ArrowUpRight size={15}/></button></form></div></div>}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
