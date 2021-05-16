/*
 * @Author: duiying
 * @CreateDate: Do not edit
 * @LastEditors: duiying
 * @LastEditTime: 2021-05-16 09:51:53
 * @Description: ...
 */
import React from 'react'
import Lazy from './lazy/lazy'
import Context from './context/context'
import Hoc from './hoc/hoc'
import Hook from './hook/hook'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="App">
        <Lazy />
        <Context />
        <Hoc />
        <Hook />
      </div>
    )
  }
}

export default App
