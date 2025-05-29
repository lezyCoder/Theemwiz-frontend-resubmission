
// Gsap for animations
 gsap.registerPlugin(ScrollTrigger);

  // Animate each leftContainer independently
  gsap.utils.toArray(".leftContainer").forEach((elem) => {
    gsap.from(elem, {
      scrollTrigger: {
        trigger: elem,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      x: -100,
      opacity: 0,
      duration: 2,
      ease: "power4.out",
    });
  });

  // Animate each rightContainer independently
  gsap.utils.toArray(".rightContainer").forEach((elem) => {
    gsap.from(elem, {
      scrollTrigger: {
        trigger: elem,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      x: 100,
      opacity: 0,
      duration: 2,
      ease: "power4.out",
    });
  });

  //  GSAP animation for the navigation bar
    document.addEventListener("DOMContentLoaded", () => {
    // Animate the main nav container from the top
    gsap.from("header nav", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });

    // Animate the nav links (desktop)
    gsap.from("header nav .lg\\:flex a", {
      y: -50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.5,
      ease: "power2.out"
    });

    // Animate the mobile button (hamburger)
    gsap.from("#mobile-menu-open", {
      y: -30,
      opacity: 0,
      delay: 0.4,
      duration: 0.5,
      ease: "power2.out"
    });

    // Animate the logo
    gsap.from("header nav img", {
      y: -30,
      opacity: 0,
      delay: 0.3,
      duration: 0.6,
      ease: "power2.out"
    });
  });






// Responsive Navbar
document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("mobile-menu-open");
  const closeBtn = document.getElementById("mobile-menu-close");
  const menu = document.getElementById("mobile-menu");

  openBtn.addEventListener("click", () => {
    menu.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.add("hidden");
  });
});

// Form Validation
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  // Convert to object for easier logging
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  console.log(data); // for debugging

  // Validation
  const email = form.querySelector('input[type="email"]').value.trim();
  const subject = form.querySelector('input[name="subject"]').value.trim();
  const message = form.querySelector("textarea").value.trim();

  if (!email || !subject || !message) {
    alert("Please fill in all fields.");
    return;
  }

  // Proceed with further processing (e.g. AJAX submission)
  alert("Form submitted successfully!");
});

// Explore more
const exploreMoreBtn = document.getElementById("exploreMore");
const moreContent = document.getElementById("moreContent");

exploreMoreBtn.addEventListener("click", function () {
  // Only toggle on mobile (screen width <= 640px)
  if (window.innerWidth <= 640) {
    if (moreContent.classList.contains("hidden")) {
      moreContent.classList.remove("hidden");
      moreContent.classList.add("block");
      exploreMoreBtn.textContent = "Show Less";
    } else {
      moreContent.classList.remove("block");
      moreContent.classList.add("hidden");
      exploreMoreBtn.textContent = "Explore More";
    }
  }
});


// Accordian  section
document.addEventListener("DOMContentLoaded", function () {
  const headers = document.querySelectorAll(".heading");

  headers.forEach((header) => {
    header.addEventListener("click", () => {
      // Set all headers' parent background to default before toggling
      headers.forEach((h) => {
        h.parentElement.style.backgroundColor = "var(--secondaryBgColor)";
      });

      // If opening, set parent background to white
      if (header.nextElementSibling.classList.contains("hidden")) {
        header.parentElement.style.backgroundColor = "#fff";
      }
      const body = header.nextElementSibling;
      const arrow = header.querySelector(".dropdown-arrow");

      // Toggle current section
      body.classList.toggle("hidden");
      arrow.classList.toggle("rotate-180");

      // add styling to the section


      Object.assign(body.style, {
        backgroundColor: "var(--primaryTextColor)",
        width: "100%",
        height: "auto",
        padding: "1rem",
        margin: "0.8rem 0",
      });
    });
  });
});

// filter and sort
const filterButtons = document.getElementById("filter");

filterButtons.addEventListener("click", function (e) {
  const dialogueBox = document.getElementById("filterDialogueBox");
  dialogueBox.classList.toggle("hidden");
  if (!dialogueBox.classList.contains("hidden")) {
    dialogueBox.style.display = "block";
  } else {
    dialogueBox.style.display = "none";
  }
  e.stopPropagation();
});

const closerFilter = document.getElementById("close-filter");

closerFilter.addEventListener("click", function () {
  // Hide the dialogue box when the close button is clicked
  console.log("Close button clicked");
  const dialogueBox = document.getElementById("filterDialogueBox");
  dialogueBox.style.display = "none";
});
