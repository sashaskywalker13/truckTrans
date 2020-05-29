import burger from '/components/burger-menu/burger-menu.js';
import achieve from '/components/achieve/achieve.js';
import form from '/components/form-send/form-send.js';
import footer from '/components/footer/footer.js';
import jquery from "jquery";

export default (window.$ = window.jQuery = jquery);
import slick from '../node_modules/slick-carousel/slick/slick.min.js';

$(document).ready(function(){
    $('.instagram__photo').slick({
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    centerPadding: '0px',
    adaptiveHeight: true
    });
  });