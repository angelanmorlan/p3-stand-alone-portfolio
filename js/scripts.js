// Scripts

var img0 = 'https://unsplash.it/600/300?image=1';
var img1 = 'https://unsplash.it/600/300?image=3';
var img1 = 'https://unsplash.it/600/300?image=7';

var maxRand = 3;
var randNum = Math.floor( Math.random() * maxRand );
console.log(randNum);
//Swap Out Banner
$('header img').attr('src', eval( 'img' + randNum ) );

$('figure').lightGallery({
    selector: 'a',
    mode: 'lg-lollipop'
});
/*$('main').tubular({
    fitToBackground: true,
    videoId: '116398560'
});*/