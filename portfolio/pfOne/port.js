var html = $(`#html`);
var css = $(`#css`);
var js = $(`#js`);
var angular = $(`#angular`);
var django = $(`#django`);
var nodejs = $(`#nodejs`);
var git = $(`#git`);



html.on("click", function () {
    $(`.collapse`).collapse(`hide`)({
        toggle: false
    })
});

css.on("click", function () {
    $(`.collapse`).collapse(`hide`)({
        toggle: false
    })
});

js.on("click", function () {
    $(`.collapse`).collapse(`hide`)({
        toggle: false
    })
});

angular.on("click", function () {
    $(`.collapse`).collapse(`hide`)({
        toggle: false
    })
});

django.on("click", function () {
    $(`.collapse`).collapse(`hide`)({
        toggle: false
    })
});

nodejs.on("click", function () {
    $(`.collapse`).collapse(`hide`)({
        toggle: false
    })
});

git.on("click", function () {
    $(`.collapse`).collapse(`hide`)({
        toggle: false
    })
});

$(window).bind('resize', function(event) {      
    var w = $(window).width();
    if (w < 768) {
         $(`.collapse`).collapse(`hide`)({
        toggle: false
    })
    }

});


        