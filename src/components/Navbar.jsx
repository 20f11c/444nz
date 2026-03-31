export default function Navbar({ repoUrl }) {
  return (
    <nav className="navbar navbar-expand-lg sticky-top top-nav">
      <div className="container page-wrap py-2">
        <a className="navbar-brand d-flex align-items-center fw-semibold" href="#top">
          <span className="brand-mark">🐒</span>
          20f11c脚本库
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#topMenu"
          aria-controls="topMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="topMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#scripts">脚本列表</a></li>
          </ul>
          <a className="btn btn-primary ms-lg-3" href={repoUrl} target="_blank" rel="noreferrer">
            GitHub 仓库
          </a>
        </div>
      </div>
    </nav>
  );
}
