!function(t){woodmartThemeModule.$document.on("wdShopPageInit wdUpdateWishlist wdArrowsLoadProducts wdLoadMoreLoadProducts wdProductsTabsLoaded wdSearchFullScreenContentLoaded wdArrowsLoadProducts wdBackHistory wdRecentlyViewedProductLoaded",function(){woodmartThemeModule.productHover()}),woodmartThemeModule.wcTabsHoverFix=function(){t(".wc-tabs > li").on("click",function(){woodmartThemeModule.productHover()})},woodmartThemeModule.$document.on("wdProductMoreDescriptionOpen",function(o,e){woodmartThemeModule.productHoverRecalc(e)}),t.each(["frontend/element_ready/wd_products.default","frontend/element_ready/wd_products_tabs.default"],function(o,e){woodmartThemeModule.wdElementorAddAction(e,function(){woodmartThemeModule.productHover()})}),woodmartThemeModule.productHoverRecalc=function(o){var e;o.hasClass("wd-fade-off")||(e=o.find(".fade-in-block").outerHeight(),o.find(".content-product-imagin").css({marginBottom:-e}),o.addClass("hover-ready"))},woodmartThemeModule.productHover=function(){var o=t(".wd-hover-with-fade");function d(o){var e,d;o.data("column_width")||(e=o.outerWidth(),d=o.data("columns"),o.data("column_width",e/d))}woodmartThemeModule.windowWidth<=1024&&(o.hasClass("wd-hover-fw-button")&&o.addClass("wd-fade-off"),o.on("click",function(o){var e=t(this),d="state-hover";e.hasClass(d)||"no"!==woodmart_settings.base_hover_mobile_click||e.hasClass("wd-hover-fw-button")||(o.preventDefault(),t("."+d).removeClass(d),e.addClass(d))}),woodmartThemeModule.$document.on("click touchstart",function(o){0===t(o.target).closest(".state-hover").length&&t(".state-hover").removeClass("state-hover")})),o.on("mouseenter mousemove touchstart",function(){var o=t(this),e=o.find(".xts-more-desc");e.hasClass("wd-height-calculated")||(o.imagesLoaded(function(){woodmartThemeModule.productHoverRecalc(o)}),e.addClass("wd-height-calculated"))}),t(".wd-products-holder").on("mouseenter mousemove touchstart",function(){d(t(this))}),o.on("mouseenter mousemove touchstart",function(){var o,e;woodmart_settings.hover_width_small&&!(o=t(this)).hasClass("wd-hover-fw-button")&&(d(o.parent(".wd-products-holder")),e=o.parent(".wd-products-holder").data("column_width"))&&(e<255||woodmartThemeModule.windowWidth<=1024?(o.find(".wd-add-btn").parent().addClass("wd-add-small-btn"),o.find(".wd-add-btn").removeClass("wd-add-btn-replace").addClass("wd-action-btn wd-style-icon wd-add-cart-icon")):(woodmartThemeModule.$body.hasClass("catalog-mode-on")||woodmartThemeModule.$body.hasClass("login-see-prices"))&&o.find(".wd-bottom-actions .wd-action-btn").removeClass("wd-style-icon").addClass("wd-style-text"),woodmartThemeModule.$document.trigger("wdProductBaseHoverIconsResize"))})},t(document).ready(function(){woodmartThemeModule.productHover(),woodmartThemeModule.wcTabsHoverFix()}),window.addEventListener("popstate",function(){woodmartThemeModule.productHover()})}(jQuery)
;