AOS.init();

// <!------------------------------------------Animation Burger-------------------------------------------------------->

const hamburgerButton = document.querySelector(".nav-toggler");
const navigation = document.querySelector("nav");

hamburgerButton.addEventListener("click", toogleNav);

function toogleNav() {
  hamburgerButton.classList.toggle("active");
  navigation.classList.toggle("active");
}

// <!-- ----------------------------------------Type------------------------------------------------------------>

const app2 = document.getElementById("webD2");

const write2 = new Typewriter(app2, {
  loop: true,
});

write2
  .typeString("Front-end")
  .pauseFor(1500)
  .deleteAll()
  .typeString("Back-end")
  .pauseFor(1500)
  .deleteAll()
  .start();

// <!-- ----------------------------------------Modal------------------------------------------------------------>

const projet = document.querySelector("#modalProjet");
const modalContainer = document.querySelector("#modal-container");
const modalContent = document.querySelector("#modal-content");
const closeModal = document.querySelector("#close-modal");
const modalOverlay = document.querySelector("#modal-overlay");
const modalIframe = document.querySelector("#modal-iframe");

for (let projet of modalProjet) {
  projet.addEventListener("click", function (e) {
    e.preventDefault();
    const url = this.href;
    modalIframe.src = url;
    modalContainer.style.display = "block";
  });
}

closeModal.addEventListener("click", function () {
  modalIframe.src = "";
  modalContainer.style.display = "none";
});

modalOverlay.addEventListener("click", function () {
  modalIframe.src = "";
  modalContainer.style.display = "none";
});
