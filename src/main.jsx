import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const work = [
  { title: 'Brand commissions', type: 'Floral direction · brand experience', image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1800&q=92' },
  { title: 'Wedding stories', type: 'Personal flowers · styling · installation', image: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=1600&q=92' },
  { title: 'Floral studies', type: 'Editorial · creative direction', image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1600&q=92' },
];

const services = [
  ['01', 'Brand collaborations', 'Launches, gifting, campaigns and spaces designed to feel unmistakably yours.'],
  ['02', 'Weddings & celebrations', 'Personal flowers and installations built around the atmosphere you want to remember.'],
  ['03', 'Events & installations', 'From intimate tablescapes to floral statements that completely change a room.'],
  ['04', 'Editorial & styling', 'Considered floral direction for photography, content and creative production.'],
];

const shop = [
  { name: 'Seasonal flowers', note: 'Arrangements created around what is at its best, in the studio now.', image: 'https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=1200&q=92' },
  { name: 'Flowers for the home', note: 'Sculptural seasonal arrangements for tables, shelves and everyday spaces.', image: 'https://images.unsplash.com/photo-1455582916367-25f75c4b3d08?auto=format&fit=crop&w=1200&q=92' },
  { name: 'Something small', note: 'A considered seasonal gesture, wrapped and ready to give.', image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=1200&q=92' },
];

const orderTypes = [
  ['01', 'Hand-tied flowers', 'A seasonal, hand-tied arrangement made in the Leïa way — natural, considered and ready to gift.', 'From £45'],
  ['02', 'Signature arrangement', 'A fuller floral moment for birthdays, thank-yous, dinner tables and beautiful just-because gestures.', 'From £65'],
  ['03', 'Bespoke flowers', 'Tell us the occasion, mood and budget. We will create something specifically for you.', 'Made to order'],
];

function Arrow() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20 20 4M8 4h12v12" /></svg>; }
function Close() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>; }
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
  const openEnquiry = () => setOrderOpen(true);

  const submitEnquiry = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const fields = [
      ['Name', data.get('name')],
      ['Email', data.get('email')],
      ['Order type', data.get('type')],
      ['Preferred date', data.get('date')],
      ['Occasion', data.get('occasion')],
      ['Budget', data.get('budget')],
      ['Details', data.get('details')],
    ].filter(([, value]) => value);
    const body = fields.map(([label, value]) => `${label}: ${value}`).join('\n');
    window.location.href = `mailto:Hello@Leiaflorals.co.uk?subject=${encodeURIComponent('Floral order or enquiry')}&body=${encodeURIComponent(body)}`;
  };

  return <div className="site">
    <div className="topline"><span>Leïa Florals</span><span>Greater Manchester</span><span>Floral design · events · weddings</span></div>
    <header className="nav">
      <a className="wordmark" href="#top" onClick={close}>Leïa <i>Florals</i></a>
      <nav className={menu ? 'nav-links open' : 'nav-links'}>
        <a href="#work" onClick={close}>Work</a><a href="#studio" onClick={close}>Studio</a><a href="#services" onClick={close}>Services</a><a href="#flowerbar" onClick={close}>Flower Bar</a><a href="#shop" onClick={close}>Flowers</a><a href="#order" onClick={close}>Order</a><a href="#contact" onClick={close}>Enquire</a>
      </nav>
      <button className="menu" onClick={() => setMenu(!menu)} aria-label={menu ? 'Close menu' : 'Open menu'}>{menu ? <Close /> : <span>Menu</span>}</button>
    </header>

    <main id="top">
      <section className="hero-new"><div className="hero-title"><p>Floral design studio · Greater Manchester</p><h1>flowers,<br /><i>arranged<br />differently.</i></h1></div><div className="hero-photo"><SafeImage eager src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=2000&q=94" alt="Editorial floral arrangement" /></div><div className="hero-note">Flowers with feeling<br />for brands, spaces and celebrations.</div></section>

      <section className="manifesto" id="studio"><div className="manifesto-kicker">The point of view</div><div className="manifesto-copy"><p>Leïa Florals is a floral design studio creating work with <em>shape, seasonality and feeling.</em></p><span>Not flowers added at the end. Flowers considered from the beginning.</span></div></section>

      <section className="work-new" id="work"><div className="section-intro"><span>Selected work · 01 / 06</span><h2>Made to leave<br /><i>an impression.</i></h2></div><div className="gallery">{work.map((item, i) => <article className={`gallery-item g${i}`} key={item.title}><SafeImage src={item.image} alt={item.title} /><div className="gallery-caption"><div><strong>{item.title}</strong><small>{item.type}</small></div></div></article>)}</div><div className="gallery-footer"><button className="gallery-cta" onClick={openEnquiry}>Discuss a project <Arrow /></button><a href="https://www.instagram.com/leiaflorals/" target="_blank" rel="noreferrer">See more work on Instagram <Arrow /></a></div></section>

      <section className="collab-strip"><span>Selected collaborations</span><strong>JO MALONE</strong><strong>BENEFIT COSMETICS</strong><span>Greater Manchester</span></section>

      <section className="services-new" id="services"><div className="service-heading"><span>The studio · 02 / 06</span><h2>From a stem<br />to a <i>whole atmosphere.</i></h2><p>Soft, sculptural, romantic or unexpected. The brief sets the direction; the flowers build the feeling.</p></div><div className="service-list">{services.map(([num, title, copy]) => <button className="service-item" key={title} onClick={openEnquiry}><b>{num}</b><div><strong>{title}</strong><p>{copy}</p></div><Arrow /></button>)}</div></section>

      <section className="flowerbar-new" id="flowerbar"><div className="flowerbar-image"><SafeImage src="https://images.unsplash.com/photo-1494336934272-f7f4ea6cfd77?auto=format&fit=crop&w=1900&q=94" alt="Flowers in a coffeehouse setting" /></div><div className="flowerbar-copy"><span>Coming soon · FIA Coffeehouse</span><p className="huge">The<br /><i>Flower Bar.</i></p><p className="flowerbar-body">A new floral ritual at FIA Coffeehouse. Seasonal stems, considered arrangements and something beautiful to take with you.</p><a href="mailto:Hello@Leiaflorals.co.uk?subject=Flower%20Bar">Keep me posted <Arrow /></a><small>03 / 06</small></div></section>

      <section className="shop-new" id="shop"><div className="shop-heading"><span>The flower edit · 04 / 06</span><h2>For when you want<br /><i>something beautiful.</i></h2><button onClick={openEnquiry}>Order / enquire <Arrow /></button></div><div className="shop-list">{shop.map(item => <article key={item.name}><div className="shop-photo"><SafeImage src={item.image} alt={item.name} /></div><div className="shop-copy"><div><h3>{item.name}</h3><p>{item.note}</p></div><button onClick={openEnquiry} aria-label={`Enquire about ${item.name}`}>Enquire <Arrow /></button></div></article>)}</div></section>

      <section className="order-section" id="order"><div className="order-intro"><span>Order flowers · 05 / 06</span><h2>Flowers for<br /><i>the moment.</i></h2><p>For birthdays, thank-yous, dinner tables or simply because. Choose a starting point below and we will shape the flowers around the occasion.</p><div className="order-promise"><b>Simple by design.</b><span>Tell us what you have in mind. We will confirm availability, timing and the final price with you.</span></div></div><div className="order-list">{orderTypes.map(([num, title, copy, price]) => <article className="order-card" key={title}><div className="order-number">{num}</div><div className="order-card-copy"><h3>{title}</h3><p>{copy}</p><span>{price}</span></div><button onClick={openEnquiry}>Order flowers <Arrow /></button></article>)}</div><div className="order-note"><span>Good to know</span><p>Seasonal flowers are subject to availability. For a specific colour palette, larger arrangement or a particular date, get in touch and we will create something bespoke.</p><button onClick={openEnquiry}>Ask about a bespoke order <Arrow /></button></div></section>

      <section className="closing" id="contact"><div><span>06 / 06</span></div><div><span>Have a brief?</span><h2>Let's make<br /><i>something memorable.</i></h2><p>Weddings, brands, events or a beautiful idea that does not fit a box.</p><a href="mailto:Hello@Leiaflorals.co.uk?subject=Floral%20enquiry">Hello@Leiaflorals.co.uk <Arrow /></a></div></section>
    </main>

    <footer><div className="footer-word">Leïa <span>Florals</span><small>Floral design studio · Greater Manchester</small></div><div><span>Explore</span><a href="#work">Work</a><a href="#studio">Studio</a><a href="#services">Services</a><a href="#flowerbar">Flower Bar</a></div><div><span>Connect</span><a href="#shop">Flowers</a><a href="#order">Order</a><a href="#contact">Enquiries</a><a href="https://www.instagram.com/leiaflorals/" target="_blank" rel="noreferrer">Instagram</a><a href="mailto:Hello@Leiaflorals.co.uk">Email</a></div><div className="footer-note">Past clients include<br />Jo Malone · Benefit Cosmetics<br /><br />© 2026 · Concept by The Pixel Muses</div></footer>

    {orderOpen && <div className="modal" role="dialog" aria-modal="true" aria-label="Leïa Florals order enquiry" onClick={() => setOrderOpen(false)}><div className="modal-card order-modal" onClick={e => e.stopPropagation()}><button className="modal-close" onClick={() => setOrderOpen(false)} aria-label="Close enquiry"><Close /></button><span>Flowers / Order & Enquiry</span><h2>Tell us what<br /><i>you're imagining.</i></h2><p className="modal-intro">A few details is all we need to start. We will come back to you with availability, timing and the best way to make it happen.</p><form onSubmit={submitEnquiry}><div className="form-grid"><input name="name" aria-label="Your name" placeholder="Your name" required /><input name="email" aria-label="Email address" type="email" placeholder="Email address" required /><select name="type" defaultValue=""><option value="" disabled>What are you ordering?</option><option>Hand-tied flowers</option><option>Signature arrangement</option><option>Bespoke flowers</option><option>Wedding / event flowers</option><option>Brand / editorial flowers</option></select><input name="date" aria-label="Preferred date" placeholder="Preferred date" /><select name="occasion" defaultValue=""><option value="" disabled>Occasion</option><option>Birthday</option><option>Thank you</option><option>Wedding / celebration</option><option>Home</option><option>Brand / event</option><option>Just because</option></select><select name="budget" defaultValue=""><option value="" disabled>Approx. budget</option><option>Under £50</option><option>£50–£100</option><option>£100–£200</option><option>£200+</option><option>Not sure yet</option></select></div><textarea name="details" aria-label="Order details" rows="4" placeholder="Colours, style, location, delivery / collection notes or anything else..."></textarea><div className="form-foot"><span>We will reply by email to confirm the details.</span><button type="submit">Send enquiry <Arrow /></button></div></form></div></div>}
  </div>;
}
createRoot(document.getElementById('root')).render(<App />);
