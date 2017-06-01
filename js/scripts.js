// Scripts

var img0 = 'https://raw.githubusercontent.com/angelanmorlan/p3-stand-alone-portfolio/master/img/angela-chris-73.jpg';
var img1 = 'https://raw.githubusercontent.com/angelanmorlan/p3-stand-alone-portfolio/master/img/angela-chris-63.jpg';
var img2 = 'https://raw.githubusercontent.com/angelanmorlan/p3-stand-alone-portfolio/master/img/angela-chris-66.jpg';

var maxRand = 3;
var randNum = Math.floor( Math.random() * maxRand );
console.log(randNum);
//Swap Out Banner



$('figure').lightGallery({
    pager: true,
    selector: 'a',
    thumbnail: true,
    mode: 'lg-lollipop'
});
//$('.angela-gallery').tubular({
//    videoId: 'DFXzbdjOwco',
//    mute: true
//});
$('header img').attr('src', eval( 'img' + randNum ) );
$('h1').fitText(1);
    

