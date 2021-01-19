
$(document).ready(function() {
	window.scroll(0, 0);

	$('body').addClass('loaded');
	setTimeout(() => {
		$('body').addClass('animate');
	}, 2000);
	var controller = new ScrollMagic.Controller(".wrapper");
	// new TweenMax.fromTo('body', 1, {backgroundColor: 'orange'}, {backgroundColor: 'purple'})
	var scene = new ScrollMagic.Scene({
						triggerElement: ".wrapper",
						offset: 500,
						triggerElement: 0.1,
						duration: "1000%"
					})
					.setTween("body", 1, {backgroundColor: "#e2d7cf",  ease: Linear.easeNone}) // 
					.setTween($(".sunshine"), 1, {rotation: 360, ease: Linear.easeNone}) // trigger a TweenMax.to tween
					.addTo(controller);

	$(".project-images .image").each(function() {
		var tl = new TimelineMax();
		var child = $(this).find("img");
		var scene = new ScrollMagic.Scene({
			triggerElement: this,
			offset: -100,
		})
			.setClassToggle( this, 'animate')
			.reverse(false)
			.addTo(controller);
	});


	$(".side-img").each(function() {
		var tl = new TimelineMax();
		var child = $(this).find("img");
		tl.to($(this), 1, { y: -100, ease: Linear.easeNone });
		var scene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: 1,
			duration: "80%",
			offset: 50
		})
			.setTween(tl)
			.addTo(controller);
	});

	$(".fast").each(function() {
		var tl = new TimelineMax();
		var child = $(this).find("img");
		tl.to($(this), 1, { y: -100, ease: Linear.easeNone });
		var scene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: 1,
			duration: "100%"
		})
			.setTween(tl)
			.addTo(controller);
	});


	$(".faster").each(function() {
		var tl = new TimelineMax();
		var child = $(this).find("img");
		tl.to($(this), 1, { y: -200, ease: Linear.easeNone });
		var scene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: 1,
			duration: "100%"
		})
			.setTween(tl)
			.addTo(controller);
	});
	$(".slow").each(function() {
		var tl = new TimelineMax();
		var child = $(this).find("img");
		tl.to($(this), 1, { y: -60, ease: Linear.easeNone });
		var scene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: 0.6,
			duration: "100%"
		})
			.setTween(tl)
			.addTo(controller);
	});

})
