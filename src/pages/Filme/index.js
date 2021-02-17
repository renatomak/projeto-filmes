import React, { Component } from 'react';
import { Container, Article } from '../../styles';

class Filme extends Component {
  constructor(props){
    super(props);
    this.state = {
      filme: [],
    }
    this.fetchFilme = this.fetchFilme.bind(this);
  }

  componentDidMount() {
    this.fetchFilme();
  }

  async fetchFilme() {
    console.log('executou')
    const { id } = this.props.match.params;
    const endpoint = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;
    const response = await fetch(endpoint);
    if (response.ok) {
      const filme = await response.json();
      this.setState({ filme });
      console.log(filme);
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  }

  render(){
    const { nome, foto, sinopse } = this.state.filme;
    return(
      <Container>
        <h1>{ nome }</h1>
        <img src={ foto } alt='capa' />
        <h3>Sinopse</h3>
        <Article>{sinopse}</Article>
        
      </Container>
    );
  }
}

export default Filme;