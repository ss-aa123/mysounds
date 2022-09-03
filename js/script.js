const myMusicList = [
    "Drive Slow - Kanye West",
    "The Message - Nas",
    "Pound Cake - Drake ft Jay Z",
    "Echoes of Silence - The Weeknd",
    "Song Cry - Jay Z",
    "Teardrops on my Guitar - Taylow Swift",
    "Rebel - Shenseea",
    "Back at One - Brian Mcknight",
    "N.Y. State of Mind - Nas",
    "Redemption - Drake"
];

const mixList = document.querySelector(".my-songs") //accessing everything within the ul element in html doc
const button = document.querySelector(".show-list")
const total = document.querySelector(".text")   //referencing that p text class from html doc

//create the remove/hide functionality when clicking the button. so when the music appears, the button dissapears
button.addEventListener("click", function() {
    mySongs(myMusicList)
    mixList.classList.remove("hide")    //accessing that hide from that ul portion in html doc
    button.classList.add("hide")
});


//creating that subheading that says 'my current top 10 songs'
total.innerText = `My current top ${myMusicList.length} songs 🎶`       //basically adding text to that p class by adding a template literal string    //use windows +semicolon for emojis to show up


//function that turns the array into html lists elements
const mySongs = function (songs) {
    //this is how we are able to access each string in the list we made. (They will be accessed as individuals and index will count what it's index it is)
    songs.forEach(function (song, index){
        let li = document.createElement("li")   //li is list element
        li.classList.add("song")    //adding a classname of 'song' to each individual list item
        li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`

        mixList.append(li)  //makes sure elements are appearing one after another like they should
    })

}