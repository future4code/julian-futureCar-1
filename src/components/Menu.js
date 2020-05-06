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
    
`

const BotaoBuscar = styled(Button)`
    background-color: rgb(226, 42, 36);
`

export class Menu extends React.Component {
    render() {
        return (
            <MenuContainer>
                <TextField
                    id="standard-basic"
                    label="Qual carro você procura?"
                />
                <ValorMinimo

                    id="standard-basic"
                    label="Valor Mínimo"
                    type="number"
                />
                <TextField
                    id="standard-basic"
                    label="Valor Máximo"
                    type="number" />

                <BotaoBuscar>Buscar</BotaoBuscar>
            </MenuContainer>
        )
    }
}