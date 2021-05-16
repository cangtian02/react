/*
 * @Author: duiying
 * @CreateDate: Do not edit
 * @LastEditors: duiying
 * @LastEditTime: 2020-09-09 16:31:00
 * @Description: ...
 */
import React from 'react'

class Test extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  componentDidMount() {
    this.setState({
      name: '小明'
    })

    this.setState({
      name: '小红'
    })

    this.setState({
      name: '小李'
    })
  }

  render() {
    return (
      <div>{this.state.name}</div>
    )
  }

}

export default Test
