import React from 'react'
import styled from 'styled-components'
import './CardContainer.css'
import Button from '@material-ui/core/Button';
import axios from 'axios'

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
    border: 1px rgb(101, 98, 97) solid;
    width:20vw;
    margin: 2vw;
    height: auto;
    background-color: rgb(49, 50, 50);
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

export class CardContainer extends React.Component {
    //state para teste do card, apagar depois
    state = {
        carros: []

    }

    componentDidMount () {
        this.carregaLista()
    }

carregaLista = () => {
    axios
        .get('https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars')
        .then(result => {
            this.setState({ carros: result.data.cars })
            console.log(this.state.carros)
        }).catch (error => {
            console.log("erro:", error)
        })
}

    render() {

        const imprimeCarros = this.state.carros.map((carro) => {

            return (
                <ContainerCard className='hoverBorderVermelho'>
                    <Foto src={carro.paymentMethod}></Foto>
                    <ContainerDetalhes>
                    <Titulo>{carro.name}</Titulo>
                    <Descricao>{carro.description}</Descricao>
                    <Valor>R$: {carro.price}</Valor>
                    <FormaDePagamento>Forma de pagamento: Cartão</FormaDePagamento>
                    <PrazoEntrega>Prazo de entrega: {carro.shipping} dias</PrazoEntrega>
                    </ContainerDetalhes>
                    <BotaoQuero>QUERO ESTE CARRO</BotaoQuero>
                </ContainerCard>
            )
        })

        return (
            <Container>
                {imprimeCarros}
            </Container>
        )
    }
}