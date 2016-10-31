/*
 * jQuery Limit input chars. upadrian, 2011. see me at github
 *
 * This is free and unencumbered software released into the public domain.
 *
 * Anyone is free to copy, modify, publish, use, compile, sell, or
 * distribute this software, either in source code form or as a compiled
 * binary, for any purpose, commercial or non-commercial, and by any
 * means.
 *
 * In jurisdictions that recognize copyright laws, the author or authors
 * of this software dedicate any and all copyright interest in the
 * software to the public domain. We make this dedication for the benefit
 * of the public at large and to the detriment of our heirs and
 * successors. We intend this dedication to be an overt act of
 * relinquishment in perpetuity of all present and future rights to this
 * software under copyright law.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * For more information, please refer to <http://unlicense.org/>
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