import React from "react"
import styled from "styled-components"
import { Layout } from "../components"

const _404 = styled(({ className }) => {
  return (
    <Layout>
      <div className={className}>
        <section>
          <div>
            <h1>404</h1>
            <p>Omlouváme se, ale Vámi požadovaná stránka nebyla nalezena.</p>
          </div>
        </section>
      </div>
    </Layout>
  )
})`
  margin: 0 2rem;
  h1 {
    font-size: 3.5rem;
    line-height: 4rem;
  }
  p {
    font-size: 1.5rem;
    margin-top: 0.75reml;
  }
  section {
    margin-top: 2rem;
    min-height: 75vh;
  }
`

export default _404
