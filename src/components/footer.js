import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Logo from "../images/logo.svg"

const Footer = styled(({ className }) => {
  return (
    <footer className={className}>
      <div className="info">
        <div className="logo">
          <Link to="/" aria-label="homepage">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">Úvod</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="https://g.page/r/CVeMn9I-izFVEAg/review">
                Hodnocení
              </Link>
            </li>
            <li>
              <Link to="/kudy-k-nam">Kudy k nám</Link>
            </li>
            <li>
              <Link to="/">Objednejte online</Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="title">Adresa</span> <br />
          Střecha Galerie Harfa, <br />
          Českomoravská 2420/15a, <br />
          190 00 Praha 9
        </div>
        <div>
          <span className="title">Otevírací doba</span> <br /> Po-Ne 11-22
        </div>
      </div>
      <div className="copyright">
        <ul>
          <li>A2Fabrica s.r.o. © {new Date().getFullYear()}</li>
          <li>
            <a href="https://kvcvc.cz/" target="_blank" rel="noreferrer">
              Vytvořil Kovačević Marko
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
})`
  background-color: ${props => props.theme.foreground};
  color: ${props => props.theme.background};
  line-height: 1.5rem;
  .copyright {
    font-weight: 400;
    font-size: 0.75rem;
    opacity: 0.75;
    margin: 0 2rem 1rem 2rem;
  }
  .copyright ul {
    display: flex;
    justify-content: space-between;
  }
  .info {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
    margin: 2rem;
  }
  img {
    width: 100%;
    max-width: 24rem;
    min-width: 16rem;
    height: auto;
    filter: invert(100%);
  }
  .logo {
    grid-column: 1 / span 2;
  }
  .logo a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ul {
    list-style: none;
  }
  a {
    color: ${props => props.theme.background};
    text-decoration: none;
    transition: 0.3s;
  }
  a:visited {
    color: ${props => props.theme.background};
  }
  a:hover {
    color: grey;
    text-decoration: underline;
  }
  .title {
    font-weight: 500;
  }
  @media (max-width: 768px) {
    .info {
      grid-template-columns: 1fr;
    }
    .logo {
      grid-column: 1;
    }
  }
`

export default Footer
