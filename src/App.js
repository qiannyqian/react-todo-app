import React, { Component } from 'react';

class App extends Component {
  state = {
    newItem: '',
    list: [],
  };

  updateInput(key, value) {
    this.setState({
      [key]: value,
    });
  }

  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(),
    };

    const list = [...this.state.list];
    list.push(newItem);

    this.setState({
      list: list,
      newItem: '',
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];

    const updatedList = list.filter((item) => item.id !== id);

    this.setState({ list: updatedList });
  }

  render() {
    return (
      <div className="App">
        <h3 className="title-text">My To-Do List</h3>

        <div>
          Put down a to-do here...
          <br />
          <input
            type="text"
            placeholder="Type Something Here..."
            value={this.state.newItem}
            onChange={(e) => this.updateInput('newItem', e.target.value)}
          />
          <button className="add-button" onClick={() => this.addItem()}>
            Add
          </button>
        </div>

        <ul className={this.state.list.length > 0 ? 'items-list' : null}>
          {this.state.list.map((item) => {
            return (
              <li key={item.id}>
                {item.value}
                <button
                  className="delete-button"
                  onClick={() => this.deleteItem(item.id)}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
