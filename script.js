console.log("welcome to Spotify")

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Piya O Re Oiya", filePath: "1.mp3", coverPath: "cover_page1.jpg" },
    { songName: "Besabriyaan", filePath: "2.mp3", coverPath: "cover_page1.jpg" },
    { songName: "Bheegi Si Bheegi Si", filePath: "3.mp3", coverPath: "cover_page1.jpg" },
    { songName: "Dhadak", filePath: "4.mp3", coverPath: "cover_page1.jpg" },
    { songName: "Dil Chori sada", filePath: "5.mp3", coverPath: "cover_page1.jpg" },
    { songName: "Gerua", filePath: "6.mp3", coverPath: "cover_page1.jpg" },
    { songName: "Itna Thume", filePath: "7.mp3", coverPath: "cover_page1.jpg" },
    { songName: "Thume Apna Banane ki", filePath: "8.mp3", coverPath: "cover_page1.jpg" },
    { songName: "Aaj Se Teri", filePath: "9.mp3", coverPath: "cover_page1.jpg" },
    { songName: "Ae Dil Hai Mushkil", filePath: "10.mp3", coverPath: "cover_page1.jpg" }
]

//for handling the image of each songs
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// audioElement.play();

//Handle play/Pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seeker 
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

//update music seeker

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement
        .duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    } else {
        songIndex -= 1;
    }
    audioElement.src = `${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
