const hideForWhile =function () {
  let image = document.getElementById('animatedImage');
  image.style.visibility = "hidden"
  setTimeout(function () {
    image.style.visibility = "visible";
  },1000);
}
