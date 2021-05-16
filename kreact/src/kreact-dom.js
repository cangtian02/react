/*
 * @Author: duiying
 * @CreateDate: Do not edit
 * @LastEditors: duiying
 * @LastEditTime: 2020-07-15 14:42:11
 * @Description: ...
 */ 

function render(vnode, container) {
  container.innerHTML = `<pre>${JSON.stringify(vnode, null, 2)}</pre>`
}

export default { render }
