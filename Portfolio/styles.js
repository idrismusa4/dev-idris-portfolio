const sections = document.querySelectorAll(".section");
const sectionBtns = document.querySelectorAll(".controls");
const sectionBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function pageTransitions() {
  for (let i = 0; i < sectionBtn.length; i++) {
    sectionBtn[i].addEventListener('click', function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        'active-btn', '');
      this.className += ' active-btn';
    });
  }
  // Sections for active class
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      // Remove Active Selections from other buttons
      sectionBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
      // Check if the clicked element is a property
      if (!e.target.classList.contains("property")) {
        //hides sections
        sections.forEach((section) => {
          section.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
      }
    }
  });
  //Toggle Dark/Light
  const themeBtn=document.querySelector(".theme-button")
  themeBtn.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode")
  })

  const nameText = document.getElementById("name-text");
  const jobTitleText = document.getElementById("job-title-text");
  
  const jobTitles = ["I'm a Web Developer", "I'm also a UI/UX Designer", "and a Programmer"];
  let index = 0;
  
  // Function to update the job title and show the animation
  function updateJobTitle() {
    jobTitleText.textContent = jobTitles[index];
    jobTitleText.style.opacity = 1;
    index = (index + 1) % jobTitles.length;
    setTimeout(() => {
      jobTitleText.style.opacity = 0;
      setTimeout(updateJobTitle, 500);
    }, 2000);
  }
  
  // Start the typing effect for the name text
  const name = "Idris Shaaba";
  let i = 0;
  function type() {
    if (i < name.length) {
      nameText.textContent += name.charAt(i);
      i++;
      setTimeout(type, 250);
    } else {
      setTimeout(updateJobTitle, 1000);
    }
  }
  
  type();
  


}




pageTransitions();
