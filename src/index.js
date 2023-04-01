import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import Notiflix from 'notiflix';
import { ApiPixabay } from './js/apiPixabay';
import { getNormalizedImages } from './js/utils';
import { getImagesMarkup } from './js/markupService';

const galleryRef = document.querySelector('.gallery');
const formRef = document.querySelector('.search-form');
const loadMoreBtnRef = document.querySelector('.load-more');

loadMoreBtnRef.addEventListener('click', onLoadMoreBtnClick);
formRef.addEventListener('submit', onFormSubmit);

const apiPixabay = new ApiPixabay();

loadMoreBtnHidden();

const simplelightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
});

async function onFormSubmit(evt) {
  evt.preventDefault();
  const value = evt.target.elements.searchQuery.value.trim();

  if (!value) {
    return Notiflix.Notify.info('Please input your request!');
  }
  apiPixabay.resetPage();
  apiPixabay.setSearchValue(value);
  try {
    const {
      data: { hits, totalHits },
    } = await apiPixabay.getImages();
    if (!hits.length) {
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      loadMoreBtnHidden();
      galleryRef.innerHTML = '';
      return;
    }
    apiPixabay.setTotalHits(totalHits);
    Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
    const markup = getImagesMarkup(getNormalizedImages(hits));
    galleryRef.innerHTML = markup;
    simplelightbox.refresh();
    apiPixabay.checkLastPage() ? loadMoreBtnHidden() : loadMoreBtnShow();
  } catch (error) {
    console.log(error.message);
  }
}

async function onLoadMoreBtnClick(evt) {
  apiPixabay.incrementPage();
  try {
    const {
      data: { hits, totalHits },
    } = await apiPixabay.getImages();
    const markup = getImagesMarkup(getNormalizedImages(hits));
    galleryRef.insertAdjacentHTML('beforeend', markup);
    simplelightbox.refresh();
    onScrollPage();
    apiPixabay.checkLastPage() ? loadMoreBtnHidden() : loadMoreBtnShow();
  } catch (error) {
    console.log(error.message);
  }
}

function loadMoreBtnHidden() {
  loadMoreBtnRef.style.display = 'none';
}
function loadMoreBtnShow() {
  loadMoreBtnRef.style.display = 'block';
}

function onScrollPage() {
  const { height: cardHeight } = document
    .querySelector('.gallery')
    .firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
