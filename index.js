define(function (require) {
	var $ = require('jquery')

	var Tab = function () {
		this._$dom = $('<tabs>')
	}


	Tab.prototype = {
		get $dom() {
			return this._$dom
		},

		get length() {
			return this.$dom.find('>tab').length
		},


		active: function ($tab) {
			this.$dom.find('>tab').removeAttr('active')
			$tab.attr('active', '')
			return this
		},

		add: function ($tab, index) {
			if ($tab[0].tagName != 'TAB') {
				throw new Error('root of $tab should be <tab>')
			}
			if (typeof index == 'undefined') {
				this.$dom.append($tab)
			} else if (index > 0) {
				this.getAt(index - 1).after($tab)
			} else {
				this.getAt(0).before($tab)
			}
			if (this.length == 1) {
				this.active(this.getAt(0))
			}
			return this
		},

		removeAt: function (index) {
			this.getAt(index).remove()
			if (!this.getActive() && this.length > 0) {
				if (index == 0) {
					this.active(this.getAt(0))
				} else {
					this.active(this.getAt(index - 1))
				}
			}
			return this
		},

		getAt: function (index) {
			return this.$dom.find('>tab:nth-of-type(' + (index + 1) + ')')
		},

		getActive: function () {
			return this.$dom.find('>tab[active]')
		}
	}

	return Tab
})