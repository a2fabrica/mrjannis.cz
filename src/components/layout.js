import React from "react"
import { Navbar, Footer } from "../components"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import HelveticaNeue from "../fonts/HelveticaNeue.ttf"
import HelveticaNeueMedium from "../fonts/HelveticaNeueMedium.ttf"
import HelveticaNeueBold from "../fonts/HelveticaNeueBold.ttf"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Helvetica Neue";
    src: url(${HelveticaNeue}) format("truetype");
    font-weight: 400;
  }
  @font-face {
    font-family: "Helvetica Neue";
    src: url(${HelveticaNeueMedium}) format("truetype");
    font-weight: 500;
  }
  @font-face {
    font-family: "Helvetica Neue";
    src: url(${HelveticaNeueBold}) format("truetype");
    font-weight: 700;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    overflow-x: hidden;
    background: ${props => props.theme.background};
    color: ${props => props.theme.foreground};;
    font-family: "Helvetica Neue", sans-serif;
  }
  main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  header {
      flex-grow: 1;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={{ foreground: "black", background: "white" }}>
        <GlobalStyle />
        <main>
          <header>
            <Navbar />
            {children}
          </header>
          <Footer />
        </main>
      </ThemeProvider>
    </>
  )
}

export default Layout
