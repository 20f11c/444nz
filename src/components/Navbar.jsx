import { useState } from 'react';

export default function Navbar({ repoUrl }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar navbar-expand-lg sticky-top top-nav">
      <div className="container page-wrap py-2">
        <a className="navbar-brand d-flex align-items-center fw-semibold" href="#top" onClick={closeMenu}>
          <span className="brand-mark">🐒</span>
          20f11c脚本库
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-controls="topMenu"
          aria-expanded={menuOpen}
          aria-label="切换导航"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`navbar-collapse ${menuOpen ? 'show' : 'collapse'}`} id="topMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#scripts" onClick={closeMenu}>脚本列表</a>
            </li>
          </ul>
          <a className="btn btn-primary ms-lg-3" href={repoUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
            GitHub 仓库
          </a>
        </div>
      </div>
    </nav>
  );
}

