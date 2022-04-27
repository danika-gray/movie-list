import React from 'react';

class InputMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submission: false
    }
    this.handleInputSubmission = this.handleInputSubmission.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  handleInputSubmission(event) {
    event.preventDefault();
    this.props.inputMovieList(this.state.input);
  }

  render() {
    return (
      <form onSubmit={this.handleInputSubmission} >
        <label>
          <input type="text" placeholder="Add movie title here..." value={this.state.input} onChange={this.handleChange} />
        </label>
         <input type="submit" value="Go!" />
      </form>
    );
  }
}

export default InputMovie;