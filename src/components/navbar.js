import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Button } from "./"
import Logo from "../images/logo.svg"
import Shapes from "../sprites/shapes.svg"

const Navbar = styled(({ className }) => {
  const [isMenuOpened, setisMenuOpened] = useState()
  return (
    <div className={className}>
      <nav>
        <ul>
          <li className="hamburger">
            <button onClick={() => setisMenuOpened("isMenuOpened")}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </li>
          <li className="logo">
            <img src={Logo} alt="logo" />
          </li>
          <li className="cta">
            <Button href="">Objednejte online</Button>
          </li>
        </ul>
      </nav>
      <div className={`menu ${isMenuOpened}`}>
        <button className="x" onClick={() => setisMenuOpened()}>
          <span></span>
          <span></span>
        </button>
        <ul>
          <li>
            <Link to="/">Úvod</Link>
          </li>
          <li>
            <Link to="">Menu</Link>
          </li>
          <li>
            <Link to="">Hodnocení</Link>
          </li>
          <li>
            <Link to="">Kudy k nám</Link>
          </li>
          <li>
            <Link to="">Objednejte online</Link>
          </li>
          <li>
            <a className="social" href="">
              <svg>
                <use href={`${Shapes}#instagram`}></use>
              </svg>
              Instagram
            </a>
          </li>
          <li>
            <a className="social" href="">
              <svg>
                <use href={`${Shapes}#facebook`}></use>
              </svg>
              Facebook
            </a>
          </li>
        </ul>
      </div>
      <div
        className={`overlay ${isMenuOpened}`}
        onMouseDown={() => setisMenuOpened()}
      ></div>
    </div>
  )
})`
  nav {
    margin: 1rem 2rem 0 2rem;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    li {
      display: flex;
      flex: 1;
    }
    .logo img {
      width: 100%;
      max-width: 24rem;
      min-width: 16rem;
      height: auto;
      color: ${props => props.theme.foreground}
    }
    .hamburger {
      justify-content: flex-start;
      flex-direction: column;
    }
    .hamburger button {
      cursor: pointer;
      width: 1.5rem;
      height: 100%;
      border: none;
      outline: none;
      background: 0 0;
    }
    .hamburger span {
      display: block;
      width: 1.5rem;
      height: 0.125rem;
      background-color: ${props => props.theme.foreground};
      margin: 0.375rem 0;
      transition: 0.2s;
    }
    .hamburger button:hover {
      span:nth-child(1) {
        transform: translate(0,-0.25rem);
      }
      span:nth-child(3) {
        transform: translate(0,0.25rem);
      }
    }
    }
    .logo {
      justify-content: center;
    }
    .cta {
      justify-content: flex-end;
    }
  }
  .menu {
    position: fixed;
    top: 0;
    right: auto;
    bottom: 0;
    background-color: ${props => props.theme.background};
    width: fit-content;
    transform: translateX(-100%);
    visibility: hidden;
    z-index: 2;
    transition: transform 0.3s;
  }
  .isMenuOpened {
    transform: translateX(0) !important; 
    visibility: visible !important;
  }
  .overlay.isMenuOpened {
    position: fixed;
    top: 0;
    right: auto;
    bottom: 0;
    background-color: rgba(0,0,0,0.75);
    width: 100%;
    z-index: 1;
    transition: 0.3s;
  }
  .x {
    margin: 2rem;
    position: relative;
    cursor: pointer;
    height: 1.5rem;
    width: 1.5rem;
    border: none;
    outline: none;
    background: 0 0;
  }
  .x span {
    display: block;
    position: absolute;
    width: 1.5rem;
    height: 0.125rem;
    transition: .3s;
    background-color: ${props => props.theme.foreground};
  }
  .x span:nth-child(1) {
    transform: rotate(-45deg);
  }
  .x span:nth-child(2) {
    transform: rotate(45deg);
  }
  .x:hover {
    span:nth-child(1) {
      transform: rotate(45deg);
    }
    span:nth-child(2) {
      transform: rotate(135deg);
    }
  }
  .menu ul {
    margin: 3.5rem;
    margin-top: 0;
    list-style: none;
  }
  .menu ul li {
    padding: 0.25em 0;
  }
  .menu ul li a {
    color: ${props => props.theme.foreground};
    text-decoration: none;
    font-size: 2rem;
    font-weight: 700;
    transition: 0.3s;
  }
  .menu ul li a:visited {
    color: ${props => props.theme.foreground};
  }
  .menu ul li a:hover {
    color: grey;
    text-decoration: underline;
  }
  .menu .social {
    padding: 0.25em 0;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
  }
  .menu .social svg {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    margin-right: 0.25rem;
  }
  @media (max-width: 1280px) {
    .cta {
      width: 0%;
      position: absolute;
      visibility: hidden;
    }
    li.hamburger {
      flex-grow: 0;
      margin-right: 2rem;
    }
  }
`

export default Navbar
