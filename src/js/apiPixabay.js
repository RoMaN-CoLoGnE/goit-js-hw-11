import axios from 'axios';

export class ApiPixabay {
  #API_KEY = '34695979-61b8a2e81ce638d24e160f5b2';
  #BASE_URL = 'https://pixabay.com/api/';
  constructor() {
    this.searchValue = '';
    this.page = 1;
    this.per_page = 40;
    this.totalHits = null;
  }
  async getImages() {
    const result = await axios.get(this.#BASE_URL, {
      params: {
        key: this.#API_KEY,
        q: this.searchValue,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: this.page,
        per_page: this.per_page,
      },
    });
    return result;
  }
  setSearchValue(searchValue) {
    this.searchValue = searchValue;
  }
  setTotalHits(totalHits) {
    this.totalHits = totalHits;
  }
  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  checkLastPage() {
    return this.page === Math.ceil(this.totalHits / this.per_page);
  }
}
