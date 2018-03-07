import React, {Component} from 'react';
import './App.css';
import AddUser from './AddUser.js';
import UserList from './UserList.js';

const users = [
  {
    name: 'Vlad',
    surname: 'Vlady'
  }
]

localStorage.setItem('users', JSON.stringify(users));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: JSON.parse(localStorage.getItem('users'))
    };
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }
  componentWillMount() {
    const users = this.getUsers();
    this.setState({users});

  }
  getUsers() {
    return this.state.users;
  }
  onAdd(name, surname) {
    const users = this.getUsers();

    users.push({name, surname});
    this.setState({users});
  }

  onDelete(name) {
    const users = this.getUsers();

    const filteredUsers = users.filter(user => {
      return user.name !== name;
    });
    this.setState({users: filteredUsers});
  }
  onEditSubmit(name, surname, originalName) {
    let users = this.getUsers();
    users = users.map(user => {
      if (user.name === originalName) {
        user.name = name;
        user.surname = surname;
      }
      return user;
    });
    this.setState({users});
  }
  render() {
    return (<div className="App">
      <h1>Users List</h1>
      <AddUser onAdd={this.onAdd}/> {
        this.state.users.map(user => {
          return (
            <UserList
              key={user.name}
              {...user}
              onDelete={this.onDelete}
              onEditSubmit={this.onEditSubmit}/>);
        })
      }
    </div>);
  }
}

export default App;
