import React from 'react';

class MovieListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      button: 'not watched',
      hasBeenWatched: false
    }
    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton(event) {
    if (this.state.button === 'not watched') {
      this.setState({
        button: 'watched',
        hasBeenWatched: true
      })
    } else {
      this.setState({
        button: 'not watched',
        hasBeenWatched: false
      })
    }
    this.props.hasBeenWatched(this.state.hasBeenWatched);
  }

  render() {
    return (
      <p>{this.props.movie.title} <span> <button onClick={this.toggleButton}>{this.state.button}</button> </span></p>
    )
  }
}

export default MovieListItem;

// const MovieListItem = ({movie}) => {
//   return (
//     <p>{movie.title} <span> <button>watched?</button> </span></p>
//   )
// }