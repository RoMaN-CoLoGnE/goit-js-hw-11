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
        <b class="info-item__styles"><span class="info-item__icon">&#128402;</span> ${likes}</b>
      </p>
      <p class="info-item">
        <b class="info-item__styles"><span class="info-item__icon">&#128064;</span> ${views}</b>
      </p>
      <p class="info-item">
        <b class="info-item__styles"><span class="info-item__icon">&#128398;</span> ${comments}</b>
      </p>
      <p class="info-item">
        <b class="info-item__styles"><span class="info-item__icon">&#11123;</span> ${downloads}</b>
      </p>
    </div>
  </a>
</div>`
    )
    .join('');
}
