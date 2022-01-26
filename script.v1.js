const imgContainer = document.querySelector(".images");
let img = document.createElement("img");
let validImagePaths = [1, 2, 3];

const createImage = function (imgPath) {
  img.src = "./images/img-" + imgPath + ".jpg";
  img.style.display = "block";
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (validImagePaths.includes(imgPath)) {
        imgContainer.appendChild(img);
        resolve("img showed");
      } else {
        reject("Not valid url");
      }
    }, 1000);
  });
};

// create a wait function
const waitFor = function (second) {
  console.log("wait for 4 seconds");
  return new Promise(function (resolve) {
    setTimeout(resolve, second * 3000);
  });
};

window.addEventListener("load", () => {
  createImage(1)
    .then((resolvedMsg) => {
      console.log(resolvedMsg);
      return waitFor(2);
    })
    .then(() => {
      img.style.display = "none";
      return createImage(2);
    })
    .then((resolvedMsg) => {
      console.log(resolvedMsg);
      return waitFor(2);
    })
    .then(() => {
      img.style.display = "none";
      return createImage(3);
    })
    .then((resolvedMsg) => {
      console.log(resolvedMsg);
      return waitFor(2);
    })
    .catch((reject) => console.log(reject));
});
