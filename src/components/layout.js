import React from "react"
import { Navbar, Footer } from "../components"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import HelveticaNeue from "../fonts/HelveticaNeue.otf"
import HelveticaNeueMedium from "../fonts/HelveticaNeueMedium.otf"
import GTAmericaBold from "../fonts/GT-AmericaBold.otf"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "HelveticaNeue";
    src: url(${HelveticaNeue}) format("opentype");
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "HelveticaNeue";
    src: url(${HelveticaNeueMedium}) format("opentype");
    font-weight: 500;
    font-display: swap;
  }
  @font-face {
    font-family: "GT America";
    src: url(${GTAmericaBold}) format("opentype");
    font-weight: 700;
    font-display: swap;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    overflow-x: hidden;
    background: ${props => props.theme.background};
    color: ${props => props.theme.foreground};
    font-family: "HelveticaNeue", sans-serif;
  }
  h1 {
    font-family: "GT America", sans-serif;
  }
  p {
    letter-spacing: 0.05rem;
  }
  main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .children {
    margin: 0 2rem;
  }
  @media (max-width: 768px) {
    .children {
      margin: 0;
    }
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={{ foreground: "white", background: "black" }}>
        <GlobalStyle />
        <main>
          <Navbar />
          <div className="children">{children}</div>
          <Footer />
        </main>
      </ThemeProvider>
    </>
  )
}

export default Layout
