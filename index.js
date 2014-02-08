/**
 * Notify
 *
 * Copyright (c) 2014 by Hsiaoming Yang.
 */

// Because Notification is a built-in function, we use Notify instead.

var query = require('query');

function Notify(options) {
  // options contains: title, message, iconUrl, url
  var el = createElement(options);
  el.id = 'notify-' + parseInt(Math.random() * 1000000, 10);
  this.element = el;
}

Notify.prototype.show = function() {
  if (document.getElementById(this.element.id)) return;

  var container = query('.notify-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'notify-container';
    document.body.appendChild(container);
  }
  container.appendChild(this.element);
};

Notify.prototype.clear = function() {
  var el = this.element;
  el.parentNode.removeChild(el);
};

function createElement(options) {
  // div.notify-item
  //   img.notify-icon
  //   div.notify-content
  //     div.notify-title
  //     div.notify-message
  var el;
  if (options.url) {
    el = document.createElement('a');
    el.href = options.url;
    el.target = '_blank';
  } else {
    el = document.createElement('div');
  }
  el.className = 'notify-item';
  if (options.type) {
    el.className += ' ' + options.type;
  }
  var html = '';
  if (options.iconUrl) {
    html += '<img class="notify-icon" src="' + options.iconUrl + '">';
  }
  html += '<div class="notify-content">';
  if (options.title) {
    html += '<div class="notify-title">' + options.title + '</div>';
  }
  html += '<div class="notify-message">' + options.message + '</div>';
  html += '</div>';
  el.innerHTML = html;
  return el;
}


function notify(options, cb) {
  var time = options.duration || 2000;
  var item = new Notify(options);
  item.show();
  setTimeout(function() {
    item.clear();
    cb && cb();
  }, time);
}
notify.Notify = Notify;
module.exports = notify;
