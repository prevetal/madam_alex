WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
BODY = document.getElementsByTagName('body')[0]


document.addEventListener('DOMContentLoaded', function() {
	// Main slider
	let mainSlider = document.querySelector('.main_slider .swiper')

	if (mainSlider) {
		new Swiper('.main_slider .swiper', {
			loop: true,
			speed: 750,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 24,
			slidesPerView: 1,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			lazy: true,
			autoplay: {
				disableOnInteraction: false
			},
			on: {
				init: swiper => setTimeout(() => {
					$(swiper.el).find('.swiper-pagination-bullet').eq(swiper.realIndex).addClass('animate_first')

					swiper.params.autoplay.delay = 10000
					swiper.autoplay.start()
				}),
				beforeTransitionStart: swiper => setTimeout(() => {
					$(swiper.el).find('.swiper-pagination-bullet').removeClass('animate_first animate')
					$(swiper.el).find('.swiper-pagination-bullet').eq(swiper.realIndex).addClass('animate')
				})
			}
		})
	}


	// Video collections slider
	const videoCollectionsSliders = [],
		videoCollections = document.querySelectorAll('.video_collections .swiper')

	videoCollections.forEach((el, i) => {
		el.classList.add('video_collections_s' + i)

		let options = {
			loop: false,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			spaceBetween: 12,
			breakpoints: {
				0: {
					slidesPerView: 'auto'
				},
				960: {
					slidesPerView: 3
				},
				1200: {
					slidesPerView: 4
				}
			}
		}

		videoCollectionsSliders.push(new Swiper('.video_collections_s' + i, options))
	})


	// Lines slider
	const linesSliders = [],
		lines = document.querySelectorAll('.lines .swiper')

	lines.forEach((el, i) => {
		el.classList.add('lines_s' + i)

		let options = {
			loop: false,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			lazy: true,
			breakpoints: {
				0: {
					spaceBetween: 13,
					slidesPerView: 'auto'
				},
				1200: {
					spaceBetween: 24,
					slidesPerView: 4
				}
			}
		}

		linesSliders.push(new Swiper('.lines_s' + i, options))
	})


	// Reviews slider
	const reviewsSliders = [],
		reviews = document.querySelectorAll('.reviews .swiper')

	reviews.forEach((el, i) => {
		el.classList.add('reviews_s' + i)

		let options = {
			loop: false,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			autoplay: {
				delay: 2000,
				disableOnInteraction: false
			},
			breakpoints: {
				0: {
					spaceBetween: 16,
					slidesPerView: 'auto'
				},
				1440: {
					spaceBetween: 24,
					slidesPerView: 4
				}
			},
			on: {
				init: swiper => setTimeout(() => {
					$(swiper.el).find('.swiper-button-next').append('<svg class="progress" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet"><circle cx="50" cy="50" r="48" stroke="currentColor" stroke-width="2" fill="none"/></svg>')
				}),
				slideChangeTransitionStart: swiper => setTimeout(() => {
					$(swiper.el).find('.swiper-button-next .progress').remove()
				}),
				slideChangeTransitionEnd: swiper => setTimeout(() => {
					$(swiper.el).find('.swiper-button-next').append('<svg class="progress" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet"><circle cx="50" cy="50" r="48" stroke="currentColor" stroke-width="2" fill="none"/></svg>')
				})
			}
		}

		reviewsSliders.push(new Swiper('.reviews_s' + i, options))
	})


	// Text slider
	const textSliders = [],
		textSlider = document.querySelectorAll('.text_block .swiper.slider')

	textSlider.forEach((el, i) => {
		el.classList.add('text_block_s' + i)

		let options = {
			loop: true,
			loopAdditionalSlides: 1,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			lazy: true,
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
				bulletActiveClass: 'active'
			},
			spaceBetween: 24,
			slidesPerView: 1,
			autoplay: {
				delay: 2000,
				disableOnInteraction: false
			},
			on: {
				init: swiper => setTimeout(() => {
					$(swiper.el).find('.swiper-button-next').append('<svg class="progress" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet"><circle cx="50" cy="50" r="48" stroke="currentColor" stroke-width="2" fill="none"/></svg>')
				}),
				slideChangeTransitionStart: swiper => setTimeout(() => {
					$(swiper.el).find('.swiper-button-next .progress').remove()
				}),
				slideChangeTransitionEnd: swiper => setTimeout(() => {
					$(swiper.el).find('.swiper-button-next').append('<svg class="progress" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet"><circle cx="50" cy="50" r="48" stroke="currentColor" stroke-width="2" fill="none"/></svg>')
				})
			}
		}

		textSliders.push(new Swiper('.text_block_s' + i, options))
	})


	// Error page
	const errorPageSliders = [],
		errorPageSlider = document.querySelectorAll('.error_page .swiper')

	errorPageSlider.forEach((el, i) => {
		el.classList.add('error_page_s' + i)

		let options = {
			loop: true,
			loopAdditionalSlides: 2,
			slidesPerView: 'auto',
			spaceBetween: 36,
			speed: $(el).find('.swiper-slide').length * 750,
			autoplay: {
				delay: 0,
				disableOnInteraction: false,
				reverseDirection: el.classList.contains('reverse') ? true : false
			},
			allowTouchMove: false,
			on: {
				init: swiper => setTimeout(() => swiper.autoplay.start(), $(el).find('.swiper-slide').length * 750)
			}
		}

		errorPageSliders.push(new Swiper('.error_page_s' + i, options))
	})


	// Product info
	if ($('.product_info .images .swiper').length) {
		const productSlider = new Swiper('.product_info .images .swiper', {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 0,
			slidesPerView: 1,
			lazy: true,
			on: {
				activeIndexChange: swiper => setTimeout(() => {
					$('.product_info .images .thumbs .btn').removeClass('active')
					$('.product_info .images .thumbs .btn').eq(swiper.realIndex).addClass('active')
				})
			}
		})

		$('.product_info .images .thumbs .btn').click(function(e) {
			e.preventDefault()

			productSlider.slideTo(parseInt($(this).data('slide-index')), 500)
		})
	}


	// Mini popups
	$('.mini_modal_btn').click(function(e) {
		e.preventDefault()

		const modalId = $(this).data('modal-id')

		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
			$('.mini_modal').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		} else {
			$('.mini_modal_btn').removeClass('active')
			$(this).addClass('active')

			$('.mini_modal').removeClass('active')
			$(modalId).addClass('active')

			if (is_touch_device()) $('body').css('cursor', 'pointer')
		}
	})

	// Close the popup when clicking outside of it
	$(document).click(e => {
		if ($(e.target).closest('.modal_cont').length === 0) {
			$('.mini_modal, .mini_modal_btn').removeClass('active')

			if (is_touch_device()) $('body').css('cursor', 'default')
		}
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.trapFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.placeFocusBack = false
	Fancybox.defaults.l10n = {
		CLOSE: 'Закрыть',
		NEXT: 'Следующий',
		PREV: 'Предыдущий',
		MODAL: 'Вы можете закрыть это модальное окно нажав клавишу ESC'
	}


	// Zoom images
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false
		},
		Thumbs: {
			autoStart: false
		}
	})


	// Phone input mask
	const phoneInputs = document.querySelectorAll('input[type=tel]')

	if (phoneInputs) {
		phoneInputs.forEach(el => {
			window.intlTelInput(el, {
				strictMode: true,
				initialCountry: 'auto',
				separateDialCode: true,
				geoIpLookup: callback => {
					fetch('https://ipapi.co/json')
					  .then(res => res.json())
					  .then(data => callback(data.country_code))
					  .catch(() => callback('ru'))
				},
			})
		})
	}


	// Custom select - Nice select
	const selects = document.querySelectorAll('select:not(.skip)')

	if (selects) {
		selects.forEach(el => {
			NiceSelect.bind(el, {
				placeholder: el.getAttribute('data-placeholder')
			})

			el.addEventListener('change', () => el.classList.add('selected'))

			if (el.querySelector('option[selected]')) {
				el.classList.add('selected')
			}
		})
	}


	// Tabs
	var locationHash = window.location.hash

	$('body').on('click', '.tabs .btn', function(e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			let parent = $(this).closest('.tabs_container'),
				activeTab = $(this).data('content'),
				activeTabContent = $(activeTab),
				level = $(this).data('level')

			parent.find('.tabs:first .btn').removeClass('active')
			parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			activeTabContent.addClass('active')
		}
	})

	if (locationHash && $('.tabs_container').length) {
		let activeTab = $(`.tabs button[data-content="${locationHash}"]`),
			activeTabContent = $(locationHash),
			parent = activeTab.closest('.tabs_container'),
			level = activeTab.data('level')

		parent.find('.tabs:first .btn').removeClass('active')
		parent.find('.tab_content.' + level).removeClass('active')

		activeTab.addClass('active')
		activeTabContent.addClass('active')

		$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
	}


	$('header .info .cart .btn').click(function(e) {
		e.preventDefault()

		$('.cart_info').addClass('show')
		$('.overlay').fadeIn(200)
	})


	$('.cart_info .close_btn, .overlay').click(function(e) {
		e.preventDefault()

		$('.cart_info').removeClass('show')
		$('.overlay').fadeOut(200)
	})


	$('.checkout_btn').click(function(e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			$(this).addClass('active')

			$('.checkout_info').addClass('show')
		} else {
			Fancybox.show([{
				src: document.getElementById('checkout_success_modal'),
				type: 'inline'
			}])
		}
	})


	$('.checkout_info .close_btn').click(function(e) {
		e.preventDefault()

		$('.checkout_info').removeClass('show')
	})


	// Change the quantity of goods
	$('body').on('click', '.amount .minus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			minimum = parseFloat($input.data('minimum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal > minimum) $input.val(inputVal - step + unit)
	})

	$('body').on('click', '.amount .plus', function (e) {
		e.preventDefault()

		const $parent = $(this).closest('.amount'),
			$input = $parent.find('.input'),
			inputVal = parseFloat($input.val()),
			maximum = parseFloat($input.data('maximum')),
			step = parseFloat($input.data('step')),
			unit = $input.data('unit')

		if (inputVal < maximum) $input.val(inputVal + step + unit)
	})

	$('.amount .input').keydown(function () {
		const _self = $(this),
			maximum = parseInt(_self.data('maximum'))

		setTimeout(() => {
			if (_self.val() == '' || _self.val() == 0) _self.val(parseInt(_self.data('minimum')))
			if (_self.val() > maximum) _self.val(maximum)
		})
	})


	// Accordion
	$('body').on('click', '.accordion .accordion_item .head', function(e) {
		e.preventDefault()

		let item = $(this).closest('.accordion_item'),
			accordion = $(this).closest('.accordion')

		if (item.hasClass('active')) {
			item.removeClass('active').find('.data').slideUp(300)
		} else {
			accordion.find('.accordion_item').removeClass('active')
			accordion.find('.data').slideUp(300)

			item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Mob. articles filter
	$('.page_head .mob_filter_controls .filter_btn').click(function(e) {
		e.preventDefault()

		$(this).toggleClass('active')

		$('.page_head .mob_filter_controls .reset_btn').toggleClass('show')

		if ($('.articles_head').length) {
			$('.articles_head').slideToggle(300)
		}

		if ($('.products_head').length) {
			$('.products_head').slideToggle(300)
		}
	})


	// Product to cart
	$('.product .buy_btn,.product_info .buy_btn').click(function(e) {
		e.preventDefault()

		$('.product_added_modal').fadeIn(200)
		$('.product_added_modal .progress').addClass('animate')

		setTimeout(() => {
			$('.product_added_modal').fadeOut(100)
			$('.product_added_modal .progress').removeClass('animate')
		}, 3000)
	})


	$('.product_added_modal .close_btn').click(function(e) {
		e.preventDefault()

		$('.product_added_modal').fadeOut(100)
		$('.product_added_modal .progress').removeClass('animate')
	})
})



window.addEventListener('resize', function () {
	WH = window.innerHeight || document.clientHeight || BODY.clientHeight

	let windowW = window.outerWidth

	if (typeof WW !== 'undefined' && WW != windowW) {
		// Overwrite window width
		WW = window.innerWidth || document.clientWidth || BODY.clientWidth


		// Mob. version
		if (!fakeResize) {
			fakeResize = true
			fakeResize2 = false

			document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
		}

		if (!fakeResize2) {
			fakeResize2 = true

			if (windowW < 375) document.getElementsByTagName('meta')['viewport'].content = 'width=375, user-scalable=no'
		} else {
			fakeResize = false
			fakeResize2 = true
		}
	}
})