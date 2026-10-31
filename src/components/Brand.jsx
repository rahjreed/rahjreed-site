import { Gamepad2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Brand() {
  return <Link to="/" className="brand" aria-label="R2G2 — Rahj Reed Golden Games, home">
    <span className="brand-controller" aria-hidden="true"><span><Gamepad2 size={26} /></span></span>
    <span className="brand-type"><span className="brand-mark">R2G2</span><span className="brand-name">RAHJ REED GOLDEN GAMES</span></span>
  </Link>;
}
