// SHOW MORE BUTTON //
const showMore = document.querySelector('.show__more');
const productsLength = document.querySelectorAll('.slider__content').length;

let items = 4;

showMore.addEventListener('click', () => {
  items += 4;
  const array = Array.from(document.querySelector('.slider__content__mobile').children);
  const visItems = array.slice(0, items);

  visItems.forEach(el => el.classList.add('is-visible'));

  if (visItems.length = productsLength) {
    showMore.style.display = 'none';
  }
});