document.addEventListener("DOMContentLoaded", () => {
  const navBarHTML = `
    <nav>
        <a href="${window.location.origin}" id="logo-img-plus-text" class="nav-link">
            <img id="logo-img" src="${window.location.origin}/our-logo.png" alt="Curious cryptography logo">
            <span>Curious Cryptography</span>
        </a>

        <div id="nav-links-section">
            <a href="https://github.com/Cryptography-for-Devs/Cryptography-for-Devs.github.io" target="_blank"
                class="nav-link" style="margin-right: 1.8rem; font-size: 1rem;">

                <img src="${window.location.origin}/github-svgrepo-com.svg" alt="GitHub logo" style="width: 1.5em; vertical-align: middle;">
                
                <span><u>We are open-source!</u></span>
            </a>

            <button id="lesson-map-open-btn" class="btn btn-secondary">
                All lessons
            </button>
        </div>
    </nav>
      `;

  /* Insert nav bar as body's first child */
  const body = document.querySelector("body");
  body.insertAdjacentHTML("afterbegin", navBarHTML);
});
