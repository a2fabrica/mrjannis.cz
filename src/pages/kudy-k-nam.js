import React from "react"
import styled from "styled-components"
import { Layout } from "../components"

const Kudyknam = styled(({ className }) => {
  return (
    <Layout>
      <div className={className}>
        <section>
          <div className="text">
            <h1>Kudy k nám</h1>
            <p>
              Náš streetfood stánek najdete na terasách Galerie Harfy (3. patro)
              vedle vstupu do DinoParku. Městskou hromadnou dopravou je to
              minuta chůze ze stanice metra B - Českomoravská nebo tramvajovými
              linky 8/25 ze zastávky Ocelářská. Autem vjezdem z Českomoravské
              nebo Ocelářské ulice s parkováním v garážích centra zdarma.
            </p>
          </div>
          <div className="google-maps">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3366.918575641287!2d14.487182349284515!3d50.10450059378945!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x55318b3ed29f8c57!2sMR.%20JANNIS!5e0!3m2!1scs!2scz!4v1624659374135!5m2!1scs!2scz"
              width="500"
              height="500"
              frameBorder="0"
              title="map"
            />
          </div>
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
  section {
    min-height: 100vh;
    margin-bottom: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    justify-items: center;
    align-items: center;
  }
  @media (max-width: 768px) {
    section {
      grid-template-columns: 1fr;
      margin-bottom: 2rem;
    }
    .google-maps iframe {
      margin: 2rem 0;
      width: 23.25rem;
      height: 23.25rem;
    }
  }
`

export default Kudyknam
