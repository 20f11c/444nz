export default function HeroSection({ repo, scripts }) {
  const hasMultiple = scripts.length > 1;

  return (
    <section className="hero p-3 p-md-4 mb-4 mb-md-5">
      <div id="heroCarousel" className="carousel slide hero-carousel" data-bs-ride="carousel">
        {hasMultiple && (
          <div className="carousel-indicators hero-indicators mb-0">
            {scripts.map((script, index) => (
              <button
                key={script.title}
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-current={index === 0 ? 'true' : undefined}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        <div className="carousel-inner">
          {scripts.map((script, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={script.title}>
              <div className="slide-card p-4 p-md-5">
                <div className="row align-items-center g-4">
                  <div className="col-lg-8">
                    <span className="badge rounded-pill text-bg-primary-subtle text-primary-emphasis mb-3">
                      {`Tampermonkey Script · ${script.version}`}
                    </span>
                    <h1 className="display-6 fw-bold mb-3 hero-title">{script.title}</h1>
                    <p className="lead mb-3">{script.description}</p>

                    {script.highlights?.length > 0 && (
                      <ul className="slide-points mb-0">
                        {script.highlights.slice(0, 3).map((point) => (
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
                      <a className="btn btn-primary btn-lg px-4" href={script.installUrl} target="_blank" rel="noreferrer">
                        安装此脚本
                      </a>
                      <a className="btn btn-outline-primary" href={script.sourceUrl} target="_blank" rel="noreferrer">
                        查看源码
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasMultiple && (
          <>
            <button className="carousel-control-prev hero-control" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next hero-control" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </>
        )}
      </div>
    </section>
  );
}
