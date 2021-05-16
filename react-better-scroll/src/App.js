/*
 * @Author: duiying
 * @CreateDate: Do not edit
 * @LastEditors: duiying
 * @LastEditTime: 2020-09-09 16:35:51
 * @Description: ...
 */
import React from 'react';
import './App.css';
import Pull from './pull';
import Test from './test'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      pageSize: 0,
      maxPageSize: 3,
      refresh: false,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    if (this.state.pageSize >= this.state.maxPageSize) return;
    
    setTimeout(() => {
      let data = this.state.pageSize === 0 ? [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : this.state.data.concat([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      this.setState({
        data: data,
        refresh: true,
      }, () => {
        this.setState({
          refresh: false,
        });
      });
    }, 2000);
  }

  pullingDown() {
    this.setState({
      pageSize: 0,
    }, () => {
      this.getData();
    });
  }

  pullingUp() {
    this.setState({
      pageSize: this.state.pageSize + 1,
    }, () => {
      this.getData();
    });
  }

  getItem() {
    let arr = [];
    this.state.data.forEach((val, i) => {
      arr.push(<li key={i}>{i}</li>)
    });
    return arr;
  }

  render() {
    return (
      <div className="App" id="app">
        <Test />
        <div className="top"></div>
        <div className="bot">
          <Pull warper='app' forceUpdate={this.state.pageSize === this.state.maxPageSize - 1 ? 0 : 1} refresh={this.state.refresh} pullingDown={() => this.pullingDown()} pullingUp={() => this.pullingUp()}>
            {this.getItem()}
          </Pull>
        </div>
      </div>
    );
  }
}

export default App;
