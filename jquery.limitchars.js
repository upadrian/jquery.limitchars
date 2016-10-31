/*
 * INPUT / TEXTAREA limit chars
 * by upadrian@gmail.com
 * 2011
 *
 *
 */
(function($) {
	$.fn.limitc   = function(_opts) {
		var defaults = {
			charlimit:   100, //Char limit
			tag:         'span', //div o span
			tagPosition: 'after', //befor or after
			tagRelative: '', //null for self or jQuery element
			txt:         '{chars} chars left.',
			cssClass:    "limitc-cont"
		}, opts       = $.extend(defaults, _opts);
		return this.each(function() {
			var $target = $(this),
				$tagRelative = (opts.tagRelative != '') ? $(opts.tagRelative) : $target;
			if($target.length > 0) {
				if(!$target.hasClass("limitc-limited")) {
					$target
						.addClass("limitc")
						.keyup(function() {
							var t = $target.val(),
								tl = t.length,
								txt = opts.txt;
							$targetTag.html(txt.replace('{chars}', (tl >= opts.charlimit) ? 0 : (opts.charlimit - tl)));
							if(tl >= opts.ttl) {
								$target.val(t.substr(0, opts.charlimit));
								return false;
							}
							return true;
						})
						.bind("paste", function(event) {
							$target.keyup();
						});
					$targetTag = $('<' + opts.tag + '/>').addClass(opts.cssClass);
					if(opts.tagPosition=='after')
						$tagRelative.after($targetTag);
					else
						$tagRelative.before($targetTag);

					$target.keyup();
				}
			}
		});
	};
})(jQuery);