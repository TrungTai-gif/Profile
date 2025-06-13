document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".fade-in");

    function checkScroll() {
      images.forEach((img, index) => {
        const rect = img.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          img.style.animationDelay = `${index * 0.2}s`; // Tạo hiệu ứng xuất hiện lần lượt
          img.classList.add("visible");
        }
      });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
  });

  document.addEventListener("DOMContentLoaded", function () {
    const nameText = "NGUYỄN TRUNG TÀI";
    const titleText = "Lập trình viên Web Developer";

    function typeEffect(element, text, speed, callback) {
      let i = 0;
      function type() {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          i++;
          setTimeout(type, speed);
        } else if (callback) {
          setTimeout(callback, 500);
        }
      }
      type();
    }

    function deleteEffect(element, speed, callback) {
      let text = element.innerHTML;
      function erase() {
        if (text.length > 0) {
          text = text.slice(0, -1);
          element.innerHTML = text;
          setTimeout(erase, speed);
        } else if (callback) {
          setTimeout(callback, 500);
        }
      }
      erase();
    }

    function startTypingLoop() {
      const nameElement = document.getElementById("typing-name");
      const titleElement = document.getElementById("typing-title");

      typeEffect(nameElement, nameText, 100, function () {
        typeEffect(titleElement, titleText, 80, function () {
          setTimeout(() => {
            deleteEffect(titleElement, 50, function () {
              deleteEffect(nameElement, 50, function () {
                setTimeout(startTypingLoop, 500);
              });
            });
          }, 1000);
        });
      });
    }

    startTypingLoop();
  });

  document.addEventListener("DOMContentLoaded", function () {
    function revealSkills() {
      document.querySelectorAll(".skill-card").forEach((card) => {
        const position = card.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (position < screenHeight * 0.85) {
          card.classList.add("visible");
        }
      });
    }

    window.addEventListener("scroll", revealSkills);
    revealSkills();
  });



  function toggleLanguageMenu(event) {
    event.preventDefault();
    let dropdown = document.getElementById("language-dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Đóng menu khi bấm ra ngoài
document.addEventListener("click", function(event) {
    let dropdown = document.getElementById("language-dropdown");
    let menu = dropdown.parentElement;
    if (!menu.contains(event.target)) {
        dropdown.style.display = "none";
    }
});

function changeLanguage(lang) {
    alert("Bạn đã chọn: " + (lang === 'vi' ? "Tiếng Việt" : "English"));
}
