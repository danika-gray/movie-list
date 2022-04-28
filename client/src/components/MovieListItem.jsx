import React from 'react';

class MovieListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      button: 'not watched'
    }
    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton(event) {
    if (this.state.button === 'not watched') {
      this.setState({
        button: 'watched'
      })
    } else {
      this.setState({
        button: 'not watched'
      })
    }
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