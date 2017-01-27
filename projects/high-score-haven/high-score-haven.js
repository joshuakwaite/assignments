

function submit() {
    var trashTalk = ["Somone grab the marshmallows... cuz I'm on FIRE!!", "Man my back hurts... from carryin' my team!", "You suck.", "They call me the bus driver... because I take kids to school!", "You'll have better luck trying to score with your sister.", "No fly zone!", "You've been CHUCK NORRISED!", "Your mom's a terrible cook.", "Don't bring that cool aid to a gin party.", "Thank you Mario, but the princess is in another castle!", "You're an inspiration for birth control."]
   var name = $(`[name="name"]`).val();
   var game = $(`[name="game"]`).val();
   var date = $(`[name="date"]`).val();
   var highScore = $(`[name="highScore"]`).val();
   var message = document.getElementById("form1").elements.message.value;
    
function trash() {
    if (message === "yes") {
      return trashTalk[Math.floor(Math.random() * trashTalk.length)]  
    } else {
        return ""
    }
}
    if (!highScore) {
        alert("Please enter a valid highscore.")
        window.reload();
    }
    
    $("#tbody").append(`
<tr>
<td>${name}
</td>
<td>${game}
</td>
<td>${date}
</td>
<td>${highScore}
</td>
<td>${trash()}
</td>
</tr>
`)
   console.log(message)
}

$("#button").on("click",submit);

