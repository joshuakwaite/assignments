var write = $(".write")
var countDown = 2;
var intervalId;
    write.html(countDown +1)

function updateTime() {
    write.html(countDown --);
    if (countDown < 0)
        write.html(`<h1>The world has ended.</h1>`)
}

intervalId = setInterval(updateTime, 1000);