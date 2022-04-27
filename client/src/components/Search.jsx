import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 'search movie list'
    }
  }

  handleChange(event) {
    this.setState({
      form: event.target.value
    })
    //console.log(this.state)
  }

  render() {
    return (
      <form >
        <label>
          <input type="text" onChange={(event) =>
            this.handleChange(event)} />
        </label>
         <button>search</button>
      </form>
    )
  }
}

export default Search;