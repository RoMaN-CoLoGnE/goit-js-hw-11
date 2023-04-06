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
      }) => `<div class="card-wrapper">
      <div class="photo-card">
        <a class="photo-link" href="${largeImageURL}">
          <div class="photo-wrapper">
            <img
              class="photo-img"
              src="${webformatURL}"
              alt="${tags}"
              loading="lazy"
            />
          </div>
          <div class="info">
            <p class="info-item">
              <b class="info-item__styles"
                ><i class="material-icons">thumb_up</i>${likes}</b
              >
            </p>
            <p class="info-item">
              <b class="info-item__styles"
                ><i class="material-icons">visibility</i>${views}</b
              >
            </p>
            <p class="info-item">
              <b class="info-item__styles"
                ><i class="material-icons">comment</i>${comments}</b
              >
            </p>
            <p class="info-item">
              <b class="info-item__styles"
                ><i class="material-icons">download</i>${downloads}</b
              >
            </p>
          </div>
        </a>
      </div>
    </div>`
    )
    .join('');
}
