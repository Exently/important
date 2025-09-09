export function mountNav(active = "") {
  const nav = document.querySelector("#nav");
  if (!nav) return;
  nav.innerHTML = `
    <div class="brand">für uns 💙💜</div>
    <div class="row">
      <a href="home.html"><button ${active === "home" ? "style='outline:2px solid #fff2'" : ""}>Home</button></a>
      <a href="gallery.html"><button ${active === "gallery" ? "style='outline:2px solid #fff2'" : ""}>Galerie</button></a>
      <a href="todos.html"><button ${active === "todos" ? "style='outline:2px solid #fff2'" : ""}>To-Dos</button></a>
      <a href="coupons.html"><button ${active === "coupons" ? "style='outline:2px solid #fff2'" : ""}>Gutscheine</button></a>
      <a href="settings.html"><button ${active === "settings" ? "style='outline:2px solid #fff2'" : ""}>⚙︎</button></a>
    </div>
  `;
}

export function daysSince(dateStr) {
  const start = new Date(dateStr + "T00:00:00");
  const diff = Date.now() - start.getTime();
  return Math.floor(diff / 86400000);
}

export function el(sel) { return document.querySelector(sel); }
export function els(sel) { return Array.from(document.querySelectorAll(sel)); }
export const sleep = (ms) => new Promise(r => setTimeout(r, ms));
