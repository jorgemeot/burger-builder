import React from 'react'
import styled, { keyframes, css } from 'styled-components'

const load = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const animationBefore = css`
  ${load} 2s infinite ease 1.5s;
`

const animationAfter = css`
  ${load} 2s infinite ease;
`

const Loader = styled.div`
  width: 10em;
  height: 10em;
  font-size: 11px;
  color: #521751;
  margin: 55px auto;
  position: relative;
  text-indent: -99999em;
  transform: translateZ(0);
  box-shadow: inset 0 0 0 1em;
  &,
  &:after,
  &:before {
    border-radius: 50%;
  }
  &:after,
  &:before {
    content: '';
    position: absolute;
  }
  &:before {
    top: -0.1em;
    left: -0.1em;
    width: 5.2em;
    height: 10.2em;
    background: #fff;
    transform-origin: 5.2em 5.1em;
    border-radius: 10.2em 0 0 10.2em;
    animation: ${animationBefore};
  }
  &:after {
    top: -0.1em;
    left: 5.1em;
    width: 5.2em;
    height: 10.2em;
    background: #fff;
    transform-origin: 0px 5.1em;
    border-radius: 0 10.2em 10.2em 0;
    animation: ${animationAfter};
  }
`

const spinner = () => <Loader>Loading...</Loader>

spinner.displayName = 'Spinner'

export default spinner
