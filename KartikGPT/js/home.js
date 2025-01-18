let logOutBtn = document.getElementById("logOutBtn");
let welcomeUser = document.getElementById("userName");
let userName = localStorage.getItem("userName");

welcomeUser.innerHTML = `Thank you for logging into KartikGPT. We appreciate your trust in our AI platform. Please click on the link below <button id="kartikGPTBtn"> Welcome To KartikGPT</button>`;

document.getElementById("kartikGPTBtn").addEventListener("click", function() {
  window.open("index1.html", "_blank"); // Opens the site in a new tab
});

logOutBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});
