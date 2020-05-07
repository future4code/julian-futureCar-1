import React from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const MenuContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3vw;
    width: 95vw;
    height:10vw;
    padding-left: 3vw;
    padding-right: 3vw;
    box-shadow: 10px 10px 10px grey;
`
const ValorMinimo = styled(TextField)`
    width: 10vw;
`
const SelectFiltro = styled(TextField)`
    width: 10vw;
`

const BotaoBuscar = styled(Button)`
    background-color: rgb(226, 42, 36);
`

const currencies = [
    {
      value: 'titulo',
      label: 'Título',
    },
    {
      value: 'venda',
      label: 'Valor da venda',
    },
    {
      value: 'entrega',
      label: 'Prazo de Entrega',
    }
  ];

export class Menu extends React.Component {
    render() {
        return (

          //Adicionado as props dos filtros de nome, valor maximo e valor minimo

        
            <MenuContainer>
                <TextField
                    id="standard-basic"
                    label="Qual carro você procura?"
                    value={this.props.nameFilter}  //filtro para o nome
                    onChange={this.props.onChangeNameFilter}
                />
                <ValorMinimo

                    id="standard-basic"
                    label="Valor Mínimo"
                    type="number"
                    value={this.props.minFilter} //filtro para o valor minimo
                    onChange={this.props.onChangeMinFilter}
                />
                <TextField
                    id="standard-basic"
                    label="Valor Máximo"
                    type="number"
                    value={this.props.maxFilter} //filtro para o valor maximo
                    onChange={this.props.onChangeMaxFilter}
                />
                <SelectFiltro
                select
                label="Ordenar por"
                >
                    {currencies.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                  </SelectFiltro>

                <BotaoBuscar>Buscar</BotaoBuscar>
            </MenuContainer>
        )
    }
}