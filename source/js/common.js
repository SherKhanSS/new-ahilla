"use strict";

// бургер меню

const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

// подменю

const listItems = document.querySelectorAll('.site-list__sub-menu');
const testLists = document.querySelectorAll('.sub-menu');
const testSvg = document.querySelectorAll('.site-list__img');

const addListMouseoverListener = function (item, list, svg) {
  item.addEventListener('mouseover', function () {
      list.classList.add('sub-menu--activ');
      svg.classList.add('site-list__img--activ');
    });
};

const addListMouseoutListener = function (item, list, svg) {
  item.addEventListener('mouseout', function () {
      list.classList.remove('sub-menu--activ');
      svg.classList.remove('site-list__img--activ');
    });
};

const addListClickListener = function (svg, list) {
  svg.addEventListener('click', function () {
      list.classList.toggle('sub-menu--activ');
      svg.classList.toggle('site-list__img--activ');
    });
};

for (let i = 0; i < listItems.length; i++) {
  let item = listItems[i];
  let list = testLists[i];
  let svg = testSvg[i];
  addListMouseoverListener(item, list, svg);
  addListMouseoutListener(item, list, svg);
  addListClickListener(svg, list);
}

// бургер кнопки найти

const search = document.querySelector('.search');
const searchToggle = document.querySelector('.search-toggle');

search.classList.remove('main-nav--nojs');

searchToggle.addEventListener('click', function() {
  if (search.classList.contains('search--closed')) {
    search.classList.remove('search--closed');
    search.classList.add('search--opened');
  } else {
    search.classList.add('search--closed');
    search.classList.remove('search--opened');
  }
});

// архив в баре

(function() {
	let dropown = document.getElementById( 'archives' );
	function onSelectChange() {
		if ( dropown.options[
			dropown.selectedIndex ].value !== '' ) {
			document.location.href =
			this.options[ this.selectedIndex ].value;
		}
	}
	dropown.onchange = onSelectChange;
})();

// для фото

// let bLazy = new Blazy({
//   breakpoints: [{
// width: 700 // Max-width
//     , src: 'data-src-small'
// }]
// , success: function(element){
// setTimeout(function(){
// let parent = element.parentNode;
// parent.className = parent.className.replace(/\bloading\b/,'');
// }, 200);
//   }
// });


// let bLazy = new Blazy({
//   success: function(){
//     updateCounter();
//   }
// });

// let imageLoaded = 0;
// let eleCountLoadedImages = document.getElementById('loaded-images');

// function updateCounter() {
//   imageLoaded++;
//   eleCountLoadedImages.innerHTML = imageLoaded;
// }
