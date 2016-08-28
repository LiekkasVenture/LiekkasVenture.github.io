import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
var ReactMarkdown = require('react-markdown');

var SammyWord = '## Sammy\n```\nLiekkas，一首来自北欧萨米族的歌曲，\n寓意北极光的征兆。\n在忙碌的深圳，\n 感动于它传递的暖意。\n我们以Liekkas Venture命名英语角，\n 延续这份暖意。\n在这小小的角落寄托了我们美好的期许。\n希望未来有一天，我们来一场北极光的冒险之旅！\n```';

var BaturWord = '## Batur \n```这是一个实验，\n两个有趣的人尝试聚集更多有趣的人，\n一起做一些天马行空的事。\n梦幻的北极光那么遥远，\n这两个蜗牛开始了漫漫征途。\n加入我们吧!\n```';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Liekkas Venture</h2>
        </div>
		<div className="Episode">
			<ul>
				<li>
					<a href="https://github.com/LiekkasVenture/LiekkasVenture/blob/master/08-Music.md">
						Liekkas Venture 8: Music
					</a>
				</li>
				<li>
					<a href="https://github.com/LiekkasVenture/LiekkasVenture/blob/master/07-Chinese-Internet-Company.md">
						Liekkas Venture 7: Chinese Internet Company
					</a>
				</li>
				<li>
					<a href="https://github.com/LiekkasVenture/LiekkasVenture/blob/master/06-Olympics.md">
						Liekkas Venture 6: Olympics
					</a>
				</li>
				<li>
					<a href="https://github.com/LiekkasVenture/LiekkasVenture/">
						More
					</a>
				</li>
			</ul>
		</div>
		<div className="Words">
			<ReactMarkdown source={SammyWord} />
			<ReactMarkdown source={BaturWord} />
		</div>
      </div>
    );
  }
}

export default App;
