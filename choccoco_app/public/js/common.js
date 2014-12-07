$(function(){
    $('nav').hover(function(){
        $('nav li.hasSub').hover(function(){
            $('ul', this).slideDown();
        });
    },function(){
        $('nav li.hasSub ul').slideUp();
    });
    var current = window.location.pathname.split('/').pop();
    console.log(current);
    $('nav ul li a[href="'+current+'"]').addClass('active');
});

/*
$(function(){
    if(window.history && window.history.pushState){
        $('nav a').click(function(e){
            var nextUrl = $(this).attr('href');
            //console.log(nextUrl);
            e.preventDefault();
            changeContents(nextUrl);
            history.pushState(null, null, nextUrl);
        });

        $(window).on('popstate', function(jqEvent){
            var state = jqEvent.originalEvent.state;
            changeContents(location.pathname);
        });
        function changeContents(url){
            $('article[id="main"]').load(url+' article');
            $('link[title="v"]').attr('href' , 'css/about.css');
        }
    }
});
*/
