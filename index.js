'use strict';

let Html = function (tag) {
  let el = document.createElement(tag);

  return {
    get node() {
      return el;
    },

    appendChild: function (node) {
      el.appendChild(node);

      return this;
    },

    setAttribute: function (attribute, value) {
      el[attribute] = value;

      return this;
    },

    setClass: function (cls) {
      el.className = cls;

      return this;
    },
  };
};

window.addEventListener('load', () => {
  console.log("drafting.js loaded");

  let siteTitle = Html('h1')
    .setAttribute('innerHTML', 'Drafting');

  let siteSubtitle = Html('h3')
    .setAttribute('innerHTML', '一個 html/css/node.js 的練習專案');

  let siteBanner = Html('header')
    .setClass('site-banner')
    .appendChild(siteTitle.node)
    .appendChild(siteSubtitle.node);

  let siteStatus = Html('header')
    .setClass('site-status')
    .setAttribute(
      'innerHTML',
      '<span>x:<span id="cursor-x">0</span>y:<span id="cursor-y">0</span>'
    );
   // 名子
   let N4 = Html('input')
   .setClass('input')
   .setAttribute('innerHTML', 'name')
   .setAttribute('placeholder','黃子祿')
   .setAttribute('id','name')
   .setAttribute('type','text');

 let N3 = Html('p')
   .setClass('control')
   .appendChild(N4.node);

 let N2 = Html('label')
   .setClass('control-label')
   .setAttribute('innerHTML', '姓名(Name)')
   .setAttribute('htmlFor','name');

 let N1 = Html('div')
   .setClass('h-field')
   .appendChild(N2.node)
   .appendChild(N3.node);

 // 血量
 let blood4 = Html('input')
   .setClass('input')
   .setAttribute('innerHTML', 'blood')
   .setAttribute('placeholder','9999')
   .setAttribute('id','blood')
   .setAttribute('type','number');

 let blood3 = Html('p')
   .setClass('control')
   .appendChild(blood4.node);

 let blood2 = Html('label')
   .setClass('control-label')
   .setAttribute('innerHTML', '血量(blood)')
   .setAttribute('htmlFor','blood');

 let blood1 = Html('div')
   .setClass('h-field')
   .appendChild(blood2.node)
   .appendChild(blood3.node);

 // 攻擊力
 let attack4 = Html('input')
   .setClass('input')
   .setAttribute('innerHTML', 'attack')
   .setAttribute('placeholder','1000')
   .setAttribute('id','attack')
   .setAttribute('type','number');

 let attack3 = Html('p')
   .setClass('control')
   .appendChild(attack4.node);

 let attack2 = Html('label')
   .setClass('control-label')
   .setAttribute('innerHTML', '攻擊力(attack)')
   .setAttribute('htmlFor','attack');

 let attack1 = Html('div')
   .setClass('h-field')
   .appendChild(attack2.node)
   .appendChild(attack3.node);

 // 防禦力
 let  Defense4 = Html('input')
   .setClass('input')
   .setAttribute('innerHTML', 'Defense')
   .setAttribute('placeholder','10')
   .setAttribute('id','Defense')
   .setAttribute('type','number');

 let Defense3 = Html('p')
   .setClass('control')
   .appendChild(Defense4.node);

 let Defense2 = Html('label')
   .setClass('control-label')
   .setAttribute('innerHTML', '防禦力(Defense)')
   .setAttribute('htmlFor','Defense');

 let Defense1 = Html('div')
   .setClass('h-field')
   .appendChild(Defense2.node)
   .appendChild(Defense3.node);


  let siteBody = Html('article')
    .setClass('site-body')
    .appendChild(siteStatus.node);

    let main = Html('div')
    .setClass('pane')
    .appendChild(N1.node)
    .appendChild(blood1.node)
    .appendChild(attack1.node)
    .appendChild(Defense1.node);

  let copyright = Html('small')
    .setClass('float-right')
    .setAttribute(
      'innerHTML',
      '&copy; Copyright 2020，佛光大學資訊應用學系'
    );

  let siteFooter = Html('footer')
    .setClass('site-footer')
    .appendChild(copyright.node);

  let siteContainer = Html('div')
    .setClass('site-container')
    .appendChild(siteBanner.node)
    .appendChild(siteBody.node)
    .appendChild(siteFooter.node);

  document.body.appendChild(siteContainer.node);

  // 準備承載 *網頁標題* (title) 的 HTML 元素
  let cardTitle = Html('span')
    .setAttribute('textContent', 'Drafting!');

  // 準備承載 *網頁版頭* (header) 的 HTML 元素
  let cardHeader = Html('header')
    .setClass('card-header')
    .appendChild(cardTitle.node); // 將 *網頁標題* 放上 *網頁版頭*

  // 準備承載 *網頁內容* 的 HTML 元素
  let cardContent = Html('article')
    .setClass('card-content')
    .appendChild(main.node);

  // 準備 *網頁桌面* 的 HTML 元素
  let cardDesktop = Html('section')
    .setClass('card')
    .appendChild(cardHeader.node)   // 將 *網頁版頭* 放上 *網頁桌面*
    .appendChild(cardContent.node); // 將 *網頁內容* 放上 *網頁桌面*

  // 將 *網頁桌面* 放上 *網頁*
  let desktop = document
    .querySelector('.site-body')
    .appendChild(cardDesktop.node);

  /**
   * 滑鼠游標移動追踪
   *
   * @callback
   * @param 'mousemove' : DOM 事件名
   * @param e : DOM event 物件
   * @returns {undefined}
   */
  desktop.addEventListener('mousemove', (e) => {
    document.getElementById('cursor-x').textContent = e.clientX;
    document.getElementById('cursor-y').textContent = e.clientY;
  });
});
