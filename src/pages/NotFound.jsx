import ArcadeButton from '../components/ArcadeButton';

export default function NotFound() {
  return <div className="container not-found"><p className="eyebrow">404 / OUT OF BOUNDS</p><h1>WRONG WARP.</h1><p>This page isn’t in the game. Let’s get you back to the arcade.</p><ArcadeButton to="/arcade">Return to the Arcade</ArcadeButton></div>;
}
