!function(e){woodmartThemeModule.onRemoveFromCart=function(){"no"!==woodmart_settings.woocommerce_ajax_add_to_cart&&woodmartThemeModule.$document.on("click",".widget_shopping_cart .remove",function(o){o.preventDefault(),e(this).parent().addClass("removing-process")})},e(document).ready(function(){woodmartThemeModule.onRemoveFromCart()})}(jQuery)
;