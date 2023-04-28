import { galleryItems } from "./gallery-items.js";
// Change code below this line

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

  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const originalImg = evt.target.dataset.source;
  const instance = basicLightbox.create(
    `
  <img src="${originalImg}" alt="" width="800" height="600"/>
`,
    {
      onShow: () => {
        document.addEventListener("keydown", closeModalOnESC);
      },
      onClose: () => {
        document.removeEventListener("keydown", closeModalOnESC);
      },
    }
  );
  instance.show();

  function closeModalOnESC(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}
