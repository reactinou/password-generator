import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      password: '',
      copyButton: 'Copy'
    };
  }
  handleClick() {
    this.setState({
      password: Math.random().toString(36).substr(2, 8),
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Generateur de mot de passe
            
          </h1>
          <h3>{this.state.password} <button className="button" onClick={() => { navigator.clipboard.writeText(this.state.password);
           this.setState({copyButton:'Copied'});
           this.setState({copyButton:'Copy'})}}>{this.state.copyButton}</button></h3>

          <button className="button" onClick={() => this.handleClick()}>Generate</button>
        </header>
      </div>
    );
  }
}

export default App;
