/*
 * @Author: duiying
 * @CreateDate: Do not edit
 * @LastEditors: duiying
 * @LastEditTime: 2020-07-15 14:37:36
 * @Description: ...
 */ 

// import React from 'react'
// import ReactDom from 'react-dom'
import React from './kreact'
import ReactDom from './kreact-dom'

function Com(props) {
  return (<div>hello {props.name}</div>)
}

const jsx = (
  <div className="test">
    <Com name="world" />
  </div>
)

// console.log(jsx)

ReactDom.render(jsx, document.querySelector('#root'))
