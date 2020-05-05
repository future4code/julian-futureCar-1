import React, { Component } from 'react'
import styled from 'styled-components';
import { Menu } from './Menu'
import { CardContainer } from './CardContainer'
import { Header } from './Header'
import Footer from './Footer'

const Container = styled.div`
  display:flex;
  flex-direction:column;
  width:100vw;
`

export class AppContainer extends React.Component {

  state = {

  }


  render() {
    return (
      <Container>
        <Header></Header>
      <div>           

        <Menu></Menu>
        <CardContainer />        

      </div>
      <Footer />
      </Container>
    )
  }
}
