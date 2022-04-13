var namee = document.getElementById("name")
var age = document.getElementById("age")
var reward = document.getElementById("reward")
var image = document.getElementById("image")
var body = document.getElementById("container")
var wButton = document.getElementById("button")
var cardContainer = document.getElementById("cardContainer")

var cardName = document.getElementById("cardName")
var cardImg = document.getElementById("cardImg")
var cardReward = document.getElementById("cardReward")
var nname = namee.value
var exit = document.getElementById("exit")


wButton.onclick = () => {
    var nname = namee.value
    cardName.innerHTML = "" + nname.toUpperCase()
    cardImg.style.backgroundImage = "" + `url(${image.value})`
    cardReward.innerHTML = "" + reward.value
}




