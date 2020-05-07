import React from "react";
import styled from "styled-components";
import axios from "axios";
import "./CardContainer.css";
import CardProduto from "./CardProduto";

const DivContainer = styled.div`
  display: flex;
  flex-wrap:wrap;
  max-width:100%;
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
