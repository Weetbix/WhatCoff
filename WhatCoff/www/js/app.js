var icons = [
    "icon-coffee",
    "icon-coffee-1",
    "icon-hot",
    "icon-hot-1",
    "icon-cup",
    "icon-coffee-3",
    "icon-cup-1",
    "icon-coffee-4",
    "icon-coffee-5",
    "icon-cup-2",
    "icon-hot-3",
    "icon-coffee-6",
    "icon-black",
    "icon-coffee-7",
    "icon-hot-4",
    "icon-mug",
    "icon-hot-5",
    "icon-hot-6",
    "icon-cup-3",
    "icon-coffee-8",
    "icon-kettle",
    "icon-coffee-9",
    "icon-coffee-10"
];

var coffs = [
    "Latte",
    "Flat White",
    "Cappuccino",
    "Long Mac",
    "Traditional Mac",
    "Long Mac Topped Up",
    "Mocha",
    "Espresso",
    "Double Espresso",
    "Long Black",
    "Short Black",
    "Ristretto",
];

angular.module('whatcoff', ['ionic'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }

        document.addEventListener("resume", function () {
           reset();
        }, false);

        changeBackground();
    });
})

$(document).click(function () {
    generateCoff();
});

var changeBackground = function () {
    var pattern = Trianglify({
        height: window.innerHeight,
        width: window.innerWidth,
        cell_size: 60
    });

    $(".background-pattern").html(pattern.canvas());
}

var generateCoff = function () {
    changeBackground();

    var coff = coffs[Math.floor(Math.random() * coffs.length)];
    var icon = icons[Math.floor(Math.random() * icons.length)];

    $(".coffeetext").replaceWith(
        $("<span>").addClass("coffeetext animated bounceIn").text(coff));

    $(".coffeeicon").replaceWith(
        $("<i>").addClass(icon + " coffeeicon animated bounceInDown"));

}

var reset = function()
{
    $(".coffeeicon").replaceWith("<i class=\"coffeeicon\">?</i>");
    $(".coffeetext").replaceWith(
        $("<span>").addClass("coffeetext animated bounceIn").text("What Coff?"));
}