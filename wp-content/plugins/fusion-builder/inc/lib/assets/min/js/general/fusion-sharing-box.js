jQuery(document).ready(function(){jQuery(".fusion-sharing-box").each(function(){jQuery('meta[property="og:title"]').length||(jQuery("head title").after('<meta property="og:title" content="'+jQuery(this).data("title")+'"/>'),jQuery("head title").after('<meta property="og:description" content="'+jQuery(this).data("description")+'"/>'),jQuery("head title").after('<meta property="og:type" content="article"/>'),jQuery("head title").after('<meta property="og:url" content="'+jQuery(this).data("link")+'"/>'),jQuery("head title").after('<meta property="og:image" content="'+jQuery(this).data("image")+'"/>'))}),cssua.ua.mobile&&document.body.querySelectorAll(".fusion-social-network-icon, .fusion-facebook-sharer-icon").forEach(function(e){0===e.href.indexOf("https://www.facebook.com/sharer.php")&&e.setAttribute("href",e.href.replace("https://www.facebook.com/sharer.php","https://m.facebook.com/sharer.php"))})});