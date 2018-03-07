import React, {Component} from 'react';

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

  }
  onSubmit(e) {
    e.preventDefault();

    this.props.onAdd(this.nameInput.value, this.surnameInput.value);
    this.nameInput.value = '';
    this.surnameInput.value = '';

  }
  render() {
    const {name, surname} = this.props;
    return (<form onSubmit={this.onSubmit}>
      <h3>Add User</h3>
      <input placeholder='Name' ref={nameInput => this.nameInput = nameInput}/>
      <input placeholder='Surname' ref={surnameInput => this.surnameInput = surnameInput}/>
      <button>Add</button>
      <hr/>
    </form>);
  }
}

export default AddUser;
