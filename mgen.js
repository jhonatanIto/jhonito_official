function generator() {
    let chords = document.getElementById("chords")
    let happy = document.getElementById("happy")
    let sad = document.getElementById("sad")
    let chill = document.getElementById("chill")
    let angry = document.getElementById("angry")
    let result = document.getElementById("result")
    let bpm = document.getElementById("bpm")
    let gButt = document.getElementById("button")

    let progSad = ["C - Am - F - G", "C - Em - F - G", "C - Am - Dm - G", "Am - Am/G - D/F# - F"]
    let sadBpm = ["60", "80", "55", "65", "70", "75"]
    let sadBpmLength = sadBpm.length
    let sadLength = progSad.length

    let proghapp = ["F - G - A - C", "C - D - E - G", "G - A - B - D", "A - B - C# - E", "D - E - F# - A"]
    let happBpm = ["85", "100", "80", "95", "90", "110"]
    let happL = proghapp.length
    let happBpmL = happBpm.length

    let progChill = ["C#m7 - F#m7 - A - B", "A - F#m - D - E7 - A", "Am - FM7 - E", "A# - Cm - Gm - D#"]
    let chillL = progChill.length
    let chillBpm = ["60", "80", "85", "65", "70", "75"]
    let chillBpmL = chillBpm.length

    let progAngry = ["D5 - F5 - Bb5 - C5", "C - Am - Em - G", "Am - Bm/A - G/A - F/A", "B# - Gb - B# - Ab - Db"]
    let angryL = progAngry.length
    let angryBpm = ["115", "100", "120", "95", "125", "130"]
    let angryBpmL = angryBpm.length



    gButt.onclick = () => {
        if (gButt.id == "happy") {
            console.log("laruikswfghali")
            let randomhapp = Math.floor(Math.random() * happL)
            let randomBpm = Math.floor(Math.random() * happBpmL)
            chords.innerHTML = proghapp[randomhapp]
            bpm.innerHTML = happBpm[randomBpm] + "BPM"
            gButt.style.backgroundColor = "white"
            result.style.backgroundColor = "rgb(255, 237, 75)"
        }
        else if (gButt.id == "sad") {
            let randomSad = Math.floor(Math.random() * sadLength)
            let randomBpm = Math.floor(Math.random() * sadBpmLength)
            chords.innerHTML = progSad[randomSad]
            bpm.innerHTML = sadBpm[randomBpm] + "BPM"
            gButt.style.backgroundColor = "white"
            result.style.backgroundColor = "rgb(114, 205, 221)"
        }
        else if (gButt.id == "chill") {
            let randomChill = Math.floor(Math.random() * chillL)
            let randomBpm = Math.floor(Math.random() * chillBpmL)
            chords.innerHTML = progChill[randomChill]
            bpm.innerHTML = sadBpm[randomBpm] + "BPM"
            gButt.style.backgroundColor = "white"
            result.style.backgroundColor = "rgb(255, 215, 240)"
        }
        else if (gButt.id == "angry") {
            let randomAngry = Math.floor(Math.random() * angryL)
            let randomBpm = Math.floor(Math.random() * angryBpmL)
            chords.innerHTML = progAngry[randomAngry]
            bpm.innerHTML = angryBpm[randomBpm] + "BPM"
            gButt.style.backgroundColor = "white"
            result.style.backgroundColor = "rgb(216, 23, 23)"
        }

    }

    happy.onclick = () => {
        gButt.style.borderColor = "rgb(255, 237, 75)"
        gButt.style.backgroundColor = "rgb(255, 237, 75)"
        gButt.id = "" + "happy"
    }

    sad.onclick = () => {

        gButt.style.borderColor = "rgb(114, 205, 221)"
        gButt.style.backgroundColor = "rgb(114, 205, 221)"
        gButt.id = "" + "sad"
    }

    chill.onclick = () => {
        gButt.style.borderColor = "rgb(255, 215, 240)"
        gButt.style.backgroundColor = "rgb(255, 215, 240)"
        gButt.id = "sad"
        gButt.id = "" + "chill"
    }
    angry.onclick = () => {
        gButt.style.borderColor = "rgb(216, 23, 23)"
        gButt.style.backgroundColor = "rgb(216, 23, 23)"
        gButt.id = "" + "angry"
    }

}
function displayMusic() {
    let musicBut = document.getElementById("mgen")
    let displayMusic = document.getElementById("displayMusic")
    let home = document.getElementById("home")
    let mExit = document.getElementById("mExit")
    musicBut.onclick = () => {
        displayMusic.style.display = "flex"
        home.style.display = "none"
    }
    mExit.onclick = () => {
        displayMusic.style.display = "none"
        home.style.display = "flex"
    }
}
generator()
displayMusic()