import React from 'react'
import styled from 'styled-components'
import './CardContainer.css'

const DivContainer = styled.div`
    display:flex;
`

const Container = styled.div`
    display:flex;
    flex-direction: column;
    border: 2px rgb(101, 98, 97) solid;
    width:20%;
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

const BotaoQuero = styled.button`
    border:none;
    width: 100%;
    color:white;
    height: 5vw;
    font-size: 1.2em;
    margin:0;
    background-color: transparent;
`

export class CardContainer extends React.Component {
    state = {
        carros: [{
            nome: "Fusquinha",
            imagem: "https://jmonline.com.br/uploads/noticia/141640_1.jpg",
            preco: "1500",
            descricao: "Carrinho muito veloz 0km topper zopper",
            prazo: "60dias",
            pagamento: "crédito"
        }, {
            nome: "Fusquinha",
            imagem: "https://jmonline.com.br/uploads/noticia/141640_1.jpg",
            preco: "1500",
            descricao: "Carrinho muito veloz 0km topper zopper",
            prazo: "60dias",
            pagamento: "crédito"
        }, {
            nome: "Fusquinha",
            imagem: "https://jmonline.com.br/uploads/noticia/141640_1.jpg",
            preco: "1500",
            descricao: "Carrinho muito veloz 0km topper zopper",
            prazo: "60dias",
            pagamento: "crédito"
        }, {
            nome: "Fusquinha",
            imagem: "https://jmonline.com.br/uploads/noticia/141640_1.jpg",
            preco: "1500",
            descricao: "Carrinho muito veloz 0km topper zopper",
            prazo: "60dias",
            pagamento: "crédito"
        }]
    }

    render() {

        const imprimeCarros = this.state.carros.map((carro) => {
            return (
                <Container className='hoverBorderVermelho'>
                    <Foto src={carro.imagem}></Foto>
                    <ContainerDetalhes>
                    <Titulo>{carro.nome}</Titulo>
                    <Descricao>{carro.descricao}</Descricao>
                    <Valor>R${carro.preco}</Valor>
                    <FormaDePagamento>Forma de pagamento: {carro.pagamento}</FormaDePagamento>
                    <PrazoEntrega>Prazo de entraga: {carro.prazo}</PrazoEntrega>
                    </ContainerDetalhes>
                    <BotaoQuero>QUERO ESTE CARRO</BotaoQuero>
                </Container>
            )
        })

        return (
            <DivContainer>
                {imprimeCarros}
            </DivContainer>
        )
    }
}