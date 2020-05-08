import React, { Component } from 'react'
import './AppContainer.css'
import styled from 'styled-components';
import Banner from '../imagem/banner-compro-carro.svg';
import Poligono from '../imagem/poligono.png'
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

const MenuContainer = styled.div`
display:block;
position:absolute;
margin-top:48vw;
`

const SectionProdutos = styled.section`
  max-width:100%;
  display:flex;
  flex-direction: row;
  margin:0;
  margin-top:1vw;
`


const Main = styled.main`
  display:flex;
  align-items:center;
  flex-direction: column;
  max-width:100vw;
`

const BannerImg = styled.img`
width:100%;
`

const Titulo = styled.img`
  margin-top:10vw;
  margin-left:2vw;
  align-self: flex-start;
  width:30vw;
  height: 3vw;
`


export class AppContainer extends React.Component {

  state = {
    trocaPagina: false
  }

    onClickTrocaPagina = () => {
      this.setState({
        trocaPagina: true
      })
    }


  render() {



    return (
      <div>
        {this.state.trocaPagina ? (
            <Cadastro></Cadastro>
          ) : (
              <Container>
                <Header onClickVender={this.onClickTrocaPagina} />
                <BannerImg src={Banner} />
                <MenuContainer>
                  <Menu />
                </MenuContainer>
                <Main>
                  <Titulo src={Poligono} />
                  <SectionProdutos>
                    <CardContainer />
                  </SectionProdutos>
                </Main>
                <Footer />
              </Container>
            )}
      </div>
    )
  }
}
