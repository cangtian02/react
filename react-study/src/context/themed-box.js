/*
 * @Author: duiying
 * @CreateDate: Do not edit
 * @LastEditors: duiying
 * @LastEditTime: 2021-05-13 11:51:12
 * @Description: ...
 */
import React, { useContext } from 'react';
import {ThemeContext} from './theme-context';

// class ThemedBox extends React.Component {
//   static contextType = ThemeContext;

//   render() {
//     let props = this.props;
    
//     return (
//       <button
//         {...props}
//         style={{backgroundColor: this.context.theme.background}}
//       />
//     );
//   }
// }

// class ThemedBox extends React.Component {
//   render() {
//     let props = this.props;
//     let themeObj = this.context;
//     return (
//       <button
//         {...props}
//         style={{backgroundColor: themeObj.theme.background}}
//       />
//     );
//   }
// }
// ThemedBox.contextType = ThemeContext;

function ThemedBox(props) {
  let themeObj = useContext(ThemeContext)
  return (
    <button
      {...props}
      style={{backgroundColor: themeObj.theme.background}}
    />
  );
}

export default ThemedBox;
