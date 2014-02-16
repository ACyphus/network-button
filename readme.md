Network
=====
Simple, light, flexible, and good-looking network button jquery plugin. This is a fork of Carrot's share-button repo. Mad props to Carrot for most of the work.

<p align="center"><img src="http://i.imgur.com/YhRtL0y.png" /></p>

### Why Should You Use This?

1. It doesn't load any iframes or extra javascript and overall load time is tons faster.
2. It looks simple and clean by default, and can be customized in any and every way.
4. It's tiny and compact, expanding only when the user actually wants to share something.

### Setup

1. Download the network.js script and include it on your page.
2. Make an empty div on your page
3. In your javascript, call `$('.element').share()`
4. Pass options to the share call
5. Profit!

### Options

You can pass an options object when you call `share` on an element to make things a little more flexible.

**github_on**: Yes/No for turning on GitHub network, _default: Yes_  
**github_username**: Your GitHub username_   
**twitter_on**: Yes/No for turning on Twitter network, _default: Yes_  
**twitter_handle**: Your Twitter handle (not including @)_   
**facebook_on**: Yes/No for turning on Facebook network, _default: Yes_  
**facebook_name**: Your Facebook name_   
**gplus_on**: Yes/No for turning on Google+ network, _default: Yes_  
**gplus_url**: Your Google+ URL, either default or custom_   
**email_on**: Yes/No for turning on Email option, _default: No_  
**email_address**: Your Email Address_   
**pinterest_on**: Yes/No for turning on the Pinterest network, _default: No_   
**pinterest_username**: Your Pinterest username_   
**background**: background color of the button, _default: `#e1e1e1`_    
**color**: text color of the button, _default: '#333'_    
**icon**: change the icon to the left. choose from [this set](http://weloveiconfonts.com/#entypo), _default: `export`_    
**button_text**: change the text of the button, _default: `Share`_    
**flyout**: change the flyout direction of the shares. chose from `top left`, `top center`, `top right`, `bottom left`, `bottom right`, or `bottom center`. _default: `top center`_

**Example:**

```js
$('.element').share({
  github_on: 'Yes',
  github_username: 'ACyphus',
  twitter_on: 'Yes',
  twitter_handle: 'ACyphus',
  facebook_on: 'Yes',
  facebook_name: 'alex.cyphus',
  gplus_on: 'Yes',
  gplus_url: 'u/0/108179636003877784457/posts',
  email_on: 'Yes',
  email_address: 'alex@alexcyphus.co.uk'
})
```

### Public API

The share button also returns a small api that can be used to control it down the line if you need to. Example shown below:

```js
var share = $('.el').share();

share.toggle(); // toggles the share button popup
share.open();   // open the share button popup
share.close();  // closes the share button popup
share.options;  // exposes the options listed above, can not currently be changed interactively
share.self;     // returns an instance of the jquery object it was called on (for chaining)

```

This will likely become more powerful down the line as this project continues to be developed - open an issue if there's anything you wish the api would have.

### Inspiration

This project was inspired [Carrot's share-button](https://github.com/carrot/share-button) which in turn was inspired by [this dribbble shot](http://dribbble.com/shots/1072278) and [this cssdeck experiment](http://cssdeck.com/labs/css-social-share-button) - huge props to these two guys for some incredible ideas and work.

### Contributing and License

- Contributing Guidelines can be found [here](contributing.md)
- Licenced under MIT - [details here](license.md)
