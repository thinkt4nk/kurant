(function($) {

	/**
	 * Index View Controller for Kurant Example
	 *
	 * @author: Ryan Bales
	 * @requires: ['jquery', 'jquery-ui', 'kurant']
	 */
	$.widget('example.indexview', {
		options: {
			kurant: {

			}
		},

		_create: function() {
			$.Widget.prototype._create.apply(this, arguments);

			this.elements = this.elements || {};
			this.elements.kurant = $('#kurant-example');
		},

		_init: function() {
			$.Widget.prototype._init.apply(this, arguments);
			
			this.elements.kurant.kurant(this.options.kurant);
		}
	});

	$(function() {
		$(document).indexview();
	});

})(jQuery);
