const imgContainer = document.querySelector(".images");
const images = [1, 2, 3];
let img = document.createElement("img");

const createImage = function (imgPath) {
  let url = "./images/img-" + imgPath + ".jpg";
  img.src = url;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (images.includes(imgPath)) {
        imgContainer.appendChild(img);
        resolve(imgPath);
      } else {
        reject("Not valid url");
      }
    }, 1000);
  });
};

// create a wait function
const waitFor = function (imagePath) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      imgContainer.removeChild(img);
      if (imagePath + 1 <= images.length) {
        let url = "./images/img-" + Number(imagePath + 1) + ".jpg";
        img.src = url;
        imgContainer.appendChild(img);
        resolve("image has been loaded");
      } else {
        reject("image is not exist");
      }
    }, 2000);
  });
};

window.addEventListener("load", () => {
  createImage(Number(prompt("enter index of image")))
    .then((resolve) => {
      return waitFor(resolve)
        .then((resolve) => console.log(resolve))
        .catch((reject) => console.log("image is  not exist"));
    })
    .catch((reject) => console.log(reject));
});
