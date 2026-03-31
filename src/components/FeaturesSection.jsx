export default function FeaturesSection({ items }) {
  return (
    <section id="features" className="mb-4 mb-md-5">
      <div className="row g-3">
        {items.map((item) => (
          <div className="col-md-4" key={item.title}>
            <div className="feature-card">
              <div className="feature-icon">{item.code}</div>
              <h3 className="h6 mb-2">{item.title}</h3>
              <p className="mb-0 text-secondary small">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
