!function(){function getStyles(config){ return "<style>"+config.selector+"{width:90px;height:20px}"+config.selector+" [class*=entypo-]:before{font-family:entypo,sans-serif}"+config.selector+" label{font-size:16px;cursor:pointer;margin:0;padding:5px 10px;border-radius:5px;background:"+config.button_background+";color:"+config.button_color+";-webkit-transition:all .3s ease;transition:all .3s ease}"+config.selector+" label:hover{opacity:.8}"+config.selector+" label span{text-transform:uppercase;font-size:.85em;font-family:Lato,sans-serif;font-weight:900;-webkit-font-smoothing:antialiased;padding-left:6px}"+config.selector+" .social{-webkit-transform-origin:50% 0;-ms-transform-origin:50% 0;transform-origin:50% 0;-webkit-transform:scale(0) translateY(-190px);-ms-transform:scale(0) translateY(-190px);transform:scale(0) translateY(-190px);opacity:0;-webkit-transition:all .4s ease;transition:all .4s ease;margin-left:-15px}"+config.selector+" .social.active{opacity:1;-webkit-transition:all .4s ease;transition:all .4s ease}"+config.selector+" .social.active.center{margin-left:-45px}"+config.selector+" .social.active.left{margin-left:-115px}"+config.selector+" .social.active.right{margin-left:10px}"+config.selector+" .social.active.top{-webkit-transform:scale(1) translateY(-90px);-ms-transform:scale(1) translateY(-90px);transform:scale(1) translateY(-90px)}"+config.selector+" .social.active.top.center ul:after{margin:35px auto;border-top:20px solid #fff;z-index:-2;}"+config.selector+" .social.active.top.left ul:after{margin:35px 0 0 129px;border-top:20px solid #e34429}"+config.selector+" .social.active.top.right ul:after{margin:35px 0 0 10px;border-top:20px solid #6cdfea}"+config.selector+" .social.active.bottom{-webkit-transform:scale(1) translateY(45px);-ms-transform:scale(1) translateY(45px);transform:scale(1) translateY(45px);margin-top:-14px}"+config.selector+" .social.active.bottom.center ul:after{margin:-10px auto;border-bottom:20px solid #3b5998}"+config.selector+" .social.active.bottom.left ul:after{margin:-10px 0 0 129px;border-bottom:20px solid #e34429}"+config.selector+" .social.active.bottom.right ul:after{margin:-10px 0 0 10px;border-bottom:20px solid #6cdfea}"+config.selector+" .social ul{position:relative;left:0;right:0;width:180px;height:46px;color:#fff;background:#3b5998;margin:auto;padding:0;list-style:none}"+config.selector+" .social ul li{font-size:20px;cursor:pointer;width:60px;margin:0;padding:12px 0;text-align:center;float:left;display:block;height:22px;position:relative;z-index:2;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;-webkit-transition:all .3s ease;transition:all .3s ease}"+config.selector+" .social ul li:hover{color:rgba(0,0,0,.5)}"+config.selector+" .social ul:after{content:'';display:block;width:0;height:0;position:absolute;left:0;right:0;border-left:20px solid transparent;border-right:20px solid transparent}"+config.selector+" .social li[class*=twitter]{background:#6cdfea;padding:12px 0}"+config.selector+" .social li[class*=gplus]{background:#e34429;padding:12px 0}"+config.selector+" .social li[class*=github]{background:#fff;padding:12px 0;color:#555;}"+config.selector+" .social li[class*=github]:hover{background:#fff;padding:12px 0;color:#4183c4;}"+config.selector+" .social li[class*=pinterest]{background:#e34429;padding:12px 0;}"+config.selector+" .social li[class*=paper-plane]{background:#42c5b0;padding:12px 0}</style>"};var $;

$ = jQuery;

$.fn.share = function(opts) {
  var $body, $head;
  if ($(this).length === 0) {
    console.log("Network Button: No elements found.");
    return;
  }
  $head = $('head');
  $body = $('body');
  return $(this).each(function(i, el) {
    var $sharer, bubble, bubbles, click_link, close, config, open, parent, paths, set_opt, toggle,
      _this = this;
    $sharer = $(this);
    $sharer.addClass("sharer-" + i);
    $sharer.hide();
    if (opts == null) {
      opts = {};
    }
    config = {};
    config.text = opts.text || $('meta[name=description]').attr('content') || '';
    config.title = opts.title;
    config.image = opts.image;
    config.flyout = opts.flyout || 'top center';
    config.button_color = opts.color || '#333';
    config.button_background = opts.background || '#e1e1e1';
    config.button_icon = opts.icon || 'users';
    config.button_text = typeof opts.button_text === 'string' ? opts.button_text : 'Networks';
    set_opt = function(base, ext) {
      if (opts[base]) {
        return opts[base][ext] || config[ext];
      } else {
        return config[ext];
      }
    };
    config.github_on = opts.github_on || 'Yes';
    config.github_username = opts.github_username;
    config.twitter_on = opts.twitter_on || 'Yes';
    config.twitter_handle = opts.twitter_handle;
    config.facebook_on = opts.facebook_on || 'Yes';
    config.fb_name = opts.facebook_name;
    config.gplus_on = opts.gplus_on || 'Yes';
    config.gplus_url = opts.gplus_url;
    config.email_on = opts.email_on || 'No';
    config.email_address = opts.email_address;
    config.pinterest_on = opts.pinterest_on || 'No';
    config.pinterest_username = opts.pinterest_username;
    config.selector = "." + ($sharer.attr('class').split(" ").join("."));
    config.protocol = opts.protocol || (['http', 'https'].indexOf(window.location.href.split(':')[0]) === -1 ? 'https://' : '//');
    if (!$('link[href="https://www.sharebutton.co/fonts/entypo.css"]').length) {
      $("<link />").attr({
        rel: "stylesheet",
        href: "https://www.sharebutton.co/fonts/entypo.css"
      }).appendTo($("head"));
    }
    if (!$('link[href="' + config.protocol + 'fonts.googleapis.com/css?family=Lato:900"]').length) {
      $("<link />").attr({
        rel: "stylesheet",
        href: "" + config.protocol + "fonts.googleapis.com/css?family=Lato:900&text=" + config.button_text
      }).appendTo($("head"));
    }
    if (!$("meta[name='sharer" + config.selector + "']").length) {
      $('head').append(getStyles(config)).append("<meta name='sharer" + config.selector + "'>");
    }
    // fix me 
    var number_of_networks = $(".entypo-twitter").length;
    console.log(number_of_networks);

    // adjust width based on items turned on
    var ul_width = 0;
    if (config.github_on == 'Yes') {
      ul_width += 60;
    };
    if (config.twitter_on == 'Yes') {
    	ul_width += 60;
    };
    if (config.facebook_on == 'Yes') {
    	ul_width += 60;
    };
    if (config.gplus_on == 'Yes') {
    	ul_width += 60;
    };
    if (config.email_on == 'Yes') {
      ul_width += 60;
    };
    if (config.pinterest_on == 'Yes') {
      ul_width += 60;
    };


    // this needs to be set based on the count of services
    var margin_left = -115;

    var network_button_html = "<label class='entypo-" + config.button_icon + "'><span>" + config.button_text + "</span></label>";
    network_button_html += "<div style='margin-left: " + margin_left + "px;' class='social ";
    network_button_html += config.flyout;
    network_button_html += "'><ul style='width:" + ul_width + "px;'>";
    if (config.github_on == 'Yes') {
      network_button_html += "<li class='service entypo-github' data-network='github'></li>";
    };
    if (config.twitter_on == 'Yes') {
    	network_button_html += "<li class='service entypo-twitter' data-network='twitter'></li>";
    };
    if (config.facebook_on == 'Yes') {
    	network_button_html += "<li class='service entypo-facebook' data-network='facebook'></li>";
    };
    if (config.gplus_on == 'Yes') {
    	network_button_html += "<li class='service entypo-gplus' data-network='gplus'></li>";
    };
    if (config.email_on == 'Yes') {
      network_button_html += "<li class='service entypo-paper-plane' data-network='email'></li>";
    };
    if (config.pinterest_on == 'Yes') {
      network_button_html += "<li class='service entypo-pinterest' data-network='pinterest'></li>";
    };
    network_button_html += "</ul></div>";
    console.log(network_button_html);
    $(this).html(network_button_html);	
    paths = {
    	github: "https://github.com/" + config.github_username,
      twitter: "http://twitter.com/" + config.twitter_handle,
      facebook: "https://www.facebook.com/" + config.fb_name,
      gplus: "https://plus.google.com/" + config.gplus_url,
      email: "mailto:" + config.email_address,
      pinterest: "http:www.pinterest.com/" + config.pinterest_username
    };
    parent = $sharer.parent();
    bubbles = parent.find(".social");
    bubble = parent.find("" + config.selector + " .social");
    toggle = function(e) {
      e.stopPropagation();
      return bubble.toggleClass('active');
    };
    open = function() {
      return bubble.addClass('active');
    };
    close = function() {
      return bubble.removeClass('active');
    };
    click_link = function() {
      var link, popup;
      link = paths[$(this).data('network')];
      window.open(link);
    };
    $sharer.find('label').on('click', toggle);
    $sharer.find('li').on('click', click_link);
    $body.on('click', function() {
      return bubbles.removeClass('active');
    });
    setTimeout((function() {
      return $sharer.show();
    }), 250);
    return {
      toggle: toggle.bind(this),
      open: open.bind(this),
      close: close.bind(this),
      options: config,
      self: this
    };
  });
};
}.call(this)