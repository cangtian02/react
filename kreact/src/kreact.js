/*
 * @Author: duiying
 * @CreateDate: Do not edit
 * @LastEditors: duiying
 * @LastEditTime: 2020-07-15 14:46:08
 * @Description: ...
 */ 

function createElement(type, props, ...children) {
  // console.log(arguments)
  props.children = children
  delete props.__source
  return { type, props }
}

export default { createElement }