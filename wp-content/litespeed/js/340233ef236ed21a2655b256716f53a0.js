!function(c){woodmartThemeModule.loginSidebar=function(){var e=woodmartThemeModule.$body,o=c(".login-form-side"),n=c(".wd-close-side"),d=(c(".login-side-opener").on("click",function(e){o.length&&(e.preventDefault(),t()?d():setTimeout(function(){i()},10))}),e.on("click touchstart",".wd-close-side",function(){t()&&d()}),e.on("click",".close-side-widget",function(e){e.preventDefault(),t()&&d()}),woodmartThemeModule.$document.on("keyup",function(e){27===e.keyCode&&t()&&d()}),function(){o.removeClass("wd-opened"),n.removeClass("wd-close-side-opened")}),i=function(){o.find("form").removeClass("hidden-form"),o.addClass("wd-opened"),n.addClass("wd-close-side-opened")},t=(0<o.find(".woocommerce-notices-wrapper > ul").length&&i(),function(){return o.hasClass("wd-opened")})},c(document).ready(function(){woodmartThemeModule.loginSidebar()})}(jQuery)
;