import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const worlds = [
  { no: '01', title: 'Brands', line: 'Flowers that become part of the visual identity.', image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1800&q=92' },
  { no: '02', title: 'Weddings', line: 'Personal flowers. Extraordinary spaces.', image: 'https://images.unsplash.com/photo-1768777273037-aa1cbd2afa08?auto=format&fit=crop&w=1800&q=92' },
  { no: '03', title: 'Events', line: 'Atmosphere in every detail.', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1800&q=92' },
  { no: '04', title: 'Editorial', line: 'Floral direction for images, campaigns and stories.', image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1600&q=92' },
];

const flowers = [
  { name: 'Hand-tied', price: 'From £45', image: 'https://images.unsplash.com/photo-1660885900178-964c51a9e176?auto=format&fit=crop&w=1200&q=92' },
  { name: 'Signature', price: 'From £65', image: 'https://images.unsplash.com/photo-1455582916367-25f75c4b3d08?auto=format&fit=crop&w=1200&q=92' },
  { name: 'Bespoke', price: 'Made for you', image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=1200&q=92' },
];

function Arrow(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 20 20 4M8 4h12v12"/></svg>}
function Close(){return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>}
function SafeImage({src,alt,eager=false}){const [failed,setFailed]=useState(false);return <div className={`image ${failed?'fallback':''}`}>{!failed?<img src={src} alt={alt} loading={eager?'eager':'lazy'} decoding="async" onError={()=>setFailed(true)}/>:<span>Leïa</span>}</div>}

function App(){
  const [menu,setMenu]=useState(false); const [open,setOpen]=useState(false); const [selected,setSelected]=useState('General enquiry');
  const enquire=(type='General enquiry')=>{setSelected(type);setOpen(true);setMenu(false)};
  const submit=e=>{e.preventDefault();const d=new FormData(e.currentTarget);const body=[['Name',d.get('name')],['Email',d.get('email')],['Enquiry',d.get('enquiry')],['Date',d.get('date')],['Details',d.get('details')]].filter(x=>x[1]).map(x=>x.join(': ')).join('\n');window.location.href=`mailto:Hello@Leiaflorals.co.uk?subject=${encodeURIComponent('Leïa Florals — '+selected)}&body=${encodeURIComponent(body)}`};
  return <div className="site">
    <header className="nav"><a href="#top" className="logo" onClick={()=>setMenu(false)}>LEÏA</a><nav className={menu?'open':''}><a href="#work" onClick={()=>setMenu(false)}>Work</a><a href="#weddings" onClick={()=>setMenu(false)}>Weddings</a><a href="#events" onClick={()=>setMenu(false)}>Events</a><a href="#flowerbar" onClick={()=>setMenu(false)}>Flower Bar</a><a href="#flowers" onClick={()=>setMenu(false)}>Flowers</a><a href="#about" onClick={()=>setMenu(false)}>About</a><a href="#contact" onClick={()=>setMenu(false)}>Contact</a></nav><button className="menu" onClick={()=>setMenu(!menu)}>{menu?<Close/>:'Menu'}</button><button className="nav-order" onClick={()=>enquire('Flowers / order')}>Order <Arrow/></button></header>

    <main id="top">
      <section className="hero">
        <div className="hero-copy"><span>Floral design studio · Greater Manchester</span><h1>Flowers,<br/><i>with a point<br/>of view.</i></h1><p className="hero-intro">Floral worlds for brands, weddings, spaces and the moments worth remembering.</p><button onClick={()=>document.getElementById('work')?.scrollIntoView({behavior:'smooth'})}>Explore our work <Arrow/></button></div>
        <div className="hero-image"><SafeImage eager src="https://images.unsplash.com/photo-1660885900178-964c51a9e176?auto=format&fit=crop&w=2200&q=94" alt="Editorial bouquet in soft cream and floral tones"/></div>
        <div className="hero-side"><span>Selected collaborations</span><br/>Jo Malone<br/>Benefit Cosmetics<br/><i>and more.</i></div><div className="scroll">Scroll <b>↓</b></div>
      </section>

      <section className="approach" id="about"><div className="approach-image"><SafeImage src="https://images.unsplash.com/photo-1709294728704-c2de23b6dccf?auto=format&fit=crop&w=1700&q=92" alt="Close-up of hands arranging flowers in a studio"/></div><div className="approach-copy"><span>Our approach</span><h2>We don't just<br/><i>arrange flowers.</i></h2><p>We create atmosphere, shape, colour and feeling. Our work moves between intimate celebrations, brand worlds and editorial spaces — always with a strong visual point of view.</p><a href="#work">Enter the studio <Arrow/></a></div><div className="approach-detail"><span>More than flowers.</span><strong>A feeling.</strong></div></section>

      <section className="worlds" id="work"><div className="worlds-head"><span>Four ways into the world of Leïa</span><h2>Work that starts<br/><i>with a feeling.</i></h2></div><div className="world-grid">{worlds.map((w,i)=><article className={`world world-${i}`} key={w.title} id={w.title==='Weddings'?'weddings':w.title==='Events'?'events':undefined}><div className="world-copy"><small>{w.no}</small><h3>{w.title}</h3><p>{w.line}</p><button onClick={()=>enquire(w.title+' enquiry')}>View work <Arrow/></button></div><div className="world-image"><SafeImage src={w.image} alt={w.title}/></div></article>)}</div></section>

      <section className="statement"><div className="statement-image"><SafeImage src="https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=1900&q=92" alt="Floral installation with organic movement"/></div><div className="statement-copy"><span>Floral direction</span><h2>For a more<br/><i>beautiful world.</i></h2><p>We collaborate with people and brands who believe flowers can transform a room, sharpen a visual identity and make a moment stay with you.</p><a href="#contact">Start a conversation <Arrow/></a></div><blockquote>“Flowers change<br/>how we see<br/>the world.”<small>— Leïa</small></blockquote></section>

      <section className="flowerbar" id="flowerbar"><div className="flowerbar-copy"><span>05 · Coming soon · FIA Coffeehouse</span><h2>The<br/><i>Flower Bar.</i></h2><p className="script">flowers<br/>coffee<br/>good people</p><p>A new little ritual: fresh flowers, great coffee and something beautiful to take with you. Coming soon at FIA Coffeehouse.</p><a href="mailto:Hello@Leiaflorals.co.uk?subject=Flower%20Bar%20updates">Get Flower Bar updates <Arrow/></a></div><div className="flowerbar-image"><SafeImage src="https://images.unsplash.com/photo-1780815227186-9adce46d69f6?auto=format&fit=crop&w=1800&q=92" alt="Fresh flowers, coffee and a quiet cafe moment"/></div></section>

      <section className="flowers" id="flowers"><div className="flowers-head"><span>06 · The flower edit</span><h2>Something beautiful,<br/><i>for today.</i></h2><p>Hand-tied bouquets, signature arrangements or something completely bespoke — we create each one around the moment.</p></div><div className="flower-grid">{flowers.map(f=><article key={f.name}><div><SafeImage src={f.image} alt={f.name}/></div><div className="flower-meta"><span>{f.name}</span><small>{f.price}</small><button onClick={()=>enquire(f.name+' flowers')}>Order <Arrow/></button></div></article>)}</div></section>

      <section className="final" id="contact"><div className="final-flower"><SafeImage src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=92" alt="Single botanical stem"/></div><div className="final-copy"><span>Have a brief?</span><h2>Let's make<br/><i>something memorable.</i></h2><p>Weddings · Brands · Events · Flowers</p><button onClick={()=>enquire('Project enquiry')}>Enquire now <Arrow/></button></div></section>
    </main>

    <footer><div className="footer-logo">LEÏA<small>Floral design studio · Greater Manchester, UK</small></div><div><span>Explore</span><a href="#work">Work</a><a href="#weddings">Weddings</a><a href="#events">Events</a><a href="#flowerbar">Flower Bar</a></div><div><span>Connect</span><a href="#flowers">Flowers</a><a href="#about">About</a><a href="#contact">Contact</a><a href="https://www.instagram.com/leiaflorals/" target="_blank" rel="noreferrer">Instagram</a></div><div className="footer-end">Hello@Leiaflorals.co.uk<br/><br/>Flowers, with a point of view.<br/><br/>© 2026 Leïa Florals</div></footer>

    {open&&<div className="modal" onClick={()=>setOpen(false)}><div className="modal-card" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setOpen(false)}><Close/></button><span>Leïa Florals · Enquiry</span><h2>Let's make<br/><i>something beautiful.</i></h2><p>Tell us a little about what you have in mind. We will reply with availability and next steps.</p><form onSubmit={submit}><input name="name" placeholder="Your name" required/><input name="email" type="email" placeholder="Email address" required/><select name="enquiry" value={selected} onChange={e=>setSelected(e.target.value)}><option>General enquiry</option><option>Flowers / order</option><option>Wedding enquiry</option><option>Events enquiry</option><option>Brands enquiry</option><option>Editorial enquiry</option><option>Flower Bar</option><option>Project enquiry</option></select><input name="date" placeholder="Preferred date (optional)"/><textarea name="details" rows="5" placeholder="Tell us about the occasion, style, location, budget or anything else..."></textarea><button className="submit" type="submit">Send enquiry <Arrow/></button></form></div></div>}
  </div>
}
createRoot(document.getElementById('root')).render(<App/>);
