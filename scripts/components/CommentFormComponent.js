var React = require("react");
var CommentModel = require("../models/CommentModel");

module.exports = React.createClass({
	render: function() {
		return (
			<div>
				<form onSubmit={this.commentSubmitted}>
					<input ref="commentText" type="text" placeholder="Enter a comment..." />
					<button type="submit">Submit Comment</button>
				</form>
			</div>
		);
	},
	
	commentSubmitted: function(e) {
		e.preventDefault();
		var comment = new CommentModel({
			text: this.refs.commentText.getDOMNode().value,
			createdAt: new Date()
		});

		if(!comment.isValid()) {
			console.log(comment.validationError);
		}
		else {
			console.log(comment);
		}

	}

});