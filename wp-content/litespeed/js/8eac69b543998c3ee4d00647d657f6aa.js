!function(i){i.each(["frontend/element_ready/wd_products.default","frontend/element_ready/wd_products_tabs.default"],function(o,e){woodmartThemeModule.wdElementorAddAction(e,function(){woodmartThemeModule.quickShop()})}),woodmartThemeModule.quickShop=function(){"no"!==woodmart_settings.quick_shop&&(woodmartThemeModule.$document.on("click",".product-grid-item.product-type-variable .add_to_cart_button",function(o){o.preventDefault();var e=i(this),d=e.parents(".product").first(),t=d.find(".wd-quick-shop"),o=d.data("id"),a="btn-loading";e.hasClass(a)||(d.hasClass("quick-shop-loaded")?(d.addClass("quick-shop-shown"),woodmartThemeModule.$body.trigger("woodmart-quick-view-displayed")):(e.addClass(a),d.addClass("wd-loading-quick-shop"),i.ajax({url:woodmart_settings.ajaxurl,data:{action:"woodmart_quick_shop",id:o},method:"get",success:function(o){woodmartThemeModule.removeDuplicatedStylesFromHTML(o,function(o){t.append(o),(o=d).find(".variations_form").wc_variation_form().find(".variations select:eq(0)").trigger("change"),o.find(".variations_form").trigger("wc_variation_form"),woodmartThemeModule.$document.trigger("wdQuickShopSuccess"),e.removeClass(a),d.removeClass("wd-loading-quick-shop"),d.addClass("quick-shop-shown quick-shop-loaded"),woodmartThemeModule.$body.trigger("woodmart-quick-view-displayed")})}})))}).on("click",".quick-shop-close",function(o){o.preventDefault(),i(this).parents(".product").removeClass("quick-shop-shown")}),woodmartThemeModule.$body.on("added_to_cart",function(){i(".product").removeClass("quick-shop-shown")}))},i(document).ready(function(){woodmartThemeModule.quickShop()})}(jQuery)
;