import React from "react";
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import axios from "axios";

const Container = styled.div`
    display:flex;
    max-width:100vw;
    padding:0;
    justify-content: space-between;
    flex-direction:row;
    flex-wrap: wrap;
`

const ContainerCard = styled.div`
    display:flex;
    flex-direction: column;
    border: 2px rgb(101, 98, 97) solid;
    width:20vw;
    margin: 2vw;
    height: auto;
    background-color: rgb(49, 50, 50);

    :hover{   
    border:2px rgb(226, 42, 36) solid;
    background-color: rgb(226, 42, 36);
}
`

const ContainerDetalhes = styled.div`
    display: flex;
    padding: 0;
    flex-direction: column;
    align-items: center;
    background-color: white;
    padding-bottom:1vw;
`

const Titulo = styled.h3`
    margin:0;
    color: rgb(226, 42, 36);
    font-size: 1.5em;
`

const Foto = styled.img`
    width: 100%;
    margin:0;
    background-color: white;
`

const Descricao = styled.p`
    margin:0;
    text-align: center;
`

const Valor = styled.h3`
    margin:0;
    color: rgb(226, 42, 36);
    font-size: 1.5em;
`

const FormaDePagamento = styled.p`
    margin:0;
`

const PrazoEntrega = styled.p`
    color: rgb(226, 42, 36);
    margin:0;
`

const BotaoQuero = styled(Button)`
    border:none;
    width: 100%;
    color:white;
    height: 5vw;
    font-size: 1.2em;
    margin:0;
    background-color: transparent;
`

export class CardProduto extends React.Component {
  render() {
    const listaProdutos = this.props.listaCarros

    const listaFiltradaMin = listaProdutos.filter(prod => {
      if (this.props.inputValorMinimo !== '') {
        return prod.price >= this.props.inputValorMinimo
      } else {
        return true
      }
    })

    const listaFiltradaMax = listaProdutos.filter(prod => {
      if (this.props.inputValorMaximo !== '') {
        return prod.price <= this.props.inputValorMaximo
      } else {
        return true
      }
    })

    let listaFiltradaPreco = listaFiltradaMax.filter(x => listaFiltradaMin.includes(x));

    const listaBusca = listaProdutos.filter(prod => {
      if (this.props.inputBuscar !== '') {
        return prod.name === this.props.inputBuscar
      } else {
        return true
      }
    })

    let listaFiltrada = listaBusca.filter(x => listaFiltradaPreco.includes(x));
    let listaOrdenada = listaFiltrada
    const ASC = 'ascending';

    function sortByText(a, b, order = ASC) {
      const diff = a.name.toLowerCase().localeCompare(b.name.toLowerCase());
      if (order === ASC) {
          return diff;
      }
      return -1 * diff;
  }

    if (this.props.selectVal == 'vendaA') {
      listaOrdenada = listaOrdenada.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (this.props.selectVal == 'vendaB') {
      listaOrdenada = listaOrdenada.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (this.props.selectVal == 'titulo') {
      listaOrdenada = listaOrdenada.sort((a, b) => sortByText(a, b, ASC));
    } else if (this.props.selectVal == 'entrega') {
      listaOrdenada = listaOrdenada.sort((a, b) => parseFloat(a.shipping) - parseFloat(b.shipping));
    }

    return (
      <Container>
        {listaOrdenada.map((carro) => {
          return (
            <ContainerCard>
              <Foto src={carro.paymentMethod}></Foto>
              <ContainerDetalhes>
                <Titulo>{carro.name}</Titulo>
                <Descricao>{carro.description}</Descricao>
                <Valor>R${carro.price}</Valor>
                <FormaDePagamento>Forma de pagamento: Cartão</FormaDePagamento>
                <PrazoEntrega>Prazo de entraga: {carro.shipping}</PrazoEntrega>
              </ContainerDetalhes>
              <BotaoQuero>QUERO ESTE CARRO</BotaoQuero>
            </ContainerCard>
          );
        })}
      </Container>
    )
  }
}

export default CardProduto;
