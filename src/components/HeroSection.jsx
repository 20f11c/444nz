import { useState } from 'react';

export default function HeroSection({ repo, scripts }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasMultiple = scripts.length > 1;
  const safeIndex = Math.min(activeIndex, Math.max(scripts.length - 1, 0));
  const currentScript = scripts[safeIndex];

  const showPrev = () => setActiveIndex((prev) => (prev - 1 + scripts.length) % scripts.length);
  const showNext = () => setActiveIndex((prev) => (prev + 1) % scripts.length);

  if (!currentScript) return null;

  return (
    <section className="hero p-3 p-md-4 mb-4 mb-md-5">
      <div className="carousel slide hero-carousel">
        {hasMultiple && (
          <div className="carousel-indicators hero-indicators mb-0">
            {scripts.map((script, index) => (
              <button
                key={script.title}
                type="button"
                className={`hero-indicator-btn ${index === safeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-current={index === safeIndex ? 'true' : undefined}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="slide-card p-4 p-md-5">
              <div className="row align-items-center g-4">
                <div className="col-lg-8">
                  <span className="badge rounded-pill text-bg-primary-subtle text-primary-emphasis mb-3">
                    {`Tampermonkey Script · ${currentScript.version}`}
                  </span>
                  <h1 className="display-6 fw-bold mb-3 hero-title">{currentScript.title}</h1>
                  <p className="lead mb-3">{currentScript.description}</p>

                  {currentScript.highlights?.length > 0 && (
                    <ul className="slide-points mb-0">
                      {currentScript.highlights.slice(0, 3).map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}

                  <p className="mt-3 mb-0 repo-link">
                    仓库地址：
                    <a href={repo.url} target="_blank" rel="noreferrer">{repo.url}</a>
                  </p>
                </div>

                <div className="col-lg-4">
                  <div className="hero-actions d-grid gap-2 justify-content-lg-end">
                    <a className="btn btn-primary btn-lg px-4" href={currentScript.installUrl} target="_blank" rel="noreferrer">
                      安装此脚本
                    </a>
                    <a className="btn btn-outline-primary" href={currentScript.sourceUrl} target="_blank" rel="noreferrer">
                      查看源码
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {hasMultiple && (
          <>
            <button className="carousel-control-prev hero-control" type="button" onClick={showPrev} aria-label="上一张">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next hero-control" type="button" onClick={showNext} aria-label="下一张">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </>
        )}
      </div>
    </section>
  );
}

