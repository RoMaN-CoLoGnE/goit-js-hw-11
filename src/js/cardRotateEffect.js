export function setupCardRotation() {
  const cards = document.querySelectorAll('.card-wrapper');

  for (let i = 0; i < cards.length; i += 1) {
    const card = cards[i];
    card.addEventListener('mousemove', startRotate);
    card.addEventListener('mouseout', stopRotate);
  }

  function startRotate(evt) {
    const cardItem = this.querySelector('.photo-card');
    const halfHeight = cardItem.offsetHeight / 2;
    cardItem.style.transform =
      'rotateX(' +
      -(evt.offsetY - halfHeight) / 15 +
      'deg) rotateY(' +
      (evt.offsetX - halfHeight) / 15 +
      'deg)';
  }

  function stopRotate(evt) {
    const cardItem = this.querySelector('.photo-card');
    cardItem.style.transform = 'rotate(0)';
  }
}
