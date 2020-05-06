import React, { Component } from 'react'
import styled from 'styled-components';
import { Menu } from './Menu'
import { CardContainer } from './CardContainer'
import { Header } from './Header'
import { Cadastro } from './Cadastro'
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
        <Header />
      <div>           

        <Menu />
        <CardContainer />        

      </div>
      <Footer />
      </Container>

    )
  }
}
