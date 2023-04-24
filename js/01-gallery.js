import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const galleryContent = galleryItems
  .map(
    (item) => `<li class="gallery__item">
<a class="gallery__link" href=${item.original}>
  <img
    class="gallery__image"
    src=${item.preview}
    data-source=${item.original}
    alt=${item.description}
  />
</a>
</li>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", galleryContent);

gallery.addEventListener("click", onClickImg);

function onClickImg(evt) {
  evt.preventDefault();

  const instance = basicLightbox.create(`
  <img src="" alt="" width="800" height="600"/>
`);
  instance.show();
}

instance.addEventListener("keydown", closeModalOnESC);

function closeModalOnESC(evt) {
  if (evt.code === "Escape") {
  }
}
