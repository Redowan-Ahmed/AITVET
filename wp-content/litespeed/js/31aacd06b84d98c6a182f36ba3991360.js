!function(a){a.each(["frontend/element_ready/wd_products.default","frontend/element_ready/wd_products_tabs.default"],function(t,o){woodmartThemeModule.wdElementorAddAction(o,function(){woodmartThemeModule.addToCart()})}),woodmartThemeModule.addToCart=function(){var t,e=0,d=(woodmartThemeModule.$body.on("added_to_cart",function(t,o){if(o.stop_reload||o.e_manually_triggered)return!1;"popup"===woodmart_settings.add_to_cart_action?(o=['<div class="added-to-cart">',"<h3>"+woodmart_settings.added_to_cart+"</h3>",'<a href="#" class="btn btn-style-link btn-color-default close-popup">'+woodmart_settings.continue_shopping+"</a>",'<a href="'+woodmart_settings.cart_url+'" class="btn btn-color-primary view-cart">'+woodmart_settings.view_cart+"</a>","</div>"].join(""),a.magnificPopup.open({removalDelay:500,tClose:woodmart_settings.close,tLoading:woodmart_settings.loading,callbacks:{beforeOpen:function(){this.st.mainClass="mfp-move-horizontal cart-popup-wrapper"}},items:{src:'<div class="mfp-with-anim wd-popup popup-added_to_cart wd-close-btn-inset">'+o+"</div>",type:"inline"}}),a(".popup-added_to_cart").on("click",".close-popup",function(t){t.preventDefault(),a.magnificPopup.close()}),d()):"widget"===woodmart_settings.add_to_cart_action&&(clearTimeout(e),(0<(o=a(".act-scroll .wd-header-cart .wd-dropdown-cart, .whb-sticked .wd-header-cart .wd-dropdown-cart")).length?o:a(".whb-header .wd-header-cart .wd-dropdown-cart")).addClass("wd-opened"),0<(o=a(".cart-widget-opener")).length&&o.first().trigger("click"),e=setTimeout(function(){a(".wd-dropdown-cart").removeClass("wd-opened")},3500),d()),woodmartThemeModule.$document.trigger("wdActionAfterAddToCart")}),function(){if("yes"!==woodmart_settings.add_to_cart_action_timeout)return!1;clearTimeout(t),t=setTimeout(function(){a(".wd-close-side").trigger("click"),a.magnificPopup.close()},1e3*parseInt(woodmart_settings.add_to_cart_action_timeout_number))})},a(document).ready(function(){woodmartThemeModule.addToCart()})}(jQuery)
;