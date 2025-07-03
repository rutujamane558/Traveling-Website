// Navigation Toggle
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  navList.classList.toggle("open");
});

// Discount Media
const video = document.querySelector(".video");
const button = document.querySelector(".video-control");

button.addEventListener("click", playpausevideo);

function playpausevideo() {
  if (video.paused) {
    button.innerHTML = "<i class='bx bx-pause' ></i>";
    video.play();
  } else {
    button.innerHTML = "<i class='bx bx-play' ></i>";
    video.pause();
  }
}

// Preloader
const loader = document.querySelector(".loader");
window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.display = "none";
  }, 2000);
});

// Fix Nav
const navigation = document.querySelector(".navigation");
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > 200) {
    navigation.classList.add("fix");
    header.style.zIndex = "1000";
  } else {
    navigation.classList.remove("fix");
  }
});

// Scroll
const links = document.querySelectorAll(".nav-link");

Array.from(links).map((link) => {
  link.addEventListener("click", (e) => {
    // Prevent Default
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navigation.getBoundingClientRect().height;
    const fix = navigation.classList.contains("fix");
    let position = element.offsetTop - navHeight;

    // if (!fix) {
    //   position = position - navHeight;
    // }

    window.scrollTo({
      left: 0,
      top: position,
    });
    navList.classList.remove("open");
  });
});

// Scroll Reveal

const scroll = ScrollReveal({
  distance: "100px",
  duration: 2500,
  reset: true,
});

scroll.reveal(`.content h1, .content .btn`, {
  origin: "top",
  interval: 100,
});

scroll.reveal(`.about .col h1, .about .col p, .about .col .btn`, {
  origin: "left",
  interval: 150,
});

scroll.reveal(
  `.about .col:last-child,.contact .location,.more .col:last-child,.newsletter .form`,
  {
    origin: "right",
  }
);

scroll.reveal(`.service img,.contact .title`, {
  origin: "top",
});

scroll.reveal(`.service .col,.trip .row`, {
  origin: "bottom",
});

scroll.reveal(`.trip .title,.more .col:first-child,.newsletter .col`, {
  origin: "left",
});

  // Modal elements
  const signupBtn = document.querySelector(".sign-up");
  const modal = document.getElementById("signupModal");
  const closeModal = document.getElementById("closeModal");
  const signupForm = document.getElementById("signupForm");

  // Show modal
  signupBtn.addEventListener("click", function (e) {
    e.preventDefault();
    modal.style.display = "block";
  });

  // Hide modal
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close modal on outside click
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Form validation
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    if (fullname === "" || email === "" || password === "") {
      alert("Please fill out all fields.");
      return;
    }

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    alert("Sign-up successful!");
    signupForm.reset();
    modal.style.display = "none";
  });
  const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", () => {
  navList.classList.remove("open");
});


