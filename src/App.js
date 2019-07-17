import React, { Component } from 'react'
import MovieCard from './components/MovieCard'
import KEYS from './keys'

const API_KEY = KEYS.AIRTABLE_API

class App extends Component {

  state = {
    movies: []
  }

  componentDidMount() {
    fetch(`https://api.airtable.com/v0/appPkOV06IV91Fcsa/Favorites?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ movies: data.records })
      })
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state)
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card-deck">
              {this.state.movies.map(movie => <MovieCard key={movie.id} {...movie.fields} />)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
