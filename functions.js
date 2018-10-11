jQuery(document).ready(function($) { //noconflict wrapper
    /* Set cards' height to the max */
    // From https://stackoverflow.com/a/35342714/450733
    var heights = $(".card").map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
    $(".card").height(maxHeight);

});