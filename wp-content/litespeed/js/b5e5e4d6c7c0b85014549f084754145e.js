!function(o){woodmartThemeModule.productRecentlyViewed=function(){o(".wd-products-element .products, .wd-carousel-container.products").each(function(){var t=o(this),e=t.data("atts");void 0!==e&&void 0!==e.post_type&&"recently_viewed"===e.post_type&&void 0!==e.ajax_recently_viewed&&"yes"===e.ajax_recently_viewed&&o.ajax({url:woodmart_settings.ajaxurl,data:{attr:e,action:"woodmart_get_recently_viewed_products"},dataType:"json",method:"POST",success:function(e){e.items&&((t.hasClass("wd-carousel-container")&&t.parents(".elementor-widget-container").length?t:t.parent()).replaceWith(e.items),woodmartThemeModule.$document.trigger("wdRecentlyViewedProductLoaded"),woodmartThemeModule.$document.trigger("wood-images-loaded"))},error:function(){console.log("ajax error")}})})},o(document).ready(function(){woodmartThemeModule.productRecentlyViewed()})}(jQuery)
;