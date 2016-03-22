var React = require('react');

var Home = React.createClass({
	render: function () {
		return (
			<div>
				<p>{this.props.foo}</p>
				Testing	
			</div>
		);
	}
});

module.exports = Home;
