import { library, dom } from '@fortawesome/fontawesome-free';
import {
  faThumbsUp,
  faEye,
  faComments,
  faCircleDown,
} from '@fortawesome/fontawesome-free';

library.add(faThumbsUp, faEye, faComments, faCircleDown);
dom.watch();

export function getImagesMarkup(array) {
  return array
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<div class="photo-card">
  <a class="photo-link" href="${largeImageURL}">
      <div class="photo-wrapper">
      <img class="photo-img"
        src="${webformatURL}"
        alt="${tags}"
        loading="lazy"
      />
      </div>
    <div class="info">
      <p class="info-item">
        <b class="info-item__styles"><span class="info-item__icon">${faThumbsUp.iconName}</span> ${likes}</b>
      </p>
      <p class="info-item">
        <b class="info-item__styles"><span class="info-item__icon">${faEye.iconName}</span> ${views}</b>
      </p>
      <p class="info-item">
        <b class="info-item__styles"><span class="info-item__icon">${faComments.iconName}</span> ${comments}</b>
      </p>
      <p class="info-item">
        <b class="info-item__styles"><span class="info-item__icon">${faCircleDown.iconName}</span> ${downloads}</b>
      </p>
    </div>
  </a>
</div>`
    )
    .join('');
}
