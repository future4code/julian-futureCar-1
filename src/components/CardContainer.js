import React from "react";
import styled from "styled-components";
import axios from "axios";
import "./CardContainer.css";
import CardProduto from "./CardProduto";

const DivContainer = styled.div`
  display: flex;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  width: 20%;
  margin: 2vw;
  height: auto;
  background-color: rgb(49, 50, 50);
`;

const ContainerDetalhes = styled.div`
  display: flex;
  padding: 0;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding-bottom: 1vw;
  border-right: 1px rgb(101, 98, 97) solid;
  border-left: 1px rgb(101, 98, 97) solid;
`;

const Titulo = styled.h3`
  margin: 0;
  color: rgb(226, 42, 36);
  font-size: 1.5em;
`;

const Foto = styled.img`
  width: 100%;
  margin: 0;
  background-color: white;
`;

const Descricao = styled.p`
  margin: 0;
  text-align: center;
`;

const Valor = styled.h3`
  margin: 0;
  color: rgb(226, 42, 36);
  font-size: 1.5em;
`;

const FormaDePagamento = styled.p`
  margin: 0;
`;

const PrazoEntrega = styled.p`
  color: rgb(226, 42, 36);
  margin: 0;
`;

const BotaoQuero = styled.button`
  border: none;
  width: 100%;
  color: white;
  height: 5vw;
  font-size: 1.2em;
  margin: 0;
  background-color: transparent;
`;

export class CardContainer extends React.Component {
  state = {
    minFilter: 1000,
    maxFilter: 1500,
    nameFilter: "",
    carros: [],
  };

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

  onChangeMinFilter = (event) => {
    this.setState({ minFilter: event.target.value });
  };

  onChangeMaxFilter = (event) => {
    this.setState({ maxFilter: event.target.value });
  };

  onChangeNameFilter = (event) => {
    this.setState({ nameFilter: event.target.value });
  };

  render() {
    console.log(this.state.carros)
    return (
      <DivContainer>
        <CardProduto listaCarros={this.state.carros} />
      </DivContainer>
    );
  }
}
