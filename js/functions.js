imagesLoaded(document, function() { //noconflict wrapper
    // Remove cover
    $("#cover").hide();

    /* Set cards' height to the max */
    // From https://stackoverflow.com/a/35342714/450733
    var heights = $(".card").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
    $(".card").height(maxHeight);

    /* Connect Button animation */
    $(".connect-button").on("click", function(){
        var $this = $(this);
        var connect_card = $("#connect-card");
        connect_card.prepend();
        anime({
            targets: ".card:first-child",
            rotate: [0,"-15deg",0],
            translateX: [0,282,0],
            easing: 'linear',
            duration:350,
            elasticity:500,
            complete: function(){
                $(".card:first-child").css({"top":"-20px", "left": "-20px"}).appendTo("#stack");
            }
        })
    })

    // Info card animation
    var info_tl = anime.timeline();
    info_tl.add({
        targets: ".card",
        opacity: [0,1],
        translateY:["-80px",0],
        delay: function(el,i) {
            return i*150;
        }
    }).add({
        targets: "#info h2",
        opacity: [0,1],
        translateX: ["24px",0],
    }).add({
        targets: "#bio",
        opacity: [0,1],
        translateY: ["-24px",0],
    }).add({
        targets: ".button",
        translateY: ["23px",0],
        opacity:[0,1],
        delay: function(el, i) {
            return Math.sin(i*Math.PI/2);
        }
    });

});