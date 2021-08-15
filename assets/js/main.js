(function($) {

    var $window = $(window),
        $section = $('section'),
        $div = $('#nav');

    // Temps de chargement de la page.
    $window.on('load', function() {
        window.setTimeout(function() {
            $section.removeClass('is-preload');
        }, 100);
    });

    // Défilement.
    $('#nav a,.remote__button, .scrolly').scrolly({
        speed: 1500,
        offset: function() { return $div.height(); }
    });

})(jQuery);
// Carousel garba
let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 5
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})