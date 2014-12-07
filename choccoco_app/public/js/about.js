$(function(){
    var nextSlide = function(){
        var slideId = 0;
        return function(){
            slideId++;
            console.log(slideId);
            if(slideId > 3) slideId = 1;
            $('.slide div:nth-child('+slideId+')').fadeIn(2000);
            $('.slide div:not(:nth-child('+slideId+'))').fadeOut(2000);
        }
    }();
    setInterval(nextSlide, 6000);
});


