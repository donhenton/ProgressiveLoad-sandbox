
let jQuery = $;

(function ($) {
  'use strict';
  /* eslint no-invalid-this: 0 */

  $.fn.createProgressiveImage = function () {
    return this.each(function () {
      this.progressiveImage = new ProgressiveImage($(this));
    });
  };

  $('document').ready(function () {

    $('.progressive-image').createProgressiveImage();
  });

  function ProgressiveImage($element) {

    // set the placeholder to the supplied width and height of the large image
    // the supplied values do not have to be the full size of the actual image
    // just have the same aspect ratio
    
   

    //load the placeholder
    console.log("in progressive image")
    var $small = $element.find('.img-small');
    var smallImg = new Image();
    smallImg.src = $small.attr('src');

    smallImg.onload = function () {
      $small.toggleClass('loaded');
      console.log('loaded the small image')
      

      //load the large Image
      var largeSrc = $element.data('large-image');
      var largeImg = new Image();
      largeImg.src = largeSrc;

      largeImg.onload = function () {
        console.log("loaded the large img")
        $(largeImg).toggleClass('loaded');
        $(largeImg).insertAfter($small);
        $small.toggleClass('loaded')

      } // end large image load

     
    } // end small image load

  }


})(jQuery);


