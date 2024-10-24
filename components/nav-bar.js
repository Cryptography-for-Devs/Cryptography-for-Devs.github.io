document.addEventListener("DOMContentLoaded", () => {
  const navBarHTML = `
    <nav>
        <a href="${window.location.origin}" class="logo">
            <span style="font-size: 30px;">🏕️</span> Curious Cryptography
        </a>

        <button id="lesson-map-open-btn" class="btn btn-secondary">
            Lesson Map
        </button>
    </nav>
      `;

  /* Insert nav bar as body's first child */
  const body = document.querySelector("body");
  body.insertAdjacentHTML("afterbegin", navBarHTML);
});
