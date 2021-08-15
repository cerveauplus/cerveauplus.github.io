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