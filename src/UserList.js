import React, {Component} from 'react';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false
    };

    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);

  }

  onDelete() {
    const {onDelete, name} = this.props;

    onDelete(name);
  }
  onEdit() {
    this.setState({isEdit: true});
  }
  onEditSubmit(event) {
    event.preventDefault();
    this.props.onEditSubmit(this.nameInput.value, this.surnameInput.value, this.props.name);

    this.setState({isEdit: false});

  }

  render() {
    const {name, surname} = this.props;
    return (<div>
      {
        this.state.isEdit
          ? (<form onSubmit={this.onEditSubmit}>
            <input placeholder='Name' ref={nameInput => this.nameInput = nameInput} defaultValue={name}/>
            <input placeholder='Surname' ref={surnameInput => this.surnameInput = surnameInput} defaultValue={surname}/>
            <button>Save</button>
          </form>)
          : (<div>
            <span>{name}</span>
            {' - '}
            <span>{surname}</span>
            <button onClick={this.onEdit}>Edit</button>
            <button onClick={this.onDelete}>Delete</button>
          </div>)
      }
    </div>);
  }
}

export default UserList;
