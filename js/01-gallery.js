import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);

const instance = basicLightbox.create(`<img src="" alt=""/>`);
instance.show();
const gallery = document.querySelector(".gallery");

const images = galleryItems
  .map(
    (image) =>
      `<a class="gallery__link" href="${image.original}"><img class="gallery__image" src="${image.preview}" data-source="${image.original}" alt="${image.description}"/></a>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", images);

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  const clickedElement = event.target;
  if (clickedElement.nodeName !== "IMG") return;
  console.log(clickedElement);

  const largeImage = clickedElement.dataset.source;
  const alt = clickedElement.alt;

  const modal = instance.element();
  const modalImgage = modal.querySelector("IMG");
  console.log(modalImgage);
  modalImgage.src = largeImage;
  modalImgage.alt = alt;

  instance.show();
});

gallery.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && instance.visible()) instance.close();
});
