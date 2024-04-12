var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Web Designer"],
  typeSpeed: 70,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

let btn = document.getElementById("btn");
let btntext = document.getElementById("btntext");
let btnicon = document.getElementById("btnicon");
 let logo = document.getElementById("logo");

btn.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    btnicon.src = "sun.png";
    btntext.innerHTML = "Light";
  } else {
    btnicon.src = "";
    btntext.innerHTML = "Dark";
  }
};

