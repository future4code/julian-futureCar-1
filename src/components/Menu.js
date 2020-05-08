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
  width: 20vw;
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
    value: "vendaA",
    label: "Preço Crescente",
  },
  {
    value: "vendaB",
    label: "Preço Decrescente",
  },
  {
    value: "entrega",
    label: "Prazo de Entrega",
  },
];

export class Menu extends React.Component {
  state = {
  };

  
  onClickBuscar = () => {};

  render() {
    return (
      <MenuContainer>
        <TextField
          onChange={this.props.onChangeTex}
          label="Qual carro você procura?"
        />
        <ValorMinimo
          onChange={this.props.onChangeMi}
          label="Valor Mínimo"
          type="number"
        />
        <TextField
          onChange={this.props.onChangeMa}
          label="Valor Máximo"
          type="number"
        />
        <SelectFiltro value={this.props.valueSe} onChange={this.props.onChangeSe} select label="Ordenar por">
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
