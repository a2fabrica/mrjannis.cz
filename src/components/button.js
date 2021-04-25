import React from "react"
import styled from "styled-components"

const Button = styled(({ className, href, children }) => {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  )
})`
  display: inline-grid;
  background-color: ${props =>
    props.inverted ? props.theme.background : props.theme.foreground};
  padding: 0.75rem 1rem;
  cursor: pointer;
  border: 0.0625rem solid transparent;
  font-size: 1rem;
  font-weight: 500;
  color: ${props =>
    props.inverted ? props.theme.foreground : props.theme.background};
  text-decoration: none;
  white-space: nowrap;
  &:visited {
    color: ${props =>
      props.inverted ? props.theme.foreground : props.theme.background};
  }
  &:hover {
    transition: 0.3s;
    border: 0.0625rem solid
      ${props =>
        props.inverted ? props.theme.background : props.theme.foreground};
    background-color: ${props =>
      props.inverted ? props.theme.foreground : props.theme.background};
    color: ${props =>
      props.inverted ? props.theme.background : props.theme.foreground};
    &:visited {
      color: ${props =>
        props.inverted ? props.theme.background : props.theme.foreground};
    }
  }
`

export default Button
