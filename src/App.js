import './App.css';
import React from 'react';

import Header from './Header';
import Items from './Items';

class App extends React.Component {
  state = {
    items: [
      {
        text: "item 1",
        done: true,
        id: 1
      },
      {
        text: "item 2",
        done: false,
        id: 2
      },
      {
        text: "item 3",
        done: true,
        id: 3
      },
      {
        text: "item 4",
        done: true,
        id: 4
      }
    ]
  };

  toggleDone = (index) => {
    console.log("index: " + index, this.state.done);
    if (this.state.done) {
      this.setState( prevState => (
        {
          done: prevState.items[index].done == false
        })
      )
      console.log("true to false");
    } else {
      this.setState( prevState => (
        {
          done: prevState.items[index].done == true
        })
      )
      console.log("false to true");
    }
  };


  render() {
    return (
      <div className="itemlist">
        <Header title="Shopping List" totalItems={this.state.items.length} />

        {/* Item list */}
        {this.state.items.map((item, index) =>
          <Items
            text={item.text}
            key={item.id.toString()}
            done={item.done}
            index={index}
            toggleDone={this.toggleDone}
          />
        )}
      </div>
    )
  };

}

export default App;
