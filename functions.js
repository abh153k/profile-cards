document.addEventListener('DOMContentLoaded', function(e){
    // Dirty hack for now
    console.log('Loaded');
    const info_card = document.getElementById("info-card");
    document.querySelector(".card").style.height = info_card.clientHeight;
});