import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3vw;
  width: 95vw;
  height: 10vw;
  margin: 0;
  padding-left: 3vw;
  padding-right: 3vw;
  box-shadow: 10px 10px 10px grey;
  background-color: white;
`;
const ValorMinimo = styled(TextField)`
  width: 10vw;
`;
const SelectFiltro = styled(TextField)`
  width: 10vw;
`;

const BotaoBuscar = styled(Button)`
  background-color: rgb(226, 42, 36);
`;

const currencies = [
  {
    value: "titulo",
    label: "Título",
  },
  {
    value: "venda",
    label: "Valor da venda",
  },
  {
    value: "entrega",
    label: "Prazo de Entrega",
  },
];

export class Menu extends React.Component {
  state = {
    inputTextoValor: "",
    inputValorMinValor: "",
    inputValorMaxValor: "",
    selectValor: "",
  };

  onChangeTexto = (event) => {
    this.setState({
      inputTextoValor: event.target.value,
    });
    console.log(this.state.inputTextoValor);
  };

  onChangeMin = (event) => {
    this.setState({
      inputValorMinValor: event.target.value,
    });
    console.log(this.state.inputValorMinValor);
  };

  onChangeMax = (event) => {
    this.setState({
      inputValorMaxValor: event.target.value,
    });
    console.log(this.state.inputValorMaxValor);
  };

  onChangeSelect = (event) => {
    this.setState({
      selectValor: event.target.value,
    });
    console.log(this.state.selectValor);
  };

  onClickBuscar = () => {};

  render() {
    return (
      <MenuContainer>
        <TextField
          onChange={this.onChangeTexto}
          id="standard-basic"
          label="Qual carro você procura?"
        />
        <ValorMinimo
          onChange={this.onChangeMin}
          id="standard-basic"
          label="Valor Mínimo"
          type="number"
        />
        <TextField
          onChange={this.onChangeMax}
          id="standard-basic"
          label="Valor Máximo"
          type="number"
        />
        <SelectFiltro onChange={this.onChangeSelect} select label="Ordenar por">
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </SelectFiltro>

        <BotaoBuscar onClick={this.onClickBuscar}>Buscar</BotaoBuscar>
      </MenuContainer>
    );
  }
}
