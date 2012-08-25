(function($) {

	/**
	 * Kurant Widget
	 *
	 * @author Ryan Bales
	 * @requires ['jquery', 'jquery-ui', 'raphael']
	 */
	$.widget('example.kurant', {
		options: {
			dataProvider: [],
			outerCircle: {
				strokeWidth: 10,
				strokeColor: '#f7f7f7'
			}
		},

		_create: function() {
			this.elements = {};
		},

		_init: function() {
			this._redraw();
		},

		_redraw: function() {
			this.element.empty();
			this.width = this.element.width();
			this.height = this.element.height();
			this.paper = new Raphael(this.element[0], this.width, this.height);
			this._draw_outerCircle();
		},

		_draw_outerCircle: function() {
			var diameter = (this.width > this.height)
						? this.height - (this.options.outerCircle.strokeWidth * 2)
						: this.width - (this.options.outerCircle.strokeWidth * 2)
				, radius = Math.floor(diameter / 2)
				, stroke_width = this.options.outerCircle.strokeWidth
				, stroke_color = this.options.outerCircle.strokeColor;

			this.elements.outerCircle = this.paper.circle(Math.floor(this.width / 2), Math.floor(this.height / 2), radius);
			this.elements.outerCircle.attr({
				'stroke-width': stroke_width,
				stroke: stroke_color
			});
		},

		_setOption: function(key, value) {
			switch (key)
			{
				case 'dataProvider':
					$.Widget.prototype._setOption.apply(this, arguments);
					this._redraw();
					break;
			}
		}
	});

})(jQuery);
