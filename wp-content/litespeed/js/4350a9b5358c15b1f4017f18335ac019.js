!function(m){woodmartThemeModule.miniCartQuantity=function(){var i;woodmartThemeModule.$document.on("change input",".woocommerce-mini-cart .quantity .qty",function(){var t=m(this),e=t.val(),n=t.parents(".woocommerce-mini-cart-item").data("key"),a=t.attr("max"),o=woodmart_settings.cart_hash_key,r=woodmart_settings.fragment_name;clearTimeout(i),parseInt(e)>parseInt(a)&&(e=a),i=setTimeout(function(){t.parents(".mini_cart_item").addClass("wd-loading"),m.ajax({url:woodmart_settings.ajaxurl,data:{action:"woodmart_update_cart_item",item_id:n,qty:e},success:function(i){i&&i.fragments&&(m.each(i.fragments,function(t,e){var a,o,r;m(t).hasClass("widget_shopping_cart_content")&&(a=m(e).find('.woocommerce-mini-cart-item[data-key="'+n+'"]'),o=m(e).find(".shopping-cart-widget-footer"),r=m(t).find('.woocommerce-mini-cart-item[data-key="'+n+'"]'),i.cart_hash)?(r.replaceWith(a),m(".shopping-cart-widget-footer").replaceWith(o)):m(t).replaceWith(e)}),woodmartThemeModule.supports_html5_storage&&(sessionStorage.setItem(r,JSON.stringify(i.fragments)),localStorage.setItem(o,i.cart_hash),sessionStorage.setItem(o,i.cart_hash),i.cart_hash)&&sessionStorage.setItem("wc_cart_created",(new Date).getTime()),woodmartThemeModule.$body.trigger("wc_fragments_refreshed"))},dataType:"json",method:"GET"})},500)})},m(document).ready(function(){woodmartThemeModule.miniCartQuantity()})}(jQuery)
;