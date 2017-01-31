var count = (sessionStorage.getItem("count")) ? sessionStorage.getItem("count"):0;


$("#insert").html(`<h1>${count -1}</h1>`)


$("html").click(function () {
    $("#insert").html(`<h1>${count++}</h1>`)
    
    sessionStorage.setItem("count", count);
    
});