// Scripts

var img0 = 'https://raw.githubusercontent.com/angelanmorlan/p3-stand-alone-portfolio/master/img/Angela%20Chris-73.jpg';
var img1 = 'https://raw.githubusercontent.com/angelanmorlan/p3-stand-alone-portfolio/master/img/Angela%20Chris-63.jpg';
var img2 = 'https://raw.githubusercontent.com/angelanmorlan/p3-stand-alone-portfolio/master/img/Angela%20Chris-66.jpg';

var maxRand = 3;
var randNum = Math.floor( Math.random() * maxRand );
console.log(randNum);
//Swap Out Banner


$(document).ready(function(){
    $('#lightgallery').lightGallery({
        pager: true,
        selector: 'a',
        mode: 'lg-lollipop'
    });
    $('.angela-gallery').tubular({
        videoId: 'DFXzbdjOwco',
        mute: true
    });
    $('header img').attr('src', eval( 'img' + randNum ) );
    $('h1').fitText(2);
    $('figcaption').fitText(2.5);
});
