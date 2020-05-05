import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  width: 100vw;
  background-color: red;
`

export class Header extends React.Component {
    render() {
      return (
        <HeaderContainer>
            aqui é o header
        </HeaderContainer>
      )
    }
  }