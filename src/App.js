import './App.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Button from './components/Button'

class App extends Component {
    state = {
        personagens: []
    }

    async componentWillMount() {
        try {
            const response = await feach('https://pokeapi.co/api/v2/pokemon/ditto')
            const dataJson = await response.json()

            this.setState({ personagens: dataJson.results })
        }
        catch(error) {
            console.log(error)
        }
    }

    render () {
        return (
            <div>
            <div>
                {
                   this.state.personagens.map(personagens => {
                       return (
                           <div key={personagem.name}>
                               {personagens.name}
                            </div>
                       )
                   })
                }
            </div>
          <div className="App">
           <Button title='teste'>
               Salvar
           </Button>

           <Link to='/personagem/1'>
              Personagem
           </Link>
          </div>
            </div>
        );
      }

    }

export default App;
