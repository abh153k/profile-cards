function Cards() {
    this.DOM = {};
    this.cards = $(".card");
    this.stack = $("#stack");
    this.buttons = $(".button");
    this.cover = $("#cover");

    this._adjustCardHeights();
    this._init();
}

Cards.prototype._init = function() {
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

Cards.prototype._adjustCardHeights = function() {
    var heights = this.cards.map(function() {
        return $(this).height();
    }).get(),
    maxHeight = Math.max.apply(null, heights);
    this.cards.height(maxHeight);
}

Cards.prototype.bring2front = function(card_el) {
    this.currentCard = card_el;
    card_el.prepend();
}

Cards.prototype.sendTop2Back = function() {
    this.stack.find(":first-child").appendTo(this.stack);
}

// Take off!
imagesLoaded(document, function(){
    new Cards();
})