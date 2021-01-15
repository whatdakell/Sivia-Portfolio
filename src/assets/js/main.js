var controller = new ScrollMagic.Controller();

$(document).ready(function() {
	$(".side-img").each(function() {
		var tl = new TimelineMax();
		var child = $(this).find("img");
		tl.to($(this), 1, { y: -180, ease: Linear.easeNone });
		var scene = new ScrollMagic.Scene({
			triggerElement: this.parentElement,
			triggerHook: 0.4,
			duration: "100%"
		})
			.setTween(tl)
			// .addIndicators({
			//   colorTrigger: "black",
			//   colorStart: "black",
			//   colorEnd: "black",
			//   indent: 10
			// })
			.addTo(controller);
	});

	$(".fast").each(function() {
		var tl = new TimelineMax();
		var child = $(this).find("img");
		tl.to($(this), 1, { y: -180, ease: Linear.easeNone });
		var scene = new ScrollMagic.Scene({
			triggerElement: this.parentElement,
			triggerHook: 0.4,
			duration: "100%"
		})
			.setTween(tl)
			// .addIndicators({
			//   colorTrigger: "black",
			//   colorStart: "black",
			//   colorEnd: "black",
			//   indent: 10
			// })
			.addTo(controller);
	});


	$(".faster").each(function() {
		var tl = new TimelineMax();
		var child = $(this).find("img");
		tl.to($(this), 1, { y: -200, ease: Linear.easeNone });
		var scene = new ScrollMagic.Scene({
			triggerElement: this.parentElement,
			triggerHook: 0.4,
			duration: "100%"
		})
			.setTween(tl)
			// .addIndicators({
			//   colorTrigger: "black",
			//   colorStart: "black",
			//   colorEnd: "black",
			//   indent: 10
			// })
			.addTo(controller);
	});
	$(".slow").each(function() {
		var tl = new TimelineMax();
		var child = $(this).find("img");
		tl.to($(this), 1, { y: -100, ease: Linear.easeNone });
		var scene = new ScrollMagic.Scene({
			triggerElement: this.parentElement,
			triggerHook: 0.4,
			duration: "100%"
		})
			.setTween(tl)
			// .addIndicators({
			//   colorTrigger: "black",
			//   colorStart: "black",
			//   colorEnd: "black",
			//   indent: 10
			// })
			.addTo(controller);
	});

})
