/**
 * Notice
 *
 * A notice message at the top of a webpage.
 *
 * Copyright (c) 2014 by Hsiaoming Yang.
 */

var query = require('query');
var events = require('event');

var COUNT = 0;

function Notice(options) {
  var el = createElement(options);
  el.id = 'notice-' + (COUNT++);
  this.el = el;
}

Notice.prototype.show = function() {
  if (document.getElementById(this.el.id)) return;

  var container = query('.notice-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'notice-container';
    document.body.appendChild(container);
  }
  container.appendChild(this.el);
};

Notice.prototype.hide = Notice.prototype.clear = function() {
  dismiss(this.el);
};

function createElement(options) {
  // div.notice-item
  //   span.notice-close
  //   div.notice-content
  var container = document.createElement('div');
  container.className = 'notice-item';
  if (options.type) {
    container.className += ' ' + options.type;
  }

  var content;
  if (options.url) {
    content = document.createElement('a');
    content.href = options.url;
    content.target = '_blank';
  } else {
    content = document.createElement('div');
  }
  content.className = 'notice-content';
  content.innerHTML = options.message;

  var close = document.createElement('span');
  close.className = 'notice-close';
  close.innerHTML = '×';

  container.appendChild(close);
  container.appendChild(content);

  events.bind(close, 'click', function(e) {
    dismiss(container);
  });
  return container;
}

function dismiss(el) {
  el.className += ' notice-dismiss';
  setTimeout(function() {
    if (el && el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }, 200);
}

function notify(options, cb) {
  if (!options) return;
  if (!options.message) {
    options = {message: options};
  }
  var time = options.duration || 4000;
  var item = new Notice(options);
  item.show();
  setTimeout(function() {
    item.clear();
    cb && cb();
  }, time);
}
notify.Notice = Notice;
module.exports = notify;
