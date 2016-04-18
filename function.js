$(window).scroll(function() {

var wScroll = $(this).scrollTop();

$('.logo').css ({
  'transform' : 'translate(0px, '+ wScroll /4 +'%)'

});




//$('.fore-b').css ({
//'transform' : 'translate(0px, '+  wScroll /7 +'%)'
//});

if(wScroll > $('.haircut-pics').offset().top - ($(window).height() / 1.2)) {

   $('.haircut-pics figure').each(function(i){

     setTimeout(function(){
     $('.haircut-pics figure').eq(i).addClass('is-showing');
   }, 150 * (i+1));

   });


}

if(wScroll > $('.large-window').offset().top - $(window).height()){

  $('.large-window, .large-window-2').css({'background-position':'center '+ (-wScroll / 3) +'px'});
}

var opacity1 = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 7);
var opacity2 = (wScroll - $('.large-window').offset().top + 400 - 640) / (wScroll / 5);


$('.window-tint').css({'opacity': opacity1});
$('.window-tint-2').css({'opacity': opacity2});


//if(wScroll > $('.large-window').offset().top - $(window).height()){
  //$('.large-window').css({'background-position':'center '+ (-wScroll / 35) +'px'});
  //var opacity1 = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 6);
  //var opacity2 = (wScroll - $('.large-window').offset().top + 400 - 640) / (wScroll / 6);
//  $('.window-tint.periscope-1').css({'opacity': opacity1});
//  $('.window-tint.periscope-2').css({'opacity': opacity2});
//};




if(wScroll > $('.blog-posts').offset().top - $(window).height()){

   var offset = (Math.min(0, wScroll - $('.blog-posts').offset().top +$(window).height() - 350)).toFixed();

   $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.3) +'px)'});

   $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.3) +'px)'});

 };



});


$(function() {

$('.become').click(function() {
  $('.overlay').addClass('is-open');
  return false;
});

$('.close-btn').click(function() {
  $('.overlay').removeClass('is-open');
});

});

$(function(){

  $('.owesome-form .input-group input').focusout(function(){

    var text_val = $(this).val();

    if(text_val === "") {

      $(this).removeClass('has-value');

    } else {

     $(this).addClass('has-value');

    }

  });

});


$(function clientStuff() {

    $('.client-unit').first().addClass('active-client');
    $('.history').first().addClass('active-client');

    $('.client-unit').click(function() {

        var $this = $(this),
            $siblings = $this.parent().children(),
            position = $siblings.index($this);

        $('.history').removeClass('active-client').eq(position).addClass('active-client');


    });

});
























///
