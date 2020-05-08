import React from "react";
import styled from "styled-components";
import logo from "../components/imagens/futurecar.png";
import logocar from "../components/imagens/logo.png";
import carimagem from "../components/imagens/foto-100.jpg";
import axios from "axios";

const Car = styled.img`
  margin: 0;
  padding: 0;
  z-index: 1;
  width: 100%;
  opacity: 0.1;
  position: fixed;
`;

const Body = styled.div`
  background: #f2ce46;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

const Form = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 40vw;
  height: 120vh;
  background: white;
  border-radius: 20px;
  margin: auto;
  z-index: 1;
`;

const Informacao = styled.div`
  color: red;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  z-index: 1;
`;

const Texto = styled.div`
  margin-top: 70px;
  margin-bottom: 120px;
  width: 100%;
  color: red;
  font-family: sans-serif;
  text-align: center;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  z-index: 1;
`;

const InputDiv = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  display: grid;
`;

const Input = styled.input`
  border: none;
  background: rgb(248, 250, 248);
  width: 100%;
  height: 42px;
`;

const TextArea = styled.input`
  border: none;
  background: rgb(248, 250, 248);
  width: 100%;
  height: 120px;
`;

const Button = styled.button`
  width: 260px;
  height: 60px;
  background: red;
  border: none;
  font-size: 1.3rem;
  margin: auto;
`;

const Footer = styled.div`
  width: 100%;
  height: 20vh;
  background: white;
  position: relative;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const Imagem = styled.img`
  height: 100%;
`;

const Img = styled.img`
  width: 40vw;
  height: 40vh;
  margin: auto;
  z-index: 1;
`;

export class Cadastro extends React.Component {
  state = {
    nome: "",
    descricao: "",
    preco: "",
    url: "",
    prazo: ""
  };


  onChangeNome = (event) => {
    this.setState({ nome: event.target.value });
  };

  onChangeDescricao = (event) => {
    this.setState({ descricao: event.target.value });
  };

  onChangePreco = (event) => {
    this.setState({ preco: event.target.value });
  };

  onChangeUrl = (event) => {
    this.setState({ url: event.target.value });
  };

  onChangePrazo = (event) => {
    this.setState({ prazo: event.target.value });
  };

  onClickSubmit = () => {
    this.cadastraCarro(this.state.nome, this.state.descricao, this.state.preco, this.state.url, this.state.prazo)
  }

  cadastraCarro = (InputNome, InputDescricao, InputPreco, InputUrl, InputPrazo) => {
    const body = {
      name: InputNome,
      description: InputDescricao,
      price: InputPreco,
      paymentMethod: InputUrl,
      shipping: InputPrazo
    }
    console.log(body)
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars",
        body,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then((response) => {
        console.log("eeee funcionou");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {
    return (
      <Body>
        <Car src={carimagem}></Car>

        <Img src={logocar}></Img>
        <Texto>
          <h1>
            ÓTIMA ESCOLHA EM VENDER SEU <br></br>CARRO CONOSCO
          </h1>
        </Texto>

        <Form>
          <Informacao>
            <h2>PREENCHA SEUS DADOS</h2>
          </Informacao>

          <InputDiv>
            <label>*NOME/MARCA </label>
            <Input
              type="text"
              placeholder="Nome"
              onChange={this.onChangeNome}
            />
          </InputDiv>

          <InputDiv>
            <label>*DESCRIÇÃO</label>
            <TextArea onChange={this.onChangeDescricao} />
          </InputDiv>

          <InputDiv>
            <label>*PREÇO</label>
            <Input
              type="number"
              placeholder="preço"
              onChange={this.onChangePreco}
            />
          </InputDiv>

          <InputDiv>
            <label>*URL DA IMAGEM</label>
            <Input type="text" onChange={this.onChangeUrl} />
          </InputDiv>

          <InputDiv>
            <label>*PRAZO DE ENTREGA</label>
            <Input type="text" onChange={this.onChangePrazo} />
          </InputDiv>


          <Button
            onClick={this.onClickSubmit}>
            Enviar
          </Button>
        </Form>

        <Footer>
          <Imagem src={logo}></Imagem>
          <p>
            ©Todos os direitos reservados a Shirlei, Melissa, Leonardo e
            Wellington
          </p>
        </Footer>
      </Body>
    );
  }
}
