$(function(){
    var nextSlide = function(){
        var slideId = 0;
        return function(){
            slideId++;
            console.log(slideId);
            if(slideId > 3) slideId = 1;
            $('.slide img:nth-child('+slideId+')').fadeIn(2000);
            $('.slide img:not(:nth-child('+slideId+'))').fadeOut(2000);
        }
    }();
    setInterval(nextSlide, 4500);
});


//$('.slide img').animate({
    //left: 'toggle'
    //},{
    //'queue' : false,
    //'duration': 1000,
    //'easing':'linear'});
