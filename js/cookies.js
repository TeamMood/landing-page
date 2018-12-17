var params = window.location.search;


if (params && params !== '') {
    document.cookie = "params="+ encodeURIComponent(params)+";domain=.teammood.com;path=/";
}


$( document ).ready(function() {

    // pass UTMs to all links
    $('a').each(function(i, el){
        $(this).attr({
            href: $(this).attr("href") + window.location.search
        });
    });

});



