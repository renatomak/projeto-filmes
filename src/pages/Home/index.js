import React, { Component }from 'react';
import { Link } from 'react-router-dom';
import { Container, Article } from '../../styles';


class Home extends Component{

  constructor(props){
      super(props);
      this.state = { 
          filmes: []
      };
      this.fetchFilms = this.fetchFilms.bind(this);
  }

  componentDidMount() {
    this.fetchFilms();
  }

  async fetchFilms() {
    const endpont = 'https://sujeitoprogramador.com/r-api/?api=filmes';
    const response = await fetch(endpont);

    if (response.ok) {
      const filmes = await response.json();
      this.setState({ filmes });
      console.log(filmes);
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  }


  render(){
        return(
          <Container>
            <div className="lista-filmes">
              {this.state.filmes.map((film) => {
                return (
                  <Article key={film.id} >
                    <strong> {film.nome} </strong>
                    <img src={film.foto} alt="capa"/>
                    <Link to={`/filme/${film.id}`}>Acessar</Link>
                  </Article>
                );
              })}
            </div>
          </Container>
        );
    }
}

export default Home;