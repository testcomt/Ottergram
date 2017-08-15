var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_IMAGE_TITLE = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR =  '[data-image-role="trigger"]';
var HIDEN_DETAIL_CLASS = 'hidden-detail';
var ESC_KEY = 27;

function setDetails(imageUrl,titleText){
  'use strict';

  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src',imageUrl);

  var detailTitle = document.querySelector(DETAIL_IMAGE_TITLE);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail){
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail){
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail){
  'use strict';
  return setDetails(imageFromThumb(thumbnail),titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb){
  'use strict';
  thumb.addEventListener('click',function(event){
    event.preventDefault();
    setDetailsFromThumb(thumb);
    showDetails();
  })
}

function getThumbnailsArray(){
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  //convert NOdelist to Array so that using methods of Array
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function hideDetails(){
  'use strict';
  document.body.classList.add(HIDEN_DETAIL_CLASS);
}

function showDetails(){
  'use strict';
  document.body.classList.remove(HIDEN_DETAIL_CLASS);
}

function addKeyPressHandler(){
  'use strict';
  document.body.addEventListener('keyup',function(event){
    event.preventDefault();
    console.log(event.keyCode);
    if(event.keyCode === ESC_KEY)
      hideDetails();
  });
}

function initailizeEvents(){
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
  addKeyPressHandler();
}

initailizeEvents();
