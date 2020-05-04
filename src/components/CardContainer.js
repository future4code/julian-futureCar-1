import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border: 1px black solid;
    width:30%;
    padding: 0.5vw;
    margin: 0.5vw;
    margin-top: 3vw;
`

const DivContainer = styled.div`
    display:flex;
`

const Titulo = styled.h3`

`

const Foto = styled.img`
    width: 90%;
`

const Descricao = styled.p`

`

const Valor = styled.h3`

`


export class CardContainer extends React.Component {
    state = {
        carros: [{
            marca: "HYUNDAI",
            nome: "HB20",
            imagem: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/HN8P2?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1562949177509",
            preco: "1500",
            descricao: "Carrinho muito veloz 0km topper zopper",
        },
        {
            marca: "HYUNDAI",
            nome: "HB20",
            imagem: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/HN8P2?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1562949177509",
            preco: "1500",
            descricao: "Carrinho muito veloz 0km topper zopper",
        }, 
        {
            marca: "HYUNDAI",
            nome: "HB20",
            imagem: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/HN8P2?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1562949177509",
            preco: "1500",
            descricao: "Carrinho muito veloz 0km topper zopper",
        }, 
        {
            marca: "HYUNDAI",
            nome: "HB20",
            imagem: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/HN8P2?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1562949177509",
            preco: "1500",
            descricao: "Carrinho muito veloz 0km topper zopper",
        }, 
        {
            marca: "HYUNDAI",
            nome: "HB20",
            imagem: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/HN8P2?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1562949177509",
            preco: "1500",
            descricao: "Carrinho muito veloz 0km topper zopper",
        }]
    }

    render() {

        const imprimeCarros = this.state.carros.map((carro) => {
            return (
                <Container>
                    <Foto src={carro.imagem}></Foto>
                    <Titulo>{carro.marca} {carro.nome}</Titulo>
                    <Descricao>{carro.descricao}</Descricao>
                    <Valor>R${carro.preco}</Valor>
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