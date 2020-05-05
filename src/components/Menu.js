import React from 'react'
import styled from 'styled-components'

const MenuContainer = styled.div`
    border: 1px black solid;
    display: flex;
    flex-direction: column;
    width: 30vw;
    margin-top: 3vw;
    margin-left: 3vw;
    padding:1vw;
`
const InputTexto = styled.input`
    border: 1px black solid;
`

const InputValor = styled.input`
    border: 1px black solid;
`

export class Menu extends React.Component {
    render() {
      return (
        <MenuContainer>
            <InputTexto
            placeholder="Digite marca ou modelo"
            ></InputTexto>
            <label>Valor Mínimo:</label>
            <InputValor
            type="number">
            </InputValor>
            <label>Valor Máximo:</label>
            <InputValor
            type="number">
            </InputValor>
            <label>Ordenar por:</label>
            <select>
                <option>Título</option>
                <option>Valor de Venda</option>
                <option>Prazo de Entrega</option>
            </select>
        </MenuContainer>
      )
    }
  }