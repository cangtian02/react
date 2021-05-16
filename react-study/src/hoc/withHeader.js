/*
 * @Author: duiying
 * @CreateDate: Do not edit
 * @LastEditors: duiying
 * @LastEditTime: 2021-05-14 09:35:07
 * @Description: ...
 */
import React from 'react'

const withHeader = (WrappedComponent, title = '默认标题') => {
  class Hoc extends React.Component {
    render() {
      return (
        <React.Fragment>
          <h5>{title}</h5>
          <WrappedComponent {...this.props} />
        </React.Fragment>
      )
    }
  }
  return Hoc
}

export default withHeader
