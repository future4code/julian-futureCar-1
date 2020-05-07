import React, { Component } from 'react'

import './AppContainer.css'
import styled from 'styled-components';

import { Menu } from './Menu'
import { CardContainer } from './CardContainer'
import { Header } from './Header'
import { Cadastro } from './Cadastro'
import Footer from './Footer'


const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  width:100vw;
  max-width:100vw;
  margin:0;
`
const SectionProdutos= styled.section`
  max-width:99vw;
  display:flex;
  flex-direction: row;
  padding-right:1vw;
`

export class AppContainer extends React.Component {

  state = {

  }


  render() {
    return (
      <Container>

        <Menu />
        <SectionProdutos>
          <CardContainer />
        </SectionProdutos>


        <Footer />
      </Container>

    )
  }
}
