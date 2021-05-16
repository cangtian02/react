/*
 * @Author: duiying
 * @CreateDate: Do not edit
 * @LastEditors: duiying
 * @LastEditTime: 2021-05-13 14:14:08
 * @Description: ...
 */
import React, { Suspense, lazy } from 'react';
import '../App.css';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      flag: false
    }
  }

  lazyCom() {
    if (!this.state.flag) return null

    const LazyCom = lazy(() => import('./test'))
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <LazyCom />
      </Suspense>
    )
  }

  onClick() {
    this.setState({
      flag: !this.state.flag
    })
  }

  render() {
    return (
      <header className="App-header">
        <div
          className="App-link"
          onClick={() => this.onClick()}
        >
          Learn React
        </div>
        {this.lazyCom()}
      </header>
    );
  }
}

export default App;