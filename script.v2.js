const imgContainer = document.querySelector(".images");
let img = document.createElement("img");
let validImagePaths = [1, 2, 3];

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    if (validImagePaths.includes(imgPath)) {
      img.src = "./images/img-" + imgPath + ".jpg";
      console.log(img.src);
      img.style.display = "block";
      imgContainer.appendChild(img);
      setTimeout(() => {
        resolve(`img-${imgPath} showed`);
      }, 3000);
    } else {
      reject("Not valid url");
    }
  });
};

window.addEventListener("load", () => {
  createImage(1)
    .then((resolvedMsg) => {
      console.log(resolvedMsg);
      img.style.display = "none";
      return createImage(2);
    })
    .then((resolvedMsg) => {
      console.log(resolvedMsg);
      img.style.display = "none";
      return createImage(3);
    })
    .then((resolvedMsg) => {
      console.log(resolvedMsg);
      img.style.display = "none";
      return createImage(3);
    })
    .then((resolvedMsg) => {
      console.log(resolvedMsg);
      img.style.display = "none";
      return createImage(4);
    })
    .catch((reject) => console.log(reject));
});
