import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state: {
      input: '';
    }
  }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <label>
          MovieSearch:
          <input type="text" value={this.state.value} /* initially '' */ onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Search;