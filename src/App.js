import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Liekkas Venture</h2>
        </div>
        <p className="App-intro">
			<div>
				<div>
					<p>Sammy: </p>
					<p>
						Liekkas，一首来自北欧萨米族的歌曲，寓意北极光的征兆。<br />
						在忙碌的深圳，感动于它传递的暖意。<br />
						我们以Liekkas Venture命名英语角，延续这份暖意。<br />
						在这小小的角落寄托了我们美好的期许。<br />
						希望未来有一天，我们来一场北极光的冒险之旅！<br />
					</p>
				</div>
					<p>Batur: </p>
					<p>
						这是一个实验，<br />
						两个有趣的人尝试聚集更多有趣的人，<br />
						一起做一些天马行空的事。<br />
						梦幻的北极光那么遥远，<br />
						这两个蜗牛开始了漫漫征途。<br />
						加入我们吧！<br />
					</p>
				<div>
				</div>
			</div>
        </p>
      </div>
    );
  }
}

export default App;
