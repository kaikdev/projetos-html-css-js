$(document).ready(function () {
    initWheel();

    $('.btn-start-game').on('click', function () {
        $('.btn-start-game').prop('disabled', true);

        var outcome = 0;

        spinWheel(outcome);

        setTimeout(function () {
            $('.btn-start-game').prop('disabled', false);
        }, 6 * 1000);
    });
});

function initWheel() {
    var $wheel = $('.roulette-wrapper .wheel'),
    row = "";

    row += "<div class='row'>";
    row += "  <div class='card red'><img src='img/card-red.png'><\/div>";
    row += "  <div class='card blue'><img src='img/card-blue.png'><\/div>";
    row += "  <div class='card red'><img src='img/card-red.png'><\/div>";
    row += "  <div class='card blue'><img src='img/card-blue.png'><\/div>";
    row += "  <div class='card red'><img src='img/card-red.png'><\/div>";
    row += "  <div class='card blue'><img src='img/card-blue.png'><\/div>";
    row += "  <div class='card red'><img src='img/card-red.png'><\/div>";
    row += "  <div class='card yellow'><img src='img/card-yellow.png'><\/div>";
    row += "  <div class='card blue'><img src='img/card-blue.png'><\/div>";
    row += "  <div class='card red'><img src='img/card-red.png'><\/div>";
    row += "  <div class='card blue'><img src='img/card-blue.png'><\/div>";
    row += "  <div class='card red'><img src='img/card-red.png'><\/div>";
    row += "  <div class='card blue'><img src='img/card-blue.png'><\/div>";
    row += "  <div class='card red'><img src='img/card-red.png'><\/div>";
    row += "  <div class='card blue'><img src='img/card-blue.png'><\/div>";
    row += "<\/div>";

    for (var x = 0; x < 29; x++) {
        $wheel.append(row);
    }
}

function spinWheel(roll) {
    var $wheel = $('.roulette-wrapper .wheel'),
        order = [0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4],
        position = order.indexOf(roll);

    var rows = 12,
        card = 75 + 3 * 2,
        landingPosition = (rows * 15 * card) + (position * card);

    var randomize = Math.floor(Math.random() * 75) - (75 / 2);

    landingPosition = landingPosition + randomize;

    var object = {
        x: Math.floor(Math.random() * 50) / 100,
        y: Math.floor(Math.random() * 20) / 100
    };

    $wheel.css({
        'transition-timing-function': 'cubic-bezier(0,' + object.x + ',' + object.y + ',1)',
        'transition-duration': '6s',
        'transform': 'translate3d(-' + landingPosition + 'px, 0px, 0px)'
    });

    setTimeout(function () {
        $wheel.css({
            'transition-timing-function': '',
            'transition-duration': '',
        });

        var resetTo = -(position * card + randomize);
        $wheel.css('transform', 'translate3d(' + resetTo + 'px, 0px, 0px)');
    }, 6 * 1000);
}