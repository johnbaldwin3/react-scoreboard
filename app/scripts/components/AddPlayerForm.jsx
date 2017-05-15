//3rd Party Libraries
import React from 'react';
import PropTypes from 'prop-types';


export default class AddPlayerForm extends React.Component {
  static propTypes: {
    onAdd: propTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onNameChange = this.onNameChange.bind(this);

    this.state = {
      name: "",
    }
  }
  onSubmit(e) {
    e.preventDefault();
    this.props.onAdd(this.state.name);
    this.setState({name: ''})
  }
  onNameChange(e) {
    console.log('onnamechange', e.target.value);
    this.setState({name: e.target.value});
  }
  render() {
    return (
      <div className="add-player-form">
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onNameChange} type="text" value={this.state.name}/>
          <input type="submit" value="Add Player" />
        </form>
      </div>
    )
  }
}
