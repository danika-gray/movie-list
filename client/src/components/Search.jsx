import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTitle: 'search movie list',
      submission: false
    }
  }

  handleChange(event) {
    this.setState({
      searchTitle: event.target.value
    })
    console.log(this.state)
  }

  handleSubmit() {
    this.setState({
      submission: true
    })
    console.log(this.state);
    this.props.handleSearchTitle(this.state.searchTitle)
  }

  render() {
    return (
      <form >
        <label>
          <input type="text" onChange={(event) =>
            this.handleChange(event)} />
        </label>
         <button onClick={() => this.handleSubmit}>Go</button>
      </form>
    )
  }
}

export default Search;