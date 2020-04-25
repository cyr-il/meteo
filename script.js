
/*var vid = document.getElementById("bgvid");
var pauseButton = document.querySelector("#polina button");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 


pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Pause";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Reprendre";
  }
})*/

let callBackGetSuccess = function(data) {
    console.log("donnees API", data)
    let element = document.getElementById('prevision');
    element.innerHTML = "La température actuelle pour la ville de " + data.name + " est de " + data.main.temp;
}


function buttonClickGET() {

    let queryloc = document.getElementById('queryloc').value;
    let url ="https://api.openweathermap.org/data/2.5/weather?q="+queryloc+"&appid=cf7c0d9aad040e04895c2b254bdc25c3&units=metric"
    

    $.get(url, callBackGetSuccess).done(function() {
    })
    .fail(function() {
        alert("error");
    })
    .always(function() {
    });
    }
    




















