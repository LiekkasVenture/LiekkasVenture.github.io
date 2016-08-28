import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
//import ReactMarkDown from 'react-markdown';
var ReactMarkdown = require('react-markdown');

var SammyWord = '> Sammy \n```Liekkas，一首来自北欧萨米族的歌曲，寓意北极光的征兆。\n   在忙碌的深圳，感动于它传递的暖意。\n   我们以Liekkas Venture命名英语角，延续这份暖意。\n   在这小小的角落寄托了我们美好的期许。\n   希望未来有一天，我们来一场北极光的冒险之旅！';

var BaturWord = '> Batur \n```这是一个实验，\n   两个有趣的人尝试聚集更多有趣的人，\n   一起做一些天马行空的事。\n   梦幻的北极光那么遥远，\n   这两个蜗牛开始了漫漫征途。\n   加入我们吧!';

var input = '# This is a header\n\nAnd this is a paragraph';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Liekkas Venture</h2>
        </div>
        <ReactMarkdown source={SammyWord} />
        <ReactMarkdown source={BaturWord} />
      </div>
    );
  }
}

export default App;
