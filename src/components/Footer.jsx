export default function Footer({ repo }) {
  return (
    <footer className="site-footer py-4 py-md-5">
      <div className="container page-wrap">
        <div className="footer-card p-3 p-md-4">
          <div className="row g-3 align-items-start">
            <div className="col-md-5">
              <h3 className="h6 mb-2">版权信息</h3>
              <p className="mb-1">{repo.domain} · © {new Date().getFullYear()} {repo.copyright}. All Rights Reserved.</p>
              <p className="mb-1 text-secondary small">CGH Tampermonkey Scripts</p>

            </div>

            <div className="col-md-4">
              <h3 className="h6 mb-2">联系方式</h3>
              <p className="mb-1">
                邮箱：
                <a href={`mailto:${repo.email}`} className="text-decoration-none">{repo.email}</a>
              </p>
              <p className="mb-0">
                GitHub：
                <a href={`https://github.com/${repo.githubUser}`} target="_blank" rel="noreferrer" className="text-decoration-none">
                  {repo.githubUser}
                </a>
              </p>
            </div>

            <div className="col-md-3">
              <h3 className="h6 mb-2">项目链接</h3>
              <a href={repo.url} target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-sm">
                打开 GitHub 仓库
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
