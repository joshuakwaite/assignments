var input = $(`#newItem`);
var output = $(`#todos`);

function addTodo() {
    output.prepend(`<li><button type="button" id="delete">X</button>${input.val()}</li>`)
    input.val("");
    input.focus();

    var finished = $(`#delete`);
    finished.on("click", function () {
    finished.parent().remove();

    });

}

$("#submit").on("click", addTodo);


input.keypress(function (event) {
    if (event.which === 13) {
        event.preventDefault();
        addTodo();
    }
})