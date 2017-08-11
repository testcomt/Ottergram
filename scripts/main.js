var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_IMAGE_TITLE = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR =  '[data-image-role="trigger"]';

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
