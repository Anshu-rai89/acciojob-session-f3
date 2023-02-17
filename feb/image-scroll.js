function addSlide() {
  scrolledImages.forEach((img) => {
    var scrolledHeight = window.scrollY + window.innerHeight - img.height / 2;
    var imageBottomHeight = img.offsetTop + img.height;
    var isImageHalfScrolled = scrolledHeight > img.offsetTop;

    var isImageFullyScrolled = window.scrollY > imageBottomHeight;

    if (isImageHalfScrolled && !isImageFullyScrolled) {
      img.classList.add("active");
    } else {
      img.classList.remove("active");
    }
  });
}
