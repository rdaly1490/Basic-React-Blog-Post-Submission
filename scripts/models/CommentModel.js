var $ = require("jquery");
var Backbone = require("backbone");
Backbone.$ = $;

module.exports = Backbone.Model.extend({
	defaults: {
		text:"",
		userId: null,
		createdAt: null
	},
	validate: function(attr) {
		if(!attr.text) {
			return "You must enter a comment";
		}
		else {
			return false;
		}
	}
})