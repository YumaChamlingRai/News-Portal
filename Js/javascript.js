var images = ['Img/marutiad.jpg', 'Img/marutid1.jpg'];
var x = 0;
var imgs = document.querySelectorAll('.slide');
setInterval(slider, 2000);

function slider() {
    if (x < images.length) {
        x = x + 1;
    } else {
        x = 1;
    }
    imgs[0].src = images[x - 1];
}