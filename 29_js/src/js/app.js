let playList = [
    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    },
    {
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"

    }
];

let div = document.getElementById('list');

let ol = document.createElement('ol');
div.appendChild(ol);

for (var i = 0, ln = playList.length; i < ln; i++) {
    let li = document.createElement('li');
    let p = document.createElement('p');

    li.innerHTML = playList[i]['author'];
    p.innerHTML = playList[i]['song'];

    ol.appendChild(li);
    ol.appendChild(p);
}


let modal = document.getElementById('myModal');
let btn = document.getElementById('myBtn');
let close = document.getElementById("closeBtn");

btn.onclick = function () {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}



document.getElementById('redButton').onclick = illuminateRed;
document.getElementById('yellowButton').onclick = illuminateYellow;
document.getElementById('greenButton').onclick = illuminateGreen;

function illuminateRed() {
  clearLights();
  document.getElementById('redLight').style.backgroundColor = "red";

}
function illuminateYellow() {
  clearLights();
  document.getElementById('yellowLight').style.backgroundColor = "yellow";

}
function illuminateGreen() {
  clearLights();
  document.getElementById('greenLight').style.backgroundColor = "green";

}
  
function clearLights() {
  document.getElementById('redLight').style.backgroundColor = "black";
  document.getElementById('yellowLight').style.backgroundColor = "black";
  document.getElementById('greenLight').style.backgroundColor = "black";
}

