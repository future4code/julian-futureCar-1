import React, { Component } from 'react'
import './AppContainer.css'
import styled from 'styled-components';
import Banner from '../imagem/carro.jpg';
import { Menu } from './Menu'
import { CardContainer } from './CardContainer'
import { Header } from './Header'
import { Cadastro } from './Cadastro'
import Footer from './Footer'



const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  width:100%;
  max-width:100vw;
  margin:0;
`
const SectionProdutos = styled.section`
  max-width:100%;
  display:flex;
  flex-direction: row;
  margin:0;
`


const Main = styled.main`
  display:flex;
  align-items:center;
  flex-direction: column;
  max-width:99vw;
`

const BannerImg = styled.img`
width:100%;
`

export class AppContainer extends React.Component {

  state = {

  }


  render() {
    return (
      <Container>
          <Header />
        <BannerImg src={Banner} />
        <Main>
          <Menu />
          <SectionProdutos>
            <CardContainer />
          </SectionProdutos>
        </Main>



        <Footer />
      </Container>

    )
  }
}
