class Cards {
    constructor(){
        this.DOM = {};
        this.cards = $(".card");
        this.stack = $("#stack");
        this.buttons = $(".button");
        this.cover = $("#cover");

        this._adjustCardHeights();
        this._init();
    }

    _adjustCardHeights(){
        var heights = this.cards.map(function() {
            return $(this).height();
        }).get(),
        maxHeight = Math.max.apply(null, heights);
        this.cards.height(maxHeight);
    }

    bring2front(card_el){
        this.currentCard = card_el;
        return card_el.prepend(this.stack);
    }

    sendTop2Back() {
        this.stack.find(":first-child").appendTo(this.stack);
    }

    _init() {
        // remove loading screen
        this.cover.hide();

        var $this = this;
        this.buttons.each(function(index){
            var target_card = $(this).data("target-card");
            $this.sendTop2Back();
            $this.bring2front($(target_card));
            return false;
        })
    }
}

// Take off!
imagesLoaded(document.body, function(){
    new Cards();
})