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

    /* Navigate stack by clicking on buttons */
    $(".button").each(function(index){
        var $this = this;
        $(this).on('click', function(e){
            var target_card = $(this).data("target-card");
            // if the target is the last child,
            // then animate all but the last card
            // else only animate the first child
            var anime_targets = ($(target_card).is(".card:last-child")) ? ".card:not(:last-child)" : ".card:first-child";
            var tl = new anime.timeline();
            tl.add({
                targets: anime_targets,
                translateX: [0,282],
                rotate: [0,"30deg"],
                easing: 'linear',
                duration:150,
                complete: function(){
                    // send top to back
                    if($(target_card).is(".card:last-child")){ // if the target is the last card
                        $(".card:not(:last-child)").appendTo("#stack"); // then append all but last card at the end
                    } else { // if not the last child
                        $(".card:first-child").appendTo("#stack");
                    }
                }
            }).add({
                targets: anime_targets,
                translateX: [282,0],
                rotate:["30deg",0],
                easing: "linear",
                duration: 150
            });
        });
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
        scale: [0,1],
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


    $('input, textarea').focus(function(){
        $(this).parents('.form-group').addClass('focused');
    });

    $('input, textarea').blur(function(){
        var inputValue = $(this).val();
        if ( inputValue == "" ) {
            $(this).removeClass('filled');
            $(this).parents('.form-group').removeClass('focused');
        } else {
            $(this).addClass('filled');
        }
    })

});
