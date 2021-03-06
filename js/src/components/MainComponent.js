import React from 'react';
import ReactDOM from 'react-dom';
import ViewComponent from './ViewComponent';
import SceneComponent from './SceneComponent';

class Main extends React.Component {
	
	constructor() {
		super();
	}

	render() {

		let styles = {
			width: '100%',
			height: '100%',
			overflowY: 'scroll'
		};
		
		return (
			<div style={styles}>
				<ViewComponent auth={this.props.auth} />
				<SceneComponent auth={this.props.auth} sceneManager={this.props.sceneManager} viewer={this.props.viewer} />
			</div>
		);
	}
}

export default Main;