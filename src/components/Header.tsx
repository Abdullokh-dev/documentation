import { Link } from "react-router-dom";

export function Header() {
  return(
    <header className="site-header fixed-top">
      <div className="header-container container d-flex align-items-center justify-content-between">
        <Link className={'header-logo'} to={'/'}>
          <img src="/logo.svg" alt="Logo" width="40" height="40" className="d-inline-block align-text-top" />
        </Link>

        <nav className="site-nav">
          <ul className="site-nav__list">
            <li className="site-nav__item"><Link to={'/users'} className="site-nav__link fs-5">Users</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
