import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Slide from './Slide'
import registerServiceWorker from './registerServiceWorker';

const SlideData = ['./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg'];

ReactDOM.render(
    <Slide autoplay="true" loop="true" data={SlideData} />,
    document.getElementById('root')
);

registerServiceWorker();
