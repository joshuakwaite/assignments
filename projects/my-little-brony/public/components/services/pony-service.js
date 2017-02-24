var app = angular.module("myApp")

app.service("ponyService", [function() {

    var favoritePony = [
        {
            name: "Twilight Sparkle",
            imgUrl: "http://pre02.deviantart.net/8872/th/pre/i/2012/206/7/d/twilight_sparkle_by_hankofficer-d46dfaw.png"
        },
        {
            name: "Applejack",
            imgUrl: "http://vignette4.wikia.nocookie.net/mlpfanart/images/f/ff/Applejack_3_by_xpesifeindx-d5gsde5.png/revision/latest?cb=20131015231355"
        },
        {
            name: "Fluttershy",
            imgUrl: "http://vignette2.wikia.nocookie.net/mlp-gameloft/images/6/6a/Fluttershy_Vector.png/revision/latest?cb=20141214215316"
        },
        {
            name: "Rarity",
            imgUrl: "http://1.bp.blogspot.com/-IrxWMAAa59Y/VJcwMUclj1I/AAAAAAAAAYo/WrLGJd5dc9I/s1600/Tumblr_mxzwafbm7w1s88ss5o1_1280.png"
        },
        {
            name: "Pinkie Pie",
            imgUrl: "http://vignette4.wikia.nocookie.net/mlp-gameloft/images/a/a9/Pinkie_Pie_Vector.png/revision/latest?cb=20141214220055"
        },
        {
            name: "Rainbow Dash",
            imgUrl: "http://img07.deviantart.net/5ecb/i/2012/217/5/e/rainbow_dash_has_a_cunning_plan_by_ponyengineer-d59m2wq.png"
        },
        {
            name: "Spike",
            imgUrl: "http://vignette4.wikia.nocookie.net/mugen/images/b/b7/Spike_the_Dragon.png/revision/latest?cb=20130918052802"
        }

    ]

     this.addPony = function (incoming) {
        favoritePony.push(incoming)
        return favoritePony
    }

     this.removePony = function (remove) {
        favoritePony.splice(remove, 1)
        return favoritePony
    }

     this.getPonyList = function () {
        return favoritePony
    }

     this.ponyValidator = function (incoming) {
        if (incoming.name !== undefined && incoming.username !== undefined && incoming.imgUrl !== undefined && incoming.name != string && incoming.name.length < 3) {
            addPony(incoming)
        } else {
            return "Sorry, you can't add this."
        }
    }

}])
