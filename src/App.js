import React, {Component} from 'react';
import './main.css';

class App extends Component{
  state={
    allItems:[
      'speakers',
      'plastic fork',
      'television',
      'doll',
      'box',
      'wagon',
      'flag',
      'shoe lace',
      'phone',
      'buckel',
      'fake flowers',
      'USB drive',
      'eraser',
      'toothbrush',
      'keyboard',
      'rubber duck',
    ],
    filteredItems:[
      'speakers',
      'plastic fork',
      'television',
      'doll',
      'box',
      'wagon',
      'flag',
      'shoe lace',
      'phone',
      'buckel',
      'fake flowers',
      'USB drive',
      'eraser',
      'toothbrush',
      'keyboard',
      'rubber duck',
    ],
    phrase:''
  }
  filterChangeHandler=()=>{
    const val = this.state.phrase;
    const updated = this.state.allItems.filter(item=>{
      if(item.includes(val)){
          return item;
      }
    })
    this.setState({
      filteredItems:updated
    })
  }
  inputHandler=(e)=>{
    this.setState({
      phrase:e.target.value
    }, this.filterChangeHandler)
  }
  render(){
    return (
      <div className="App">
        <input type="text" onChange={this.inputHandler}/>
        <ul>
            {this.state.filteredItems.map((item, index)=>{
              const val = this.state.phrase;
              item = item.replace(val, '<span class="red">'+val+'</span>');
              return <li key={'a'+index} dangerouslySetInnerHTML={{__html:item}} />
            })}
        </ul>
    </div>
  );
}
}

export default App;
