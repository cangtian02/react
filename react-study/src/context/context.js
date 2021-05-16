/*
 * @Author: duiying
 * @CreateDate: Do not edit
 * @LastEditors: duiying
 * @LastEditTime: 2021-05-13 15:25:46
 * @Description: ...
 */
import React from 'react';
import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';
import ThemedBox from './themed-box';
import '../App.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: themes.dark,
      toggleTheme: this.toggleTheme,
    };
  }

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark
    }))
  }

  render() {
    return (
      <div className="context">
      <ThemeContext.Provider value={this.state}>
        <ThemedButton />
        <div style={{width: '100px', height: '100px', margin: '20px auto', backgroundColor: this.state.theme.background}}></div>
        <ThemedBox />
      </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
