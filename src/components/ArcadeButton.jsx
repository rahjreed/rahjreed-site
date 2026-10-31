import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ArcadeButton({ to, href, children, variant = 'primary', className = '', ...props }) {
  const classes = ['arcade-button', variant === 'secondary' ? 'button-secondary' : '', className].join(' ');
  if (href) return <a href={href} target="_blank" rel="noopener noreferrer" data-sound="coin" className={classes} {...props}>{children}<ArrowUpRight size={17} aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>;
  if (to) return <Link to={to} className={classes} {...props}>{children}</Link>;
  return <button type="button" className={classes} {...props}>{children}</button>;
}
