/*
 * INPUT / TEXTAREA limit chars
 * by upadrian@gmail.com
 * 2011
 *
 *
 */
(function($) {
	$.fn.limitc   = function(opts) {
		var defaults = {
			ttl:         100, //limite de caracteres
			htmlElement: 'span', //div o span
			txtEnd:      'No puedes escribir m&aacute;s de {chars} caracteres.', //mensaje al final
			txt:         'Restan {chars} caracteres.', // mensaje mientras
			cssClass:    "",
			element:     "span"
		};
		var id       = this.attr("id"),
			ops = $.extend(defaults, opts),
			$target = $("#" + id);
		if($target.length>0) {
			$target
				.keyup(function() {
					$.fn.doLimitc($(this), ops);
				})
				.before('<' + ops.htmlElement + ' class="' + ops.cssClass + '"></' + ops.element + '>')
				.bind("paste", function(event) {
					$(this).keyup();
				});
			$.fn.doLimitc($target, ops);
			return this;
		}
	};
	$.fn.doLimitc = function($target, ops) {
		var $span = $target.prev(),
			t  = target.val(),
			tl = Number(t.length),
			ttl = Number(ops.ttl),
			txtEnd = ops.txtEnd,
			txt = ops.txt;
		txtEnd = txtEnd.replace('{chars}', ttl);
		if(!isNaN(tl) && tl > ttl) {
			$target.val(t.substr(0, ttl));
			$span.html(txtEnd);
			return false;
		} else {
			$span.html(txt.replace('{chars}', (ttl - tl)));
			return true;
		}
	};
})(jQuery);