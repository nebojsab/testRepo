function fusionSliderReTrigger(){setTimeout(function(){window.document.dispatchEvent(new Event("fusion-element-render-fusion_fusionslider"))},50)}var headerHeight,fusionReanimateSlider;cssua.ua.mobile||document.body.querySelectorAll(".fusion-slider-self-hosted-video-placeholder").forEach(function(a){jQuery(a).after(function(){var b='width="1800" height="700"',c="";return jQuery(a.attributes).each(function(a,d){switch(d.name){case"class":break;case"data-ogg":c+=d.nodeValue?'<source src="'+d.nodeValue+'" type="video/ogg">':"";break;case"data-webm":c+=d.nodeValue?'<source src="'+d.nodeValue+'" type="video/webm">':"";break;case"data-mp4":c+=d.nodeValue?'<source src="'+d.nodeValue+'" type="video/mp4">':"";break;default:b+=" "+d.name+'="'+d.nodeValue+'"'}}),"<video "+b+">"+c+"</video>"})}),headerHeight=jQuery(".fusion-header-wrapper").height(),fusionReanimateSlider=function(a){var b=a.find(".slide-content"),c=a.siblings(".tfs-scroll-down-indicator");jQuery(b).each(function(){jQuery(this).stop(!0,!0),jQuery(this).css("margin-top","50px"),jQuery(this).animate({opacity:"1","margin-top":"0"},1e3)}),jQuery(c).each(function(){var a=jQuery(this);a.stop(!0,!0),a.css("opacity","0"),b.offset().top+b.height()+25<a.offset().top&&(a.css("padding-bottom","50px"),setTimeout(function(){a.animate({opacity:"1","padding-bottom":"0"},500,"easeOutCubic")},500))})},function(a){"use strict";a(".tfs-slider").each(function(){var b=this;1<=a(b).parents(".post-content").length&&(a(b).data("parallax",0),a(b).data("full_screen",0)),cssua.ua.mobile&&a(b).data("parallax",0)})}(jQuery),jQuery(document).ready(function(){var a=jQuery(".tfs-slider");jQuery().flexslider&&a.length&&a.each(function(){var a,b;"function"==typeof fusionSetOriginalTypographyData&&(a=jQuery(this).parent().data("id"),a="fusion-slider-"+a!==jQuery(this).parent().attr("id")?".fusion-slider-"+a:"#fusion-slider-"+a,b=a+" h1, "+a+" h2, "+a+" h3, "+a+" h4, "+a+" h5, "+a+" h6",fusionSetOriginalTypographyData(b),jQuery(a).data("has-rendered",!0))})}),jQuery(document).on("ready fusion-element-render-fusion_fusionslider fusion-partial-header_position fusion-partial-wooslider fusion-partial-fusion_tax_wooslider fusion-partial-slider_type fusion-column-resized",function(a,b){function c(){jQuery("body").hasClass("fusion-builder-live")&&!jQuery("body").hasClass("fusion-builder-live-preview-only")||("absolute"!==jQuery(".fusion-header-wrapper").css("position")&&jQuery(".fusion-header-wrapper").css("position","relative"),jQuery("#main, .fusion-footer-widget-area, .fusion-footer-copyright-area, .fusion-page-title-bar").css("position","relative"),jQuery("#main, .fusion-footer-widget-area, .fusion-footer-copyright-area, .fusion-page-title-bar").css("z-index","3"),jQuery(".fusion-header-wrapper").css("z-index","5"))}var d;"ready"===a.type&&jQuery("body").hasClass("fusion-builder-live-preview")&&void 0!==b||(d=void 0!==b?jQuery('div[data-cid="'+b+'"]').find(".tfs-slider"):jQuery(".tfs-slider"),jQuery().flexslider&&d.length&&d.each(function(){var a,b,d,e,f,g,h,i,j,k,l,m=this,n=jQuery(m).find("li").get(0);headerHeight=jQuery(".fusion-header-wrapper").height(),jQuery("body").hasClass("fusion-builder-live")&&!jQuery("body").hasClass("fusion-builder-live-preview-only")&&(jQuery(m).css("width",""),jQuery(m).css("margin-left",""),jQuery(m).css("margin-right",""),jQuery(m).css("left","")),"function"==typeof fusionSetOriginalTypographyData&&(a=jQuery(this).parent().data("id"),a="fusion-slider-"+a!==jQuery(this).parent().attr("id")?".fusion-slider-"+a:"#fusion-slider-"+a,l=a+" h1, "+a+" h2, "+a+" h3, "+a+" h4, "+a+" h5, "+a+" h6",void 0===jQuery(a).data("has-rendered")&&(fusionSetOriginalTypographyData(l),jQuery(a).data("has-rendered",!0))),1<=jQuery(m).parents(".post-content").length&&(jQuery(m).data("parallax",0),jQuery(m).data("full_screen",0)),(cssua.ua.mobile||Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)"))&&jQuery(m).data("parallax",0),k=0,1<=jQuery("#wpadminbar").length&&(k=jQuery("#wpadminbar").height()),1<=jQuery(m).parents("#sliders-container").length&&1===jQuery(m).data("parallax")&&jQuery(".fusion-header").addClass("fusion-header-backface"),1==jQuery(m).data("full_screen")?(b=jQuery(window).height()-k,"above"===avadaFusionSliderVars.slider_position.toLowerCase()&&(b=jQuery(window).height()-(headerHeight+k)),0===jQuery(m).data("parallax")&&(b=1==avadaFusionSliderVars.header_transparency&&"below"===avadaFusionSliderVars.slider_position.toLowerCase()?jQuery(window).height()-k:jQuery(window).height()-(headerHeight+k)),Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")&&(b=1==avadaFusionSliderVars.mobile_header_transparency&&"below"===avadaFusionSliderVars.slider_position.toLowerCase()?jQuery(window).height()-k:jQuery(window).height()-(headerHeight+k)),jQuery(".fusion-top-frame").length&&(b=b-jQuery(".fusion-top-frame").height()-jQuery(".fusion-bottom-frame").height()),jQuery(m).find("video").each(function(){var a,c,d;e=jQuery(this).width()/jQuery(this).height(),a=e*b,c="-"+(a-jQuery(m).width())/2+"px",f=jQuery(m).parent().parent().parent().width(),jQuery(m).parents(".post-content").length&&(f=jQuery(m).width()),f>a?(a="100%",c=0,d="static"):d="absolute",jQuery(this).width(a),jQuery(this).css({left:c,position:d})})):(d=jQuery(m).data("slider_width"),-1!==d.indexOf("%")?(d=jQuery(n).find(".background-image").data("imgwidth"),d||cssua.ua.mobile||(d=jQuery(n).find("video").width()),d||(d=940),jQuery(m).data("first_slide_width",d),d<jQuery(m).data("slider_width")&&(d=jQuery(m).data("slider_width"))):d=parseInt(jQuery(m).data("slider_width"),10),b=parseInt(jQuery(m).data("slider_height"),10),e=b/d,.5>e&&(e=.5),f=jQuery(m).parent().parent().parent().width(),1<=jQuery(m).parents(".post-content").length&&(f=jQuery(m).width()),b=e*f,b>parseInt(jQuery(m).data("slider_height"),10)&&(b=parseInt(jQuery(m).data("slider_height"),10)),200>b&&(b=200)),1==jQuery(m).data("full_screen")&&(jQuery(m).css("max-width","100%"),jQuery(m).find(".slides, .background").css("width","100%")),"left"!==avadaFusionSliderVars.header_position&&"right"!==avadaFusionSliderVars.header_position||jQuery(m).hasClass("fixed-width-slider")||1!=jQuery(m).data("parallax")||(jQuery(m).css("max-width",jQuery("#wrapper").width()),jQuery("body").hasClass("side-header-left")?jQuery(m).css("left",jQuery("#side-header").width()):jQuery("body").hasClass("side-header-right")&&jQuery(m).css("right",jQuery("#side-header").width())),jQuery(m).parents(".fusion-slider-container").css("height",b),jQuery(m).css("height",b),jQuery(m).find(".background, .mobile_video_image").css("height",b),1<=jQuery(".layout-boxed-mode").length&&(g=jQuery(".layout-boxed-mode #wrapper").width(),jQuery(m).css("width",g),jQuery(m).css("margin-left","auto"),jQuery(m).css("margin-right","auto"),1!=jQuery(m).data("parallax")||Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")||(jQuery(m).css("left","50%"),"left"===avadaFusionSliderVars.header_position||"right"===avadaFusionSliderVars.header_position?(g=jQuery(".layout-boxed-mode #wrapper").width()-jQuery(".layout-boxed-mode #side-header").width(),"right"===avadaFusionSliderVars.header_position&&(g=jQuery(".layout-boxed-mode #wrapper").width()+jQuery(".layout-boxed-mode #side-header").width()),jQuery(m).css("margin-left","-"+Math.floor(g/2)+"px")):jQuery(m).css("margin-left","-"+g/2+"px")),jQuery(m).find(".slides, .background").css("width","100%")),cssua.ua.mobile&&(jQuery(m).find(".fusion-button").each(function(){jQuery(this).removeClass("button-xlarge button-large button-medium"),jQuery(this).addClass("button-small")}),jQuery(m).find("li").each(function(){jQuery(this).attr("data-autoplay","no"),jQuery(this).data("autoplay","no")})),jQuery(m).find("a.button").each(function(){jQuery(this).data("old",jQuery(this).attr("class"))}),Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.content_break_point+"px)")?jQuery(m).find(".fusion-button").each(function(){jQuery(this).data("old",jQuery(this).attr("class")),jQuery(this).removeClass("button-xlarge button-large button-medium"),jQuery(this).addClass("button-small")}):jQuery(m).find("a.button").each(function(){jQuery(this).attr("class",jQuery(this).data("old"))}),1==jQuery(m).data("parallax")&&(!Modernizr.mq("only screen and (min-width: "+avadaFusionSliderVars.side_header_break_point+"px)")||0!==avadaFusionSliderVars.header_transparency&&"0"!==avadaFusionSliderVars.header_transparency&&!1!==avadaFusionSliderVars.header_transparency||"below"!==avadaFusionSliderVars.slider_position.toLowerCase()||(h=jQuery(m).find(".slide-content-container"),jQuery(h).each(function(){jQuery(this).css("padding-top",headerHeight+"px")})),jQuery(window).scroll(function(){jQuery(m).parents("#sliders-container").length&&jQuery(window).scrollTop()>=jQuery("#sliders-container").position().top+jQuery("#sliders-container").height()?(cssua.ua.mobile||Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")||jQuery(m).css("position","static"),jQuery(m).css("visibility","hidden")):(cssua.ua.mobile||Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")||jQuery(m).css("position","fixed"),jQuery(m).css("visibility","visible"))})),i=jQuery(window).width(),j=jQuery(window).height(),jQuery(window).on("resize fusion-column-resized",function(a,l){var n,o,p,q,r,s=i!==jQuery(window).width()||i!==jQuery(window).width()&&j!==jQuery(window).height();void 0!==l&&"fusion-column-resized"===a.type&&jQuery('div[data-cid="'+l+'"]').find(".tfs-slider").length&&(m=jQuery('div[data-cid="'+l+'"]').find(".tfs-slider"),s=!0),s&&(headerHeight=jQuery(".fusion-header-wrapper").height(),k=0,void 0!==jQuery(m).find(".flex-active-slide").find(".tfs-scroll-down-indicator").offset()&&jQuery(m).find(".flex-active-slide").find(".slide-content").offset().top+jQuery(m).find(".flex-active-slide").find(".slide-content").height()+25<jQuery(m).find(".flex-active-slide").find(".tfs-scroll-down-indicator").offset().top?jQuery(m).find(".flex-active-slide").find(".tfs-scroll-down-indicator").css("opacity","1"):jQuery(m).find(".flex-active-slide").find(".tfs-scroll-down-indicator").css("opacity","0"),jQuery("#wpadminbar").length&&(k=jQuery("#wpadminbar").height()),n=Math.max.apply(null,jQuery(m).find(".slide-content").map(function(){return jQuery(this).outerHeight()}).get()),n+=40,1==jQuery(m).data("full_screen")?(b=jQuery(window).height()-k,Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")&&jQuery("#side-header").length&&(headerHeight=jQuery("#side-header").outerHeight()),"above"===avadaFusionSliderVars.slider_position.toLowerCase()&&(b=jQuery(window).height()-(headerHeight+k)),0===jQuery(m).data("parallax")&&(b=1==avadaFusionSliderVars.header_transparency&&"below"===avadaFusionSliderVars.slider_position.toLowerCase()?jQuery(window).height()-k:jQuery(window).height()-(headerHeight+k)),Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")&&(b=1==avadaFusionSliderVars.mobile_header_transparency&&"below"===avadaFusionSliderVars.slider_position.toLowerCase()?jQuery(window).height()-k:jQuery(window).height()-(headerHeight+k)),jQuery(".fusion-top-frame").length&&(b=b-jQuery(".fusion-top-frame").height()-jQuery(".fusion-bottom-frame").height()),b<n&&(b=n),setTimeout(function(){jQuery(m).find("video").each(function(){var a,c,d;e=jQuery(this).width()/jQuery(this).height(),a=e*b,c="-"+(a-jQuery(m).width())/2+"px",f=jQuery(m).parent().parent().parent().width(),jQuery(m).parents(".post-content").length&&(f=jQuery(m).width()),f>a?(a="100%",c=0,d="static"):d="absolute",jQuery(this).width(a),jQuery(this).css({left:c,position:d})})},100)):(d=jQuery(m).data("slider_width"),void 0!==d&&-1!==d.indexOf("%")?(d=jQuery(m).data("first_slide_width"),d<jQuery(m).data("slider_width")&&(d=jQuery(m).data("slider_width")),o=!0):d=parseInt(jQuery(m).data("slider_width"),10),b=parseInt(jQuery(m).data("slider_height"),10),e=b/d,.5>e&&(e=.5),f=jQuery(m).parent().parent().parent().width(),1<=jQuery(m).parents(".post-content").length&&(f=jQuery(m).width(),jQuery(m).parents(".tab-content").length&&(f=jQuery(m).parents(".tab-content").width()-60)),b=e*f,b>parseInt(jQuery(m).data("slider_height"),10)&&(b=parseInt(jQuery(m).data("slider_height"),10)),200>b&&(b=200),b<n&&n<=parseInt(jQuery(m).data("slider_height"),10)&&(b=n),jQuery(m).find("video").each(function(){var a,c;e=jQuery(this).width()/jQuery(this).height(),a=e*b,a<d&&!jQuery(m).hasClass("full-width-slider")&&(a=d),c="-"+(a-jQuery(m).width())/2+"px",f=jQuery(m).parent().parent().parent().width(),1<=jQuery(m).parents(".post-content").length&&(f=jQuery(m).width()),f>a&&!0===o&&1!=jQuery(m).data("full_screen")&&(a="100%",c=0),jQuery(this).width(a),jQuery(this).css("left",c)})),Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.content_break_point+"px)")?jQuery(m).find(".fusion-button").each(function(){void 0===jQuery(this).data("old")&&jQuery(this).data("old",jQuery(this).attr("class")),jQuery(this).removeClass("button-xlarge button-large button-medium"),jQuery(this).addClass("button-small")}):jQuery(m).find(".fusion-button").each(function(){jQuery(this).attr("class",jQuery(this).data("old"))}),1==jQuery(m).data("full_screen")&&"fade"===jQuery(m).data("animation")&&(jQuery(m).css("max-width","100%"),jQuery(m).find(".slides, .background").css("width","100%")),"left"!==avadaFusionSliderVars.header_position&&"right"!==avadaFusionSliderVars.header_position||jQuery(m).hasClass("fixed-width-slider")||1!=jQuery(m).data("parallax")||(jQuery(m).css("max-width",jQuery("#wrapper").width()),jQuery("body").hasClass("side-header-left")?jQuery(m).css("left",jQuery("#side-header").width()):jQuery("body").hasClass("side-header-right")&&jQuery(m).css("right",jQuery("#side-header").width())),jQuery(m).parents(".fusion-slider-container").css("height",b),jQuery(m).parents(".fusion-slider-container").css("max-height",b),jQuery(m).css("height",b),jQuery(m).find(".background, .mobile_video_image").css("height",b),1<=jQuery(".layout-boxed-mode").length&&0===jQuery(m).parents(".post-content").length&&(g=jQuery(".layout-boxed-mode #wrapper").width(),jQuery(m).css("width",g),jQuery(m).css("margin-left","auto"),jQuery(m).css("margin-right","auto"),1!=jQuery(m).data("parallax")||Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")||(jQuery(m).css("left","50%"),"left"===avadaFusionSliderVars.header_position||"right"===avadaFusionSliderVars.header_position?(g=jQuery(".layout-boxed-mode #wrapper").width()-jQuery(".layout-boxed-mode #side-header").width(),"right"===avadaFusionSliderVars.header_position&&(g=jQuery(".layout-boxed-mode #wrapper").width()+jQuery(".layout-boxed-mode #side-header").width()),jQuery(m).css("margin-left","-"+Math.floor(g/2)+"px")):jQuery(m).css("margin-left","-"+g/2+"px")),"slide"!==jQuery(m).data("animation")&&jQuery(m).find(".slides").css("width","100%"),jQuery(m).find(".background").css("width","100%")),1!==jQuery(m).data("parallax")||Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")?1==jQuery(m).data("parallax")&&Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")&&(jQuery(m).css("position","relative"),jQuery(m).css("left","0"),jQuery(m).css("margin-left","0"),c(),jQuery(".fusion-header-wrapper").css("height","auto"),jQuery(m).parents(".fusion-slider-container").css("margin-top",""),jQuery(m).find(".flex-direction-nav li a").css("margin-top",""),jQuery(m).find(".flex-control-nav").css("bottom",0),0!==avadaFusionSliderVars.header_transparency&&"0"!==avadaFusionSliderVars.header_transparency&&!1!==avadaFusionSliderVars.header_transparency||"below"!==avadaFusionSliderVars.slider_position.toLowerCase()||(h=jQuery(m).find(".slide-content-container"),jQuery(h).each(function(){jQuery(this).css("padding-top","")}))):(jQuery(m).css("position","fixed"),"absolute"!==jQuery(".fusion-header-wrapper").css("position")?(jQuery(".fusion-header-wrapper").css("position","relative"),r=headerHeight/2+"px","below"===avadaFusionSliderVars.slider_position.toLowerCase()&&jQuery(m).parents(".fusion-slider-container").css("margin-top","-"+headerHeight+"px")):r="0",jQuery(m).find(".flex-direction-nav li a").css("margin-top",r),c(),jQuery(".fusion-header-wrapper").css("height",headerHeight),jQuery(m).hasClass("fixed-width-slider")&&("left"===avadaFusionSliderVars.header_position||"right"===avadaFusionSliderVars.header_position?(p=jQuery(m).parents("#sliders-container").length?jQuery("#sliders-container"):jQuery("#main"),p.width()<parseFloat(jQuery(m).parent().css("max-width"))?jQuery(m).css("max-width",p.width()):jQuery(m).css("max-width",jQuery(m).parent().css("max-width")),p.width()<parseFloat(jQuery(m).parent().css("max-width"))?jQuery(m).css("max-width",p.width()):jQuery(m).css("max-width",jQuery(m).parent().css("max-width")),-1*(q="left"===avadaFusionSliderVars.header_position?"-"+(jQuery(m).width()-jQuery("#side-header").width())/2+"px":"-"+(jQuery(m).width()+jQuery("#side-header").width())/2+"px")>jQuery(m).width()&&(q=-1*jQuery(m).width())):q="-"+jQuery(m).width()/2+"px",jQuery(m).css("left","50%"),jQuery(m).css("margin-left",q)),jQuery(m).find(".flex-control-nav").css("bottom",headerHeight/2),0!==avadaFusionSliderVars.header_transparency&&"0"!==avadaFusionSliderVars.header_transparency&&!1!==avadaFusionSliderVars.header_transparency||"below"!==avadaFusionSliderVars.slider_position.toLowerCase()||(h=jQuery(m).find(".slide-content-container"),jQuery(h).each(function(){jQuery(this).css("padding-top",headerHeight+"px")}))),Modernizr.mq("only screen and (max-width: 640px)")?(jQuery(m).parents(".fusion-slider-container").css("height",b),jQuery(m).css("height",b),jQuery(m).find(".background, .mobile_video_image").css("height",b)):(Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)"),jQuery(m).parents(".fusion-slider-container").css("height",b),jQuery(m).css("height",b),jQuery(m).find(".background, .mobile_video_image").css("height",b)),h=jQuery(m).find(".slide-content-container"),1<=jQuery(m).parents(".post-content").length&&(jQuery(m).parents(".fusion-slider-container").css("height","auto"),jQuery(m).css("height","auto"),jQuery(m).parents(".fusion-slider-container").css("max-height","none"),jQuery(m).find(".mobile_video_image").each(function(){var a,c,d=jQuery(".mobile_video_image").css("background-image").replace("url(","").replace(")","");d&&(a=new Image,a.name=d,a.src=d,a.onload=function(){var a=this.height/this.width;f=jQuery(m).parent().parent().parent().width(),1<=jQuery(m).parents(".post-content").length&&(f=jQuery(m).width()),(c=a*f)<b&&(jQuery(m).find(".mobile_video_image").css("height",c),jQuery(m).css("height",c))})})),"left"!==avadaFusionSliderVars.header_position&&"right"!==avadaFusionSliderVars.header_position||1<=jQuery(m).parents("#sliders-container").length&&(h=jQuery(m).parents("#sliders-container").find(".slide-content-container"),jQuery(h).each(function(){Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")?(jQuery(this).find(".slide-content").css("margin-left",""),jQuery(this).find(".slide-content").css("margin-right","")):jQuery(this).hasClass("slide-content-right")?jQuery(this).find(".slide-content").css("margin-right","100px"):jQuery(this).hasClass("slide-content-left")&&jQuery(this).find(".slide-content").css("margin-left","100px")})),Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")&&jQuery(".fusion-header-wrapper").css("height",""),i=jQuery(window).width(),j=jQuery(window).height())}),1<=jQuery(m).parents(".post-content").length&&(jQuery(m).css("max-width","100%"),"slide"!==jQuery(m).data("animation")&&jQuery(m).find(".slides").css("max-width","100%")),jQuery(m).find("video").each(function(){"function"==typeof jQuery(this)[0].pause&&jQuery(this)[0].pause()}),jQuery(m).flexslider({animation:jQuery(m).data("animation"),slideshow:jQuery(m).data("autoplay"),slideshowSpeed:jQuery(m).data("slideshow_speed"),animationSpeed:jQuery(m).data("animation_speed"),controlNav:Boolean("pagination_circles"===jQuery(m).data("slider_indicator")),directionNav:Boolean(Number(jQuery(m).data("nav_arrows"))),animationLoop:Boolean(Number(jQuery(m).data("loop"))),smoothHeight:!0,pauseOnHover:!1,useCSS:!0,video:!0,touch:!0,prevText:"&#xe61e;",nextText:"&#xe620;",start:function(a){var g,i,j,l,o;k=0,jQuery(m).parent().find(".fusion-slider-loading").remove(),1<=jQuery("#wpadminbar").length&&(k=jQuery("#wpadminbar").height()),jQuery(a.slides.eq(a.currentSlide)).find(".slide-content-container").show(),jQuery(a.slides.eq(a.currentSlide)).find(".tfs-scroll-down-indicator").show(),"function"==typeof jQuery.fn.fusion_responsive_title_shortcode&&jQuery(a.slides.eq(a.currentSlide)).find(".fusion-title").fusion_responsive_title_shortcode(),g=Math.max.apply(null,jQuery(m).find(".slide-content").map(function(){return jQuery(this).outerHeight()}).get()),g+=40,1==jQuery(m).data("full_screen")?(b=jQuery(window).height()-k,"above"===avadaFusionSliderVars.slider_position.toLowerCase()&&(b=jQuery(window).height()-(headerHeight+k)),0===jQuery(m).data("parallax")&&(b=1==avadaFusionSliderVars.header_transparency&&"below"===avadaFusionSliderVars.slider_position.toLowerCase()?jQuery(window).height()-k:jQuery(window).height()-(headerHeight+k)),Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")&&(jQuery("#side-header").length&&(headerHeight=jQuery("#side-header").outerHeight()),b=1==avadaFusionSliderVars.mobile_header_transparency&&"below"===avadaFusionSliderVars.slider_position.toLowerCase()?jQuery(window).height()-k:jQuery(window).height()-(headerHeight+k)),b<g&&(b=g),jQuery(".fusion-top-frame").length&&(b=b-jQuery(".fusion-top-frame").height()-jQuery(".fusion-bottom-frame").height()),jQuery(m).find("video").each(function(){var a,c;e=jQuery(this).width()/jQuery(this).height(),c=e*b,a="-"+(c-jQuery(m).width())/2+"px",f=jQuery(m).parent().parent().parent().width(),1<=jQuery(m).parents(".post-content").length&&(f=jQuery(m).width()),f>c&&(c="100%",a=0),jQuery(this).width(c),jQuery(this).css("left",a)})):(d=jQuery(m).data("slider_width"),-1!==d.indexOf("%")?(d=jQuery(n).find(".background-image").data("imgwidth"),d||cssua.ua.mobile||(d=jQuery(n).find("video").width()),d||(d=940),jQuery(m).data("first_slide_width",d),d<jQuery(m).data("slider_width")&&(d=jQuery(m).data("slider_width")),i=!0):d=parseInt(jQuery(m).data("slider_width"),10),b=parseInt(jQuery(m).data("slider_height"),10),e=b/d,.5>e&&(e=.5),f=jQuery(m).parent().parent().parent().width(),1<=jQuery(m).parents(".post-content").length&&(f=jQuery(m).width(),jQuery(m).parents(".tab-content").length&&(f=jQuery(m).parents(".tab-content").width()-60)),b=e*f,b>parseInt(jQuery(m).data("slider_height"),10)&&(b=parseInt(jQuery(m).data("slider_height"),10)),200>b&&(b=200),b<g&&(b=g),jQuery(m).find("video").each(function(){var a,c;e=jQuery(this).width()/jQuery(this).height(),c=e*b,c<d&&!jQuery(m).hasClass("full-width-slider")&&(c=d),a="-"+(c-jQuery(m).width())/2+"px",f=jQuery(m).parent().parent().parent().width(),1<=jQuery(m).parents(".post-content").length&&(f=jQuery(m).width()),f>c&&!0===i&&1!=jQuery(m).data("full_screen")&&(c="100%",a=0),jQuery(this).width(c),jQuery(this).css("left",a)})),jQuery(m).parents(".fusion-slider-container").css("max-height",b),jQuery(m).parents(".fusion-slider-container").css("height",b),jQuery(m).css("height",b),jQuery(m).find(".background, .mobile_video_image").css("height",b),1!==jQuery(m).data("parallax")||Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")?1==jQuery(m).data("parallax")&&Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")&&(jQuery(m).css("position","relative"),jQuery(m).css("left","0"),jQuery(m).css("margin-left","0"),c(),jQuery(".fusion-header-wrapper").css("height","auto"),jQuery(m).parents(".fusion-slider-container").css("margin-top",""),jQuery(m).find(".flex-direction-nav li a").css("margin-top",""),jQuery(m).find(".flex-control-nav").css("bottom",0),0!==avadaFusionSliderVars.header_transparency&&"0"!==avadaFusionSliderVars.header_transparency&&!1!==avadaFusionSliderVars.header_transparency||"below"!==avadaFusionSliderVars.slider_position.toLowerCase()||(h=jQuery(m).find(".slide-content-container"),jQuery(h).each(function(){jQuery(this).css("padding-top","")}))):(jQuery(m).css("position","fixed"),"absolute"!==jQuery(".fusion-header-wrapper").css("position")?(jQuery(".fusion-header-wrapper").css("position","relative"),o=headerHeight/2+"px","below"===avadaFusionSliderVars.slider_position.toLowerCase()&&jQuery(m).parents(".fusion-slider-container").css("margin-top","-"+headerHeight+"px")):o="0",jQuery(m).find(".flex-direction-nav li a").css("margin-top",o),jQuery(".fusion-header-wrapper").css("height",headerHeight),c(),1==jQuery(m).data("full_screen")?jQuery(a).find(".flex-control-nav").css("bottom",headerHeight/2):jQuery(a).find(".flex-control-nav").css("bottom",0),jQuery(m).hasClass("fixed-width-slider")&&("left"===avadaFusionSliderVars.header_position||"right"===avadaFusionSliderVars.header_position?(j=jQuery(m).parents("#sliders-container").length?jQuery("#sliders-container"):jQuery("#main"),j.width()<parseFloat(jQuery(m).parent().css("max-width"))?jQuery(m).css("max-width",j.width()):jQuery(m).css("max-width",jQuery(m).parent().css("max-width")),-1*(l="left"===avadaFusionSliderVars.header_position?"-"+(jQuery(m).width()-jQuery("#side-header").width())/2+"px":"-"+(jQuery(m).width()+jQuery("#side-header").width())/2+"px")>jQuery(m).width()&&(l=-1*jQuery(m).width())):l="-"+jQuery(m).width()/2+"px",jQuery(m).css("left","50%"),jQuery(m).css("margin-left",l)),0!==avadaFusionSliderVars.header_transparency&&"0"!==avadaFusionSliderVars.header_transparency&&!1!==avadaFusionSliderVars.header_transparency||"below"!==avadaFusionSliderVars.slider_position.toLowerCase()||(h=jQuery(m).find(".slide-content-container"),jQuery(h).each(function(){jQuery(this).css("padding-top",headerHeight+"px")}))),h=jQuery(m).find(".slide-content-container"),jQuery(a.slides.eq(a.currentSlide)).find("video").each(function(){"yes"===jQuery(this).parents("li").attr("data-autoplay")&&"function"==typeof jQuery(this)[0].play&&jQuery(this)[0].play()}),"left"!==avadaFusionSliderVars.header_position&&"right"!==avadaFusionSliderVars.header_position||1<=jQuery(m).parents("#sliders-container").length&&(h=jQuery(m).parents("#sliders-container").find(".slide-content-container"),jQuery(h).each(function(){Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")||(jQuery(this).hasClass("slide-content-right")?jQuery(this).find(".slide-content").css("margin-right","100px"):jQuery(this).hasClass("slide-content-left")&&jQuery(this).find(".slide-content").css("margin-left","100px"))})),fusionReanimateSlider(h),void 0!==a.slides&&0!==a.slides.eq(a.currentSlide).find("iframe").length&&playVideoAndPauseOthers(a),jQuery(m).find(".overlay-link").hide(),jQuery(a.slides.eq(a.currentSlide)).find(".overlay-link").show(),jQuery(m).find("[data-youtube-video-id], [data-vimeo-video-id]").each(function(){var a=jQuery(this);setTimeout(function(){resizeVideo(a)},500)}),jQuery.waypoints("viewportHeight"),jQuery.waypoints("refresh")},before:function(){jQuery(m).find(".slide-content-container").hide(),jQuery(m).find(".tfs-scroll-down-indicator").hide()},after:function(a){jQuery(a.slides.eq(a.currentSlide)).find(".slide-content-container").show(),jQuery(a.slides.eq(a.currentSlide)).find(".tfs-scroll-down-indicator").show(),"function"==typeof jQuery.fn.fusion_responsive_title_shortcode&&jQuery(a.slides.eq(a.currentSlide)).find(".fusion-title").fusion_responsive_title_shortcode(),h=jQuery(m).find(".slide-content-container"),fusionReanimateSlider(h),jQuery(m).find(".overlay-link").hide(),jQuery(a.slides.eq(a.currentSlide)).find(".overlay-link").show(),jQuery(a.slides.eq(a.currentSlide)).find("[data-youtube-video-id], [data-vimeo-video-id]").each(function(){resizeVideo(jQuery(this))}),playVideoAndPauseOthers(a),jQuery('[data-spy="scroll"]').each(function(){jQuery(this).scrollspy("refresh")})}})}))});