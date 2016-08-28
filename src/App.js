import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import {episodes, words} from './data.js'

const Word = (props) => (
	<div>
		<h2>{props.children[0].name}</h2>
		<blockquote>{props.children[0].text}</blockquote>
		<h2>{props.children[1].name}</h2>
		<blockquote>{props.children[1].text}</blockquote>
	</div>
);

const Episode = (props) => (
	<ul>
		<li><a href="{props.epi[0].link}">{props.epi[0].text}</a></li>
		<li><a href="{props.epi[1].link}">{props.epi[1].text}</a></li>
		<li><a href="{props.epi[2].link}">{props.epi[2].text}</a></li>
		<li><a href="{props.epi[3].link}">{props.epi[3].text}</a></li>
	</ul>
);


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Liekkas Venture</h2>
        </div>
		<div className="Episode">
			<Episode epi={episodes} />
		</div>
		<div className="Words">
			<Word>{words}</Word>
		</div>
      </div>
    );
  }
}

export default App;
