/*
	Phantom by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {
	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header = $('#header'),
			$banner = $('#banner');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Prioritize "important" elements on medium.

		// Forms.
			var $form = $('form');

			// Auto-resizing textareas.
				$form.find('textarea').each(function() {

					var $this = $(this),
						$wrapper = $('<div class="textarea-wrapper"></div>'),
						$submits = $this.find('input[type="submit"]');

					$this
						.wrap($wrapper)
						.attr('rows', 1)
						.css('overflow', 'hidden')
						.css('resize', 'none')
						.on('keydown', function(event) {

							if (event.keyCode == 13
							&&	event.ctrlKey) {

								event.preventDefault();
								event.stopPropagation();

								$(this).blur();

							}

						})
						.on('blur focus', function() {
							$this.val($.trim($this.val()));
						})
						.on('input blur focus --init', function() {

							$wrapper
								.css('height', $this.height());

							$this
								.css('height', 'auto')
								.css('height', $this.prop('scrollHeight') + 'px');

						})
						.on('keyup', function(event) {

							if (event.keyCode == 9)
								$this
									.select();

						})
						.triggerHandler('--init');

						
				});

			// Fix: Placeholder polyfill.
				$form.placeholder();

		// Banner.

		if ($banner.length > 0) {

			// IE fix.
				if (skel.vars.IEVersion < 12) {

					$window.on('resize', function() {

						var wh = $window.height() * 0.60,
							bh = $banner.height();

						$banner.css('height', 'auto');

						window.setTimeout(function() {

							if (bh < wh)
								$banner.css('height', wh + 'px');

						}, 0);

					});

					$window.on('load', function() {
						$window.triggerHandler('resize');
					});

				}

			// Video check.
				var video = $banner.data('video');

				if (video)
					$window.on('load.banner', function() {

						// Disable banner load event (so it doesn't fire again).
							$window.off('load.banner');

						// Append video if supported.
							if (!skel.vars.mobile
							&&	!skel.breakpoint('large').active
							&&	skel.vars.IEVersion > 9)
								$banner.append('<video autoplay muted loop><source src="' + video + '.mp4" type="video/mp4" /><source src="' + video + '.webm" type="video/webm" /></video>');

					});

			// More button.
				$banner.find('.more')
					.addClass('scrolly');

		}
		// Header.
			if ($banner.length > 0
			&&	$header.hasClass('alt')) {

				$window.on('resize', function() { $window.trigger('scroll'); });

				$banner.scrollex({
					bottom:		$header.outerHeight(),
					terminate:	function() { $header.removeClass('alt'); },
					enter:		function() { $header.addClass('alt'); },
					leave:		function() { $header.removeClass('alt'); $header.addClass('reveal'); }
				});

			}


		// Menu.

	});

})(jQuery);