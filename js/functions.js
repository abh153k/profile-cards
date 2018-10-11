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

    // Baffle
    baffle(".obfus", {
        characters: "10101",
        speed: 45
    }).reveal(1500);

});