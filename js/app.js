var state = 0;
/* on click - use this or hover not both
$('.containerCard').on('click',function(){
  if(state == 0){

    state = 1;
    $(this).find('.front').addClass('flip-front');
    $(this).find('.back').addClass('flip-back');

  }
  else{

    state = 0;
    $(this).find('.front').removeClass('flip-front');
    $(this).find('.back').removeClass('flip-back');

  }
});*/

//on hover
$('.containerCard').hover(function(){
  if(state == 0){

    state = 1;
    $(this).find('.front').addClass('flip-front');
    $(this).find('.back').addClass('flip-back');

  }
  else{

    state = 0;
    $(this).find('.front').removeClass('flip-front');
    $(this).find('.back').removeClass('flip-back');

  }
});

//button
$('.stayFlip').on('click',function(){
  if(state == 0){

    state = 1;
    $('.front').addClass('flip-front');
    $('.back').addClass('flip-back');

  }
  else{

    state = 0;
    $('.front').removeClass('flip-front');
    $('.back').removeClass('flip-back');

  }
});
