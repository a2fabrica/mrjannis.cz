import React from "react"
import styled from "styled-components"
import { Layout, SEO } from "../components"

const Menu = styled(({ className }) => {
  return (
    <Layout>
      <SEO title="Menu" />
      <div className={className}>
        <section className="menu">
          <div className="container">
            <div>
              <article>
                <h1>Mezze</h1>
                <ul>
                  <li>
                    <p>
                      Grilovaný sýr Halloumi<span className="alergen">7</span>
                    </p>
                    <p>125 Kč</p>
                  </li>
                  <li>
                    <p>
                      Grilovaná feta<span className="alergen">7</span>
                    </p>
                    <p>110 Kč</p>
                  </li>
                  <li>
                    <p>
                      Feta sýr<span className="alergen">7</span>
                    </p>
                    <p>100 Kč</p>
                  </li>
                  <li>
                    <p>Pečené papriky</p>
                    <p>95 Kč</p>
                  </li>
                  <li>
                    <p>Grilovaný lilek</p>
                    <p>95 Kč</p>
                  </li>
                  <li>
                    <p>Olivy MIX</p>
                    <p>65 Kč</p>
                  </li>
                  <li>
                    <p>Černé olivy Kalamata bez pecky</p>
                    <p>65 Kč</p>
                  </li>
                  <li>
                    <p>Zelené olivy bez pecky</p>
                    <p>55 Kč</p>
                  </li>
                  <li>
                    <p>Černé olivy Kalamata s peckou</p>
                    <p>55 Kč</p>
                  </li>
                  <li>
                    <p>
                      Tzatziky<span className="alergen">7</span>
                    </p>
                    <p>55 Kč</p>
                  </li>
                </ul>
              </article>
              <article>
                <h1>Hlavní</h1>
                <ul>
                  <li>
                    <p>
                      Kuřecí špíz<span className="alergen">1,7</span>{" "}
                      <span className="description">
                        (kuřecí špíz, tzatziki, rajčata, červená cibule,
                        hranolky, pita chléb)
                      </span>
                    </p>
                    <p>125 Kč</p>
                  </li>
                  <li>
                    <p>
                      Kuřecí špíz - talíř<span className="alergen">1,7</span>
                    </p>
                    <p>185 Kč</p>
                  </li>
                  <li>
                    <p>
                      Vepřový špíz<span className="alergen">1,7</span>{" "}
                      <span className="description">
                        (vepřový špíz, tzatziki, rajčata, červená cibule,
                        hranolky, pita chléb)
                      </span>
                    </p>
                    <p>125 Kč</p>
                  </li>
                  <li>
                    <p>
                      Vepřový špíz - talíř<span className="alergen">1,7</span>
                    </p>
                    <p>180 Kč</p>
                  </li>
                  <li>
                    <p>Grilovaná zelenina</p>
                    <p>110 Kč</p>
                  </li>
                  <li>
                    <p>
                      Gyros vegetariánský<span className="alergen">1,7</span>{" "}
                      <span className="description">
                        (grilovaná zelenina, tzatziki, rajčata, červená cibule,
                        nakládaný česnek v olivovém oleji, pita chléb)
                      </span>
                    </p>
                    <p>110 Kč</p>
                  </li>
                  <li>
                    <p>
                      Vepřový gyros<span className="alergen">1,7</span>{" "}
                      <span className="description">
                        (vepřový maso, tzatziki, rajčata, červená cibule,
                        hranolky, pita chléb)
                      </span>
                    </p>
                    <p>100 Kč</p>
                  </li>
                  <li>
                    <p>
                      Vepřový gyros - talíř<span className="alergen">1,7</span>
                    </p>
                    <p>170 Kč</p>
                  </li>
                  <li>
                    <p>
                      Vepřový gyros - dětský<span className="alergen">1,7</span>
                    </p>
                    <p>65 Kč</p>
                  </li>
                  <li>
                    <p>
                      Kuřecí gyros<span className="alergen">1,7</span>{" "}
                      <span className="description">
                        (kuřecí maso, tzatziki, rajčata, červená cibule,
                        hranolky, pita chléb)
                      </span>
                    </p>
                    <p>100 Kč</p>
                  </li>
                  <li>
                    <p>
                      Kuřecí gyros - talíř<span className="alergen">1,7</span>
                    </p>
                    <p>170 Kč</p>
                  </li>
                  <li>
                    <p>
                      Kuřecí gyros - dětský<span className="alergen">1,7</span>
                    </p>
                    <p>65 Kč</p>
                  </li>
                  <li>
                    <p>
                      Pita chléb<span className="alergen">1</span>
                    </p>
                    <p>15 Kč</p>
                  </li>
                </ul>
              </article>
              <article>
                <h1>Saláty</h1>
                <ul>
                  <li>
                    <p>
                      Salát MR. JANNIS<span className="alergen">7</span>{" "}
                      <span className="description">
                        (kuřecí maso, rajčata, okurky, červená cibule, feta sýr,
                        olivy, oregano a olivový olej)
                      </span>
                    </p>
                    <p>145 Kč</p>
                  </li>
                  <li>
                    <p>
                      Řecký salát - velký<span className="alergen">7</span>{" "}
                      <span className="description">
                        (rajčata, okurky, červená cibule, feta sýr, olivy,
                        oregano a olivový olej)
                      </span>
                    </p>
                    <p>125 Kč</p>
                  </li>
                  <li>
                    <p>
                      Řecký salát - malý<span className="alergen">7</span>
                    </p>
                    <p>90 Kč</p>
                  </li>
                  <li>
                    <p>
                      Rajčatový salát{" "}
                      <span className="description">
                        (rajčata, červená cibule, oregano a olivový olej)
                      </span>
                    </p>
                    <p>69 Kč</p>
                  </li>
                </ul>
              </article>
            </div>
            <div>
              <article>
                <h1>Nealko</h1>
                <ul>
                  <li>
                    <p>Jahodová limonáda bez cukru 0.25l</p>
                    <p>79 Kč</p>
                  </li>
                  <li>
                    <p>Zázvorová limonáda s ibiškem bez cukru 0.25l</p>
                    <p>79 Kč</p>
                  </li>
                  <li>
                    <p>Mátová limonáda bez cukru 0.25l</p>
                    <p>79 Kč</p>
                  </li>
                  <li>
                    <p>Limonáda s kiwi a mátou bez cukru 0.25l</p>
                    <p>79 Kč</p>
                  </li>
                </ul>
              </article>
              <article>
                <h1>Víno</h1>
                <ul>
                  <li>
                    <p>Retzina Lafkioti 0.15l</p>
                    <p>60 Kč</p>
                  </li>
                  <li>
                    <p>Retzina Lafkioti 0.5l</p>
                    <p>170 Kč</p>
                  </li>
                  <li>
                    <p>Bílé suché víno Lafkiotis 0.15l</p>
                    <p>60 Kč</p>
                  </li>
                  <li>
                    <p>Červené suché víno Lafkiotis 0.15l</p>
                    <p>65 Kč</p>
                  </li>
                  <li>
                    <p>Červené suché víno Lafkiotis 0.5l</p>
                    <p>180 Kč</p>
                  </li>
                  <li>
                    <p>Růžové suché víno Lafkiotis 0.15l</p>
                    <p>65 Kč</p>
                  </li>
                  <li>
                    <p>Růžové suché víno Lafkiotis 0.5l</p>
                    <p>180 Kč</p>
                  </li>
                </ul>
              </article>
              <article>
                <h1>Pivo</h1>
                <ul>
                  <li>
                    <p>MYTHOS pivo 0.33l</p>
                    <p>70 Kč</p>
                  </li>
                </ul>
              </article>
              <article>
                <h1>Destiláty</h1>
                <ul>
                  <li>
                    <p>Tsipouro 0.04l</p>
                    <p>90 Kč</p>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
})`
  margin: 2rem;
  .menu {
    margin: 0 0 2rem 0;
  }
  .menu .container {
    display: grid;
    grid-template-columns: 1.15fr 1fr;
    gap: 2rem;
  }
  .menu article {
    margin-bottom: 0.5rem;
  }
  .menu article ul li {
    display: grid;
    grid-template-columns: 75fr 25fr;
    justify-content: space-between;
    padding: 0.5rem 1rem;
    border: 1px solid rgba(255, 255, 255, 0.25);
  }
  .menu article ul li p:nth-child(2) {
    justify-self: end;
  }
  .menu article h1 {
    font-size: 3.5rem;
    line-height: 4rem;
    margin-bottom: 0.5rem;
  }
  .menu article ul li p {
    font-size: 1.5rem;
  }
  .menu article ul li p span.alergen {
    font-size: 0.75rem;
    vertical-align: top;
  }
  .menu article ul li p span.description {
    font-size: 0.75rem;
    vertical-align: middle;
  }
  @media (max-width: 768px) {
    margin: 0 2rem;
    .menu .container {
      grid-template-columns: 1fr;
      gap: 0;
    }
  }
`

export default Menu
