import React from 'react'
import './AppContainer.css'
import styled from 'styled-components';
import axios from 'axios'
import Banner from '../imagem/banner-compro-carro.svg';
import Poligono from '../imagem/poligono.png'
import { Menu } from './Menu'
import { Header } from './Header'
import { Cadastro } from './Cadastro'
import Footer from './Footer'
import CardProduto from './CardProduto';



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
    trocaPagina: false,
    carros:[],
    inputTexto: "",
    inputValorMin: "",
    inputValorMax: "",
    selectValor: "vendaA",
  }


  componentDidMount() {
    this.carregaLista(); // monta  a lista
  }


  // carrega a lista dos carros
  carregaLista = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars"
      )
      .then((result) => {
        this.setState({ carros: result.data.cars });
        
      })
      .catch((error) => {
        console.log("erro:", error);
      });
  };
  //fim do comando


    onClickTrocaPagina = () => {
      this.setState({
        trocaPagina: true
      })
    }

    onChangeTexto = (event) => {
      this.setState({
        inputTexto: event.target.value,
      });
      console.log(this.state.inputTexto);
    };
  
    onChangeMin = (event) => {
      this.setState({
        inputValorMin: event.target.value,
      });
      console.log(this.state.inputValorMin);
    };
  
    onChangeMax = (event) => {
      this.setState({
        inputValorMax: event.target.value,
      });
      console.log(this.state.inputValorMax);
    };
  
    onChangeSelect = (event) => {
      this.setState({
        selectValor: event.target.value,
      });
      console.log(this.state.selectValor);
    };
  

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
                  <Menu
                  onChangeTex={this.onChangeTexto}
                  onChangeMi={this.onChangeMin}
                  onChangeMa={this.onChangeMax}
                  onChangeSe={this.onChangeSelect}
                  valueSe={this.state.selectValor}
                  />
                </MenuContainer>
                <Main>
                  <Titulo src={Poligono} />
                  <SectionProdutos>
                    <CardProduto 
                    listaCarros = {this.state.carros} 
                    inputValorMinimo = {this.state.inputValorMin}
                    inputValorMaximo = {this.state.inputValorMax}
                    inputBuscar = {this.state.inputTexto}
                    selectVal = {this.state.selectValor}
                    />
                  </SectionProdutos>
                </Main>
                <Footer />
              </Container>
            )}
      </div>
    )
  }
}
