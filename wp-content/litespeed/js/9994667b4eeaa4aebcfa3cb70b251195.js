!function(o){o.each(["frontend/element_ready/wd_slider.default"],function(e,i){woodmartThemeModule.wdElementorAddAction(i,function(){woodmartThemeModule.sliderAnimations(),woodmartThemeModule.carouselInitFlickity(),woodmartThemeModule.sliderLazyLoad()})}),woodmartThemeModule.$document.on("wdShopPageInit",function(){woodmartThemeModule.sliderAnimations(),woodmartThemeModule.carouselInitFlickity(),woodmartThemeModule.sliderLazyLoad()}),woodmartThemeModule.sliderClearAnimations=function(e,i){i&&e.find('[class*="wpb_animate"]').each(function(){for(var e,i=o(this),a=i.attr("class").split(" "),d=0;d<a.length;d++)0<=a[d].indexOf("wd-anim-name_")&&(e=a[d].split("_")[1]);i.removeClass("wpb_start_animation animated").removeClass(e)}),e.siblings().find('[class*="wpb_animate"]').each(function(){for(var e,i=o(this),a=i.attr("class").split(" "),d=0,t=0;t<a.length;t++)0<=a[t].indexOf("wd-anim-delay_")&&(d=parseInt(a[t].split("_")[1])),0<=a[t].indexOf("wd-anim-name_")&&(e=a[t].split("_")[1]);setTimeout(function(){i.removeClass("wpb_start_animation animated").removeClass(e)},d)})},woodmartThemeModule.sliderAnimations=function(){o(".wd-slider").each(function(){var a=o(this);function d(e,i){e=a.find(".wd-slide").eq(e);woodmartThemeModule.sliderClearAnimations(e,i),woodmartThemeModule.runAnimations(e,i)}a.find('[class*="wd-animation"]').each(function(){o(this).addClass("wd-animation-ready")}),d(0,!0),a.on("change.flickity",function(e,i){d(i,!1)})})},woodmartThemeModule.runAnimations=function(e,n){e.siblings().find('[class*="wd-animation"]').removeClass("wd-animated"),e.find('[class*="wd-animation"]').each(function(){for(var e=o(this),i=e.attr("class").split(" "),a=0,d=0;d<i.length;d++)0<=i[d].indexOf("wd_delay_")&&(a=parseInt(i[d].split("_")[2]));n&&(a+=500),setTimeout(function(){e.addClass("wd-animated")},a)}),e.find('[class*="wpb_animate"]').each(function(){for(var e,i=o(this),a=i.attr("class").split(" "),d=0,t=0;t<a.length;t++)0<=a[t].indexOf("wd-anim-delay_")&&(d=parseInt(a[t].split("_")[1])),0<=a[t].indexOf("wd-anim-name_")&&(e=a[t].split("_")[1]);n&&(d+=500),setTimeout(function(){i.removeClass("wd-off-anim").addClass("wpb_start_animation animated").addClass(e)},d)})},woodmartThemeModule.sliderLazyLoad=function(){function a(e,i){var a=i.find(".wd-slide").eq(e),d=i.find('[id="'+a.attr("id")+'"]');i.find(".wd-slide").eq(e+1).addClass("woodmart-loaded"),a.addClass("woodmart-loaded"),d.each(function(){o(this).addClass("woodmart-loaded")})}woodmartThemeModule.$window.on("wdEventStarted",function(){o(".wd-slider").each(function(){a(0,o(this))})}),o(".wd-slider").on("change.flickity",function(e,i){a(i,o(this))})},woodmartThemeModule.carouselInitFlickity=function(){function e(e){var i,d,t;woodmartThemeModule.windowWidth<=1024&&e.hasClass("disable-owl-mobile")||(i=!0,(e.hasClass("anim-fade")||e.hasClass("anim-parallax"))&&e.find(".wd-slide").length<=2&&(i=!1),i={contain:!0,percentPosition:!0,cellAlign:"left",rightToLeft:woodmartThemeModule.$body.hasClass("rtl"),pageDots:"yes"!==e.data("hide_pagination_control"),prevNextButtons:"yes"!==e.data("hide_prev_next_buttons"),autoPlay:"yes"===e.data("autoplay")&&parseInt(e.data("speed")),pauseAutoPlayOnHover:"yes"!==e.data("autoplay"),adaptiveHeight:!0,imagesLoaded:!0,wrapAround:i,fade:e.hasClass("anim-fade"),on:{ready:function(){setTimeout(function(){woodmartThemeModule.$document.trigger("wdCarouselFlickityInited")},100)}}},e.find(".wd-slider").flickity(i),setTimeout(function(){e.find(".wd-slider").addClass("wd-enabled")},100),e.find(".wd-slider").on("dragStart.flickity",function(){e.find(".wd-slider").addClass("wd-dragging")}),e.find(".wd-slider").on("dragEnd.flickity",function(){e.find(".wd-slider").removeClass("wd-dragging")}),e.hasClass("anim-parallax")&&(d=e.find(".wd-slider").data("flickity"),t=e.find(".wd-slide .wd-slide-bg"),e.find(".wd-slider").on("scroll.flickity",function(){d.slides.forEach(function(e,i){var a=t[i],i=0===i?Math.abs(d.x)>d.slidesWidth?d.slidesWidth+d.x+d.slides[d.slides.length-1].outerWidth+e.target:e.target+d.x:i===d.slides.length-1&&Math.abs(d.x)+d.slides[i].outerWidth<d.slidesWidth?e.target-d.slidesWidth+d.x-d.slides[i].outerWidth:e.target+d.x;a.style.transform="translateX( "+-.5*i+"px)"})})))}woodmartThemeModule.$body.hasClass("single-woodmart_slide")||(o(".wd-slider-wrapper:not(.scroll-init)").each(function(){e(o(this))}),void 0!==o.fn.waypoint&&o(".wd-slider-wrapper.scroll-init").waypoint(function(){e(o(o(this)[0].element))},{offset:"100%"}))},o(document).ready(function(){woodmartThemeModule.sliderAnimations(),woodmartThemeModule.carouselInitFlickity(),woodmartThemeModule.sliderLazyLoad()})}(jQuery)
;