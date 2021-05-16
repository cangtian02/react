/*
 * @Author: duiying
 * @CreateDate: Do not edit
 * @LastEditors: duiying
 * @LastEditTime: 2021-05-13 11:41:08
 * @Description: ...
 */
import React from 'react';

export const themes = {
  light: {
    background: '#000',
  },
  dark: {
    background: '#eee',
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});