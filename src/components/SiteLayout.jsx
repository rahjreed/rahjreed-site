import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { ArrowUpRight, Gamepad2, Menu, X } from 'lucide-react';
import { games, tagline } from '../data/games';

const links = [['/', 'Home'], ['/arcade', 'Arcade'], ['/custom-games', 'Custom Games'], ['/about', 'About R2G2'], ['/contact', 'Contact']];
const titles = { '/': 'Retro Arcade', '/arcade': 'Arcade / Games Library', '/custom-games': 'Custom Games', '/about': 'About R2G2', '/contact': 'Contact / Request a Game' };

function Brand() {
  return <Link to="/" className="brand" aria-label="R2G2 — Rahj Reed Golden Games, home"><span className="brand-mark">R<span>2</span>G<span>2</span><i aria-hidden="true" /></span><span className="brand-name">RAHJ REED<br /><strong>GOLDEN GAMES</strong></span></Link>;
}

export default function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const mainRef = useRef(null);
  const menuRef = useRef(null);
  const previousPath = useRef(location.pathname);
  useEffect(() => {
    setMenuOpen(false);
    const game = games.find((entry) => '/games/' + entry.slug === location.pathname);
    const title = game?.title || titles[location.pathname] || 'Page not found';
    document.title = title + ' | R2G2 — Rahj Reed Golden Games';
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = game?.shortDescription || tagline;
    if (previousPath.current !== location.pathname) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      mainRef.current?.focus({ preventScroll: true });
    }
    previousPath.current = location.pathname;
  }, [location.pathname]);
  function closeOnEscape(event) {
    if (event.key === 'Escape' && menuOpen) {
      setMenuOpen(false);
      menuRef.current?.focus();
    }
  }
  return <div className="site-shell" onKeyDown={closeOnEscape}>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <div className="top-strip"><div className="container"><span><span className="tiny-dot" /> THE NEXT LEVEL OF LEARNING</span><span className="top-strip-right">RETRO SPIRIT. NEW POSSIBILITIES.</span></div></div>
    <header className="site-header"><div className="container header-inner">
      <Brand />
      <button ref={menuRef} className="menu-toggle" aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      <nav id="primary-navigation" className={'primary-nav ' + (menuOpen ? 'menu-open' : '')} aria-label="Main navigation">{links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setMenuOpen(false)}>{label}</NavLink>)}</nav>
      <Link className="header-arcade" to="/arcade"><Gamepad2 size={17} aria-hidden="true" /> Enter Arcade <ArrowUpRight size={16} aria-hidden="true" /></Link>
    </div></header>
    <main id="main-content" tabIndex={-1} ref={mainRef}><Outlet /></main>
    <footer className="site-footer">
      <div className="container footer-main"><div><Brand /><p>{tagline}</p></div><nav aria-label="Footer navigation"><Link to="/arcade">Find your next game <ArrowUpRight size={15} aria-hidden="true" /></Link><Link to="/custom-games">Make it your own <ArrowUpRight size={15} aria-hidden="true" /></Link><Link to="/contact">Request a game <ArrowUpRight size={15} aria-hidden="true" /></Link></nav></div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} Rahj Reed Golden Games.</span><span>BUILT FOR THE JOY OF PLAY. <Gamepad2 size={15} aria-hidden="true" /></span></div>
    </footer>
  </div>;
}
