function countCode(string) {
    var answer = 0
for (var i = 0; i < string.length; i++) {
    if (string[i] === "c" && string[i + 1] === "o" && string[i + 3] === "e") {
        answer += 1
    }
}
    console.log(answer)
}
countCode("cozedsfscore")