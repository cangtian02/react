import React from 'react';
import './Slide.css';

function SlideContent(props) {
	let data = props.loop ? [props.data[props.data.length - 1], ...props.data, props.data[0]] : props.data;
	let dom = [];
	data.forEach((val, i) => {
		dom.push(<li key={i}><img src={val} alt={val} /></li>);
	});
	return (dom);
}

function SlideButton(props) {
	return (
		<div className="slide-button">
			<div className="slide-btn slide-prev" onClick={() => props.onClick('prev')}></div>
			<div className="slide-btn slide-next" onClick={() => props.onClick('next')}></div>
		</div>
	);
}

function SlideNav(props) {
	let cur = props.loop ?
		props.current === 0 ? props.length - 1 : props.current === props.length + 1 ? 0 : props.current - 1
		:
		props.current;
	let dom = [];
	for (let i = 0; i < props.length; i++) {
		dom.push(<li key={i} onClick={() => props.onClick(i)} className={i === cur ? 'active' : ''}></li>);
	}
	return (dom);
}

class Slide extends React.Component {
	constructor(props) {
		super();
		this.state = {
			contentStyle: {
				width: 0,
				transform: 'translateX(0)',
				transition: 'all 600ms ease-in-out'
			},  // slide-content style
			current: 0,  // 当前切换的下标
			delayTime: 2000,  // 自动播放间隔时间
			interTime: 600,   // 切换动画时间
			clickTime: 0      // 用于记录前后切换点击时的时间
		}
	}

	componentDidMount() {
		setTimeout(() => {
			this.init();
		}, 20);
	}

	init() {
		if (!Array.isArray(this.props.data)) return console.log('data error');

		let cur = this.props.loop ? 1 : 0;
		this.refreshCurrent(cur);

		let len = this.props.loop ? this.props.data.length + 2 : this.props.data.length;
		let w = this.props.loop ? -this.refs.slide.clientWidth : 0;
		this.refreshDom(this.refs.slide.clientWidth * len, w + 'px', 0);

		if (this.props.delayTime) {
			this.setState({ delayTime: this.props.delayTime })
		}

		if (this.props.interTime) {
			this.setState({ interTime: this.props.interTime })
		}

		this.interval();
	}

	interval() {
		if (this.props.autoplay) {
			if (this.timer) clearInterval(this.timer);
			this.timer = setInterval(() => {
				this.slideAni('next');
			}, this.state.delayTime);
		}
	}

	/**
	 * 切换按钮事件
	 * 利用前后点击时的时间差做节流，连续点击很快的时候只会在切换动画结束后才会执行下一次的切换动画
	 * @param {string} flag 'next' or 'next'
	 */
	handleBtnClick(flag) {
		if (this.props.autoplay && this.timer) clearInterval(this.timer);

		if (this.state.clickTime === 0 || new Date().getTime() - this.state.clickTime > this.state.interTime) {
			this.refreshClickTime(new Date().getTime());
			this.slideAni(flag);
		}
	}

	/**
	 * 切换动画 判断是否循环，算出当前下标，再根据下标执行dom的偏移动画
	 * 如果开启循环，在切换到最开始和最后时，关闭动画时间，瞬间切换位置，达到无限循环效果
	 * @param {string} flag 'next' or 'next'
	 */
	slideAni(flag) {
		let cur = this.state.current;
		flag === 'prev' ? cur-- : cur++;

		if (!this.props.loop) {
			cur < 0 ? cur = this.props.data.length - 1 : cur = cur + 0;
			cur > this.props.data.length - 1 ? cur = 0 : cur = cur + 0;
		}

		this.refreshDom(this.state.contentStyle.width, -this.refs.slide.clientWidth * cur + 'px', this.state.interTime);
		this.refreshCurrent(cur);

		if (this.props.loop) {
			setTimeout(() => {
				cur === 0 ? cur = this.props.data.length : cur = cur + 0;
				cur === this.props.data.length + 1 ? cur = 1 : cur = cur + 0;
				this.refreshDom(this.state.contentStyle.width, -this.refs.slide.clientWidth * cur + 'px', 0);
				this.refreshCurrent(cur);
			}, this.state.interTime);
		}

		this.refreshInterval();
	}

	/**
	 * 小点点点击处理，如果自动播放就关闭定时器，不开启动画时间，瞬间切换
	 * @param {number} i 小点点的点击下标
	 */
	handleNavClick(i) {
		let cur = this.props.loop ? i + 1 : i;
		this.refreshDom(this.state.contentStyle.width, -this.refs.slide.clientWidth * cur + 'px', 0);
		this.refreshCurrent(cur);
		this.refreshInterval();
	}

	refreshInterval() {
		if (this.props.autoplay) {
			clearInterval(this.timer);
			setTimeout(() => {
				this.interval();
			}, this.state.interTime);
		}
	}

	refreshClickTime(n) {
		this.setState({
			clickTime: n
		});
	}

	refreshCurrent(cur) {
		this.setState({
			current: cur
		});
	}

	refreshDom(width, translateX, time) {
		this.setState({
			contentStyle: {
				width: width,
				transform: 'translateX(' + translateX + ')',
				transition: 'all ' + time + 'ms ease-in-out'
			}
		});
	}

	render() {
		return (
			<div className="slide" ref="slide">
				<div className="slide-content" style={this.state.contentStyle}>
					<SlideContent loop={this.props.loop} data={this.props.data} />
				</div>
				<SlideButton onClick={f => this.handleBtnClick(f)} />
				<div className="slide-nav">
					<SlideNav onClick={i => this.handleNavClick(i)} current={this.state.current} loop={this.props.loop} length={this.props.data.length} />
				</div>
			</div>
		);
	}
}

export default Slide;
