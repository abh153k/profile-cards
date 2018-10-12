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

    // Info card animation
    var info_tl = anime.timeline();
    info_tl.add({
        targets: ".card",
        opacity: [0,1],
        translateY:["-8px",0],
        delay: function(el,i) {
            return i*150;
        }
    }).add({
        targets: "#info h2",
        opacity: [0,1],
        delay: "-=10"
    }).add({
        targets: "#bio",
        opacity: [0,1],
        translateY: ["-4px",0],
        complete: function(){
            new TypeIt("#bio");
        }
    }).add({
        targets: ".button",
        translateY: ["3px",0],
        opacity:[0,1],
        delay: function(el,i) {
            return i*150;
        }
    })

});