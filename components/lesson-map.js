document.addEventListener("DOMContentLoaded", () => {
  const lessonMapDrawerHTML = `
    <div id="lesson-map-drawer">
      <h2>
        🧭 Lesson Map
        <button id="lesson-map-close-btn">&times;</button>
      </h2>
      <ol start="0">
        <li><a href="${window.location.origin}/0-before-we-start">Before we start! (Do not skip this)</a></li>

        <div class="separator"></div>

        <li><a href="${window.location.origin}/1-symmetric-key-encryption">The story of stycales</a></li>
        <li><a href="${window.location.origin}/2-caesar-challenge">Challenge: Caesar of Rome</a></li>
        <li><a href="${window.location.origin}/3-the-hash">The hashes</a></li>
        <li><a href="${window.location.origin}/4-revealed-passwords">Revealed passwords</a></li>
        <li><a href="${window.location.origin}/5-rainbows-and-salts">Rainbows and salts</a></li>
        <li><a href="${window.location.origin}/6-slow-them-down">Slow them down</a></li>

        <p class="info-alert" id="upcoming-lessons-map-info">We are working hard on the upcoming lessons, please <a href="${window.location.origin}/our-community">join our email or slack community</a> to stay in touch with our future happenings!</p>

        <div class="separator"></div>

        <div id="upcoming-lessons">
            <li>The Diffie-Hellman key exchange</li>
            <li>RSA public-key encryption</li>
            <li>Challenge: End to end encryption</li>
            <li>The TLS story</li>
            <li>Certificate authorities rule!</li>
            <li>Project: Finale.</li>

            <div class="separator"></div>

            <li>The Farewell <3</li>
        </div>
      </ol>
    </div>
    `;

  /* Insert Lesson Map drawer after body's last child */
  const body = document.querySelector("body");
  body.insertAdjacentHTML("beforeend", lessonMapDrawerHTML);

  const drawer = document.querySelector("#lesson-map-drawer");
  const openBtn = document.querySelector("#lesson-map-open-btn");
  const closeBtn = document.querySelector("#lesson-map-close-btn");

  openBtn.addEventListener("click", () => {
    drawer.classList.add("lesson-map-open");
  });

  closeBtn.addEventListener("click", () => {
    drawer.classList.remove("lesson-map-open");
  });

  document.addEventListener("click", (e) => {
    if (!drawer.contains(e.target) && !openBtn.contains(e.target)) {
      drawer.classList.remove("lesson-map-open");
    }
  });
});
