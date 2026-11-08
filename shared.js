// Small helpers for the portfolio page. Classic script (no modules) so the page opens straight from
// disk with file://.
window.PF = (function () {
  const MAP = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) => MAP[c]);

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  // Placeholder cover: ink-wash ridges and a small vermilion sun over a paper-softened wash of the
  // project colour. Used until the project has a real image.
  function placeholderSvg(p, i) {
    const c = esc(p.colour || "#777777");
    const ridge = (base, amp, seed, op) => {
      let d = `M0 1000 L0 ${base}`;
      for (let x = 0; x <= 1600; x += 40) {
        const y = base - amp * (0.6 * Math.sin(x / 260 + seed) + 0.4 * Math.sin(x / 97 + seed * 2.3));
        d += ` L${x} ${y.toFixed(1)}`;
      }
      return `<path d="${d} L1600 1000 Z" fill="#1E1B17" fill-opacity="${op}"/>`;
    };
    const shapes =
      `<rect width="1600" height="1000" fill="#F2EDE2" fill-opacity=".55"/>` +
      `<circle cx="${1040 + (i * 137) % 340}" cy="${250 + (i * 61) % 90}" r="64" fill="#B8361E" fill-opacity=".85"/>` +
      ridge(560, 90, i * 1.7 + 0.4, 0.12) + ridge(700, 70, i * 2.3 + 2.1, 0.2) + ridge(840, 50, i * 0.9 + 4.2, 0.34);
    const hint = (window.PORTFOLIO && window.PORTFOLIO.coverHints === false) ? "" :
      `<text x="1440" y="930" text-anchor="end" font-family="system-ui, sans-serif" font-size="34" ` +
      `fill="#fff" fill-opacity=".8">Cover image, 1600 x 1000</text>`;
    return (
      `<svg viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">` +
      `<rect width="1600" height="1000" fill="${c}"/>${shapes}${hint}</svg>`
    );
  }

  function cover(p, i) {
    if (p.cover) {
      return `<img src="${esc(p.cover)}" alt="${esc(p.coverAlt)}" loading="lazy" decoding="async">`;
    }
    return placeholderSvg(p, i);
  }

  // Copy to clipboard; falls back to a hidden textarea where the async API is blocked (file://).
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise((resolve, reject) => {
      const t = document.createElement("textarea");
      t.value = text;
      t.setAttribute("readonly", "");
      t.style.position = "fixed";
      t.style.opacity = "0";
      document.body.appendChild(t);
      t.select();
      const ok = document.execCommand("copy");
      t.remove();
      ok ? resolve() : reject(new Error("copy failed"));
    });
  }

  function wireCopy(button, text, doneLabel) {
    const label = button.textContent;
    let timer = 0;
    button.addEventListener("click", () => {
      copyText(text).then(() => {
        button.textContent = doneLabel || "Copied";
        button.dataset.done = "true";
        clearTimeout(timer);
        timer = setTimeout(() => {
          button.textContent = label;
          delete button.dataset.done;
        }, 1800);
      }).catch(() => {
        window.location.href = "mailto:" + text;
      });
    });
  }

  function localTime(timeZone) {
    try {
      return new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone }).format(new Date());
    } catch (e) {
      return "";
    }
  }

  // Fill every [data-pf="field"] with a top-level text field from content.js.
  function fillText(data, root) {
    (root || document).querySelectorAll("[data-pf]").forEach((el) => {
      const v = data[el.dataset.pf];
      if (v) el.textContent = v; else if (el.hasAttribute("data-pf-hide")) el.hidden = true;
    });
    if (data.name) document.title = data.name + " - " + (data.role || "Portfolio");
  }

  return { esc, cover, copyText, wireCopy, localTime, fillText, reducedMotion };
})();
