!function(m){woodmartThemeModule.menuOffsets=function(){m(".wd-header-main-nav ul.menu > li, .wd-header-secondary-nav ul.menu > li, .widget_nav_mega_menu ul.menu:not(.wd-nav-vertical) > li, .wd-header-main-nav .wd-dropdown.wd-design-aside ul > li").each(function(){var e=m(this);function d(){e.hasClass("wd-offsets-calculated")||(e.find(" > .menu-item-has-children").each(function(){var e,d,s,o,n,a,t,i,w,l;e=m(this),i=e.find(" > .wd-dropdown-menu"),w=i.outerWidth(),l=i.offset(),i.attr("style",""),w&&l&&(i.hasClass("wd-design-full-width")||i.hasClass("wd-design-aside")?(s=woodmartThemeModule.$window.width(),woodmartThemeModule.$body.hasClass("rtl")?s<=(o=s-l.left-w)+w&&i.css({right:-(d=o+w-s)}):l.left+w>=s&&(d=l.left+w-s,i.css({left:-d}))):(i.hasClass("wd-design-sized")||i.hasClass("wd-design-full-height"))&&(s=woodmart_settings.site_width,o=(s=woodmartThemeModule.$window.width()<s||!s||e.parents(".whb-header").hasClass("whb-full-width")?woodmartThemeModule.$window.width():s)-l.left-w,e=15,n=(woodmartThemeModule.$window.width()-s)/2,t=m(".wd-sticky-nav"),woodmartThemeModule.$body.hasClass("wd-sticky-nav-enabled")&&t.length&&(e-=t.width()/2),woodmartThemeModule.$body.hasClass("rtl")?s<=(a=n+o)+w&&i.css({right:-(d=a+w-s)-e}):s<=(a=l.left-n)+w&&i.css({left:-(d=a+w-s)-e})))}),woodmartThemeModule.$document.trigger("resize.vcRowBehaviour"),e.addClass("wd-offsets-calculated"))}(e=e.hasClass("menu-item")?m(this).parent():e).on("mouseenter mousemove",function(){d()}),woodmartThemeModule.$window.on("wdHeaderBuilderStickyChanged",d),"yes"===woodmart_settings.clear_menu_offsets_on_resize&&setTimeout(function(){woodmartThemeModule.$window.on("resize",woodmartThemeModule.debounce(function(){e.removeClass("wd-offsets-calculated"),e.find(" > .menu-item-has-children > .wd-dropdown-menu").attr("style","")},300))},2e3)})},woodmartThemeModule.menuDropdownAside=function(){m(".wd-nav .wd-design-aside, .wd-header-cats.wd-open-dropdown .wd-nav").each(function(){var e,d=m(this).find(".menu-item");d.length&&((e=d.first()).hasClass("menu-item-has-children")||e.parents(".wd-sub-menu-wrapp").addClass("wd-empty-item"),e.addClass("wd-opened").find(".wd-dropdown").addClass("wd-opened"),d.on("mouseover",function(){var e=m(this),d=e.parents(".wd-sub-menu-wrapp");e.hasClass("wd-opened")||(e.hasClass("item-level-1")&&(e.hasClass("menu-item-has-children")?d.removeClass("wd-empty-item"):d.addClass("wd-empty-item")),e.siblings().removeClass("wd-opened").find(".wd-dropdown").removeClass("wd-opened"),e.addClass("wd-opened").find(".wd-dropdown").addClass("wd-opened"))}))})},woodmartThemeModule.$window.on("wdEventStarted",function(){setTimeout(function(){woodmartThemeModule.menuDropdownAside(),woodmartThemeModule.menuOffsets()},100)})}(jQuery)
;