!function(g){g.each(["frontend/element_ready/wd_products.default","frontend/element_ready/wd_products_tabs.default"],function(a,e){woodmartThemeModule.wdElementorAddAction(e,function(){woodmartThemeModule.swatchesOnGrid()})}),woodmartThemeModule.swatchesOnGrid=function(){woodmartThemeModule.$body.on("click",".wd-swatches-grid .wd-swatch",function(){var a,e,t,d,i,r,s,o,c,n=g(this),l=n.data("image-src"),m=n.data("image-srcset"),u=n.data("image-sizes");void 0!==l&&""!==l&&(i=(d=n.parents(".product-grid-item")).find(".product-image-link > img, .product-image-link > picture > img"),r=d.find(".product-image-link picture source"),s=i.data("original-src"),o=i.data("original-srcset"),c=i.data("original-sizes"),void 0===s&&i.data("original-src",i.attr("src")),void 0===o&&i.data("original-srcset",i.attr("srcset")),void 0===c&&i.data("original-sizes",i.attr("sizes")),n.hasClass("wd-active")?(a=s,e=o,t=c,n.removeClass("wd-active"),d.removeClass("product-swatched")):(n.parent().find(".wd-active").removeClass("wd-active"),n.addClass("wd-active"),d.addClass("product-swatched"),a=l,e=m,t=u,g(".product-grid-item").trigger("wdImagesGalleryInLoopOff",d)),i.attr("src")!==a)&&(d.addClass("wd-loading-image"),i.attr("src",a).attr("srcset",e).attr("image_sizes",t).one("load",function(){d.removeClass("wd-loading-image")}),0<r.length)&&r.attr("srcset",e).attr("image_sizes",t)})},g(document).ready(function(){woodmartThemeModule.swatchesOnGrid()})}(jQuery)
;