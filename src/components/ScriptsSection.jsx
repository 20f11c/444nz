import { useState } from 'react';

function MetaPill({ children, className = '' }) {
  return <span className={`meta-pill ${className}`.trim()}>{children}</span>;
}

export default function ScriptsSection({ scripts }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      window.setTimeout(() => setCopiedIndex((prev) => (prev === index ? null : prev)), 1800);
    } catch {
      setCopiedIndex(null);
    }
  };

  return (
    <section id="scripts" className="mb-4">
      <div className="d-flex justify-content-between align-items-center mb-3 mb-md-4">
        <h2 className="h4 mb-0 section-title">脚本列表</h2>
        <span className="badge rounded-pill text-bg-dark px-3 py-2">{scripts.length} 个脚本</span>
      </div>

      <div className="script-list d-flex flex-column gap-3">
        {scripts.map((script, index) => (
          <article className="script-list-card p-3 p-md-4" key={script.title}>
            <div className="script-head d-flex flex-column flex-lg-row justify-content-between gap-3">
              <div className="flex-grow-1">
                <h3 className="h4 script-title mb-2">{script.title}</h3>
                <div className="script-meta d-flex flex-wrap align-items-center gap-2 mb-3">
                  <MetaPill>{script.version}</MetaPill>
                  <MetaPill className="meta-pill-success">{script.status}</MetaPill>
                  <MetaPill className="meta-pill-muted">更新：{script.updatedAt}</MetaPill>
                </div>
                <p className="script-desc mb-2">{script.description}</p>
                <p className="mb-2 small text-secondary">匹配站点：{script.matchSites}</p>
                <div className="mb-2">
                  {script.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="small text-secondary d-flex flex-wrap align-items-center gap-2">
                  <span>支持扩展：</span>
                  {script.supportedExtensions.map((ext) => (
                    <span className="ext-tag" key={ext}>{ext}</span>
                  ))}
                </div>
              </div>

              <div className="script-actions d-flex flex-column gap-2">
                <a className="btn btn-success" href={script.installUrl} target="_blank" rel="noreferrer">
                  一键安装
                </a>
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={() => handleCopy(script.installUrl, index)}
                >
                  <i className={`bi ${copiedIndex === index ? 'bi-check2' : 'bi-clipboard'} me-1`} />
                  {copiedIndex === index ? '已复制链接' : '复制链接'}
                </button>
              </div>
            </div>

            <div className="script-divider my-3" />

            <div className="collapse-head">
              <h4 className="h6 mb-0">功能与安装说明</h4>
              <button
                className="collapse-icon-btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#detailsCollapse-${index}`}
                aria-expanded="false"
                aria-controls={`detailsCollapse-${index}`}
                aria-label="切换功能与安装说明"
              >
                <i className="bi bi-chevron-down collapse-chevron-icon" />
              </button>
            </div>

            <div className="collapse mt-2" id={`detailsCollapse-${index}`}>
              <div className="row g-3 collapse-content-grid">
                <div className="col-md-6">
                  <div className="list-panel h-100">
                    <h5 className="h6 mb-2">功能亮点</h5>
                    <ul className="mb-0">
                      {script.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="list-panel h-100">
                    <h5 className="h6 mb-2">安装说明</h5>
                    <ol className="mb-2">
                      {script.installSteps.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                    <p className="mb-0 small text-secondary">{script.updateTip}</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
