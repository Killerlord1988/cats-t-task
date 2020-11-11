'use strict';

let sortPrice = document.querySelector('.catalog__sort-btn--price');
let sortAge = document.querySelector('.catalog__sort-btn--age');

const catalog = document.querySelector('.catalog__items-wrapper');

let cats = [{
    name: 'Кот полосатый',
    photo: '1',
    color: 'Коричневый окрас',
    age: '2 мес.',
    legs: 4,
    price: '30 000',
    discount: true,
    favorites: false,
    soldOut: false,
  },
  {
    name: 'Кот полосатый',
    photo: '2',
    color: 'Коричневый окрас',
    age: '2 мес.',
    legs: 4,
    price: '40 000',
    discount: false,
    favorites: true,
    soldOut: true,
  },
  {
    name: 'Кот полосатый',
    photo: '3',
    color: 'Коричневый окрас',
    age: '2 мес.',
    legs: 4,
    price: '20 000',
    discount: false,
    favorites: false,
    soldOut: false,
  },
  {
    name: 'Кот полосатый',
    photo: '1',
    color: 'Коричневый окрас',
    age: '2 мес.',
    legs: 4,
    price: '25 000',
    discount: false,
    favorites: false,
    soldOut: false,
  },
  {
    name: 'Кот полосатый',
    photo: '3',
    color: 'Коричневый окрас',
    age: '2 мес.',
    legs: 4,
    price: '30 000',
    discount: true,
    favorites: false,
    soldOut: false,
  },
  {
    name: 'Кот полосатый',
    photo: '2',
    color: 'Коричневый окрас',
    age: '2 мес.',
    legs: 4,
    price: '10 000',
    discount: false,
    favorites: true,
    soldOut: true,
  },
]

function clearBox(el) {
  el.innerHTML = "";
}

clearBox(catalog);

function renderItems() {
  let itemsList = ''
  cats.forEach((item, i) => {
    itemsList += `
        <article class="catalog__item ${item.discount ? 'catalog__item-discount' : ''}">
      <div class="catalog__photo ${item.favorites ? 'catalog__photo-like' : ''}">
        <picture>
          <source type="image/webp" srcset="img/cat${item.photo}@1x.webp 1x, img/cat${item.photo}@2x.webp 2x">
          <img class="catalog__photo-img" src="img/cat${item.photo}@1x.jpg" srcset="img/cat${item.photo}@2x.jpg 2x" alt="Кот ${item.photo}" width="380" height="264">
        </picture>
      </div>
      <div class="catalog__description">
        <h2 class="catalog__description-title">${item.name}</h2>
        <div class="catalog__description-about">
          <p class="catalog__description-color">${item.color}</p>
          <p class="catalog__description-age">${item.age}<br><span class="catalog__description-age-about">Возраст</span>
          </p>
          <p class="catalog__description-legs">${item.legs}<br><span class="catalog__description-legs-about">Кол-во лап</span>
          </p>
        </div>
        <p class="catalog__price">${item.price} руб.</p>
      </div>
      <button class="catalog__buy ${item.soldOut ? 'catalog__sold-out' : ''}">${item.soldOut ? 'Продан' : 'Купить'}</button>
    </article>
    `
    catalog.innerHTML = itemsList
  });
}

renderItems();
