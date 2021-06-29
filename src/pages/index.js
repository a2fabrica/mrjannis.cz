import React from "react"
import styled from "styled-components"
import { Layout, SEO } from "../components"
import Hero from "../images/hero.jpg"
import Promo1 from "../images/promo1.jpg"
import Promo2 from "../images/promo2.jpg"

const Index = styled(({ className }) => {
  return (
    <Layout>
      <SEO title="Úvod" />
      <div className={className}>
        <section className="hero">
          <div className="background"></div>
          <div className="content">
            <h1>
              Autentický řecký streetfood <br />
              jak z Athén
            </h1>
            <p>
              Nově pod otevřeným nebem na terasách <br /> obchodního centra
              Harfa
            </p>
          </div>
        </section>
        <section className="promo">
          <article className="reversed">
            <div className="image">
              <img src={Promo1} alt="gyros" />
            </div>
            <div className="text background-image-1">
              <h1>Tradiční řecká kuchyň</h1>
              <p>
                Pro všechny milovníky řecké kuchyně připravujeme originální
                řecký gyros a souvlaki z kuřecího či vepřového masa, čerstvě
                grilovanou zeleninu nebo grilovaný sýry feta a kyperský
                halloumi. Samozřejmostí je i tradiční řecký salát nebo sladké,
                oříškové baklavy.
              </p>
            </div>
          </article>
          <article>
            <div className="image">
              <img src={Promo2} alt="souvlaki" />
            </div>
            <div className="text">
              <h1>Pro každého něco</h1>
              <p>
                Ať už jdete s dětmi z vedlejšího DinoParku nebo Vám s přítelem
                chyběla řecká kuchyň, jsme tu pro každého. Pro naše zákazníky
                vegetariány máme speciální gyros a kromě pestré nabídky řeckých
                vín, piva a destilátů nabízíme i nealkoholické ledové čaje nebo
                limonády.
              </p>
            </div>
          </article>
        </section>
      </div>
    </Layout>
  )
})`
  h1 {
    font-size: 3.5rem;
    line-height: 4rem;
    padding: 0 2rem;
  }
  p {
    font-size: 1.5rem;
    padding: 0.75rem 2rem 0 2rem;
  }
  section.hero {
    height: calc(90vh - 5.75rem);
    overflow-x: hidden;
  }
  section.hero .background {
    position: absolute;
    background-image: url(${Hero});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    opacity: 0.5;
    width: 100%;
    height: 90vh;
    left: 0;
    top: 0;
    z-index: -1;
  }
  section.hero .content {
    margin: 5rem 0 0 0;
    overflow-wrap: break-word;
    width: 100%;
  }
  @media (max-width: 768px) {
    section.hero .content {
      margin: 2rem;
    }
    h1 {
      font-size: 2.5rem;
      line-height: 2.75rem;
      padding: 0 2rem 0 0;
      br {
        display: none;
      }
    }
    p {
      font-size: 1.25rem;
      padding: 0 2rem 0 0;
    }
  }
  section.promo {
    margin-bottom: 2rem;
  }
  section.promo article {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    justify-items: center;
    align-items: center;
  }
  section.promo article .image img {
    width: 100%;
    max-width: 40rem;
    padding: 0 2rem;
    object-fit: cover;
  }
  section.promo article.reversed .image {
    order: 2;
  }
  section.promo article.reversed .text {
    order: 1;
  }
  @media (max-width: 768px) {
    section.promo {
      margin-top: 1.75rem;
      margin-bottom: 4rem;
    }
    section.promo article {
      display: grid;
      grid-template-columns: 1fr;
    }
    section.promo article .text {
      margin: 2rem;
    }
    section.promo article .image {
      order: 2;
    }
    section.promo article .text {
      order: 1;
    }
    section.promo article .image img {
      max-width: none;
    }
  }
`

export default Index
