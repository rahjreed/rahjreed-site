export default function PageIntro({ eyebrow, title, children }) {
  return <header className="page-intro"><p className="eyebrow"><span className="pixel-cross" aria-hidden="true">✦</span> {eyebrow}</p><h1>{title}</h1><div className="intro-description">{children}</div></header>;
}
