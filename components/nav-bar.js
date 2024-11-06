document.addEventListener("DOMContentLoaded", () => {
  const navBarHTML = `
    <nav>
        <a href="${window.location.origin}" id="logo-img-plus-text">
            <img id="logo-img" src="${window.location.origin}/our-logo.png" alt="Curious cryptography logo">
            <span>Curious Cryptography</span>
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
