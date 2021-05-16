/*
 * @Author: duiying
 * @CreateDate: Do not edit
 * @LastEditors: duiying
 * @LastEditTime: 2021-05-13 15:25:02
 * @Description: ...
 */
import React from 'react'
import '../App.css'
import withHeader from './withHeader'

class Demo extends React.Component {
  render() {
    return <div>demo组件</div>
  }
}

const WithHeaderDemo = withHeader(Demo, '这是个标题')

class Hoc extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="hoc">
        <WithHeaderDemo />
      </div>
    )
  }
}

export default Hoc
