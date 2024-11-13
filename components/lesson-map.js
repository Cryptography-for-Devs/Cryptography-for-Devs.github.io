document.addEventListener("DOMContentLoaded", () => {
  const lessonMapDrawerHTML = `
    <div id="lesson-map-drawer">
      <h2>
        📑 All lessons
        <button id="lesson-map-close-btn">&times;</button>
      </h2>

      <ol start="0" class="lesson-map-ol">
        
        <h4>Part 1 of 2: </h4>

        <li><a href="${window.location.origin}/0-before-we-start">Before we start (Do not skip this)</a></li>
        <li><a href="${window.location.origin}/1-symmetric-key-encryption">Symmetric key encryption</a></li>
        <li><a href="${window.location.origin}/2-caesar-challenge">Code challenge: Caesar's cipher</a></li>
        <li><a href="${window.location.origin}/3-the-hash">Cryptographic hash functions</a></li>
        <li><a href="${window.location.origin}/4-revealed-passwords">Password hashing</a></li>
        <li><a href="${window.location.origin}/5-rainbows-and-salts">Rainbow table and the salt</a></li>
        <li><a href="${window.location.origin}/6-slow-them-down">PBKDF-2: slowing down</a></li>
        
        <div class="lesson-map-separator"></div>

        <h4>Part 2 of 2: </h4>

        <p class="info-alert">
            I will post updates on <a href="https://twitter.com/vkwebdev" target="_blank">my Twitter</a> when
            the second part of the course gets released. 
            <br><br> 
            It all will remain free, forever :)
        </p>

        <div class="lesson-map-upcoming-lessons">
            <li>The Diffie-Hellman key exchange</li>
            <li>RSA public-key encryption</li>
            <li>Challenge: End to end encryption</li>
            <li>The TLS story</li>
            <li>Certificate authorities rule!</li>
            <li>Project: Finale. 💛</li>
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
