import SiteSearch from './site-search.jsx';

export default function Header() {
  return (
    <header>
      <include-html src="https://cbiit.github.io/nci-softwaresolutions-elements/banners/government-shutdown.html"></include-html>
      <div className="container my-2 my-md-4 mb-1 d-flex flex-wrap justify-content-between align-items-baseline">
        <a className="d-inline-block" rel="noopener noreferrer" href="https://www.cancer.gov/">
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/assets/nci-dceg-logo.svg`} height="60" alt="National Cancer Institute Logo" className="mw-100" />
        </a>
        <SiteSearch className="my-2" />
      </div>
      <div className="d-none d-md-block bg-primary-dark text-white py-1">
        <div className="container">
          <h1 className="h5 fw-normal">
            FORGE<span className="fw-semibold small text-warning">db</span>
            <small className="ms-2 fs-6 text-light opacity-75">Functional SNP</small>
          </h1>
        </div>
      </div>
    </header>
  );
}
