(function () {
  "use strict";

  const data = window.PORTFOLIO;
  const $ = (sel, root = document) => root.querySelector(sel);

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));

  const tags = (list) => `<ul class="tags">${list.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`;

  const ICONS = {
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    db: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
    check: '<path d="M9 12l2 2 4-4"/><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z"/>',
    spark: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9zM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
    code: '<path d="M8 6l-6 6 6 6M16 6l6 6-6 6M14 4l-4 16"/>',
    server: '<rect x="3" y="3" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="7" rx="2"/><path d="M7 6.5h.01M7 17.5h.01"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/>',
    linkedin: '<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 2a2 2 0 110 4 2 2 0 010-4z"/>',
    github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 00-.9-2.6c3.1-.4 6.4-1.5 6.4-7A5.4 5.4 0 0020 4.8 5 5 0 0019.9 1S18.7.6 16 2.5a13.4 13.4 0 00-7 0C6.3.6 5.1 1 5.1 1A5 5 0 005 4.8a5.4 5.4 0 00-1.5 3.7c0 5.4 3.3 6.6 6.4 7a3.4 3.4 0 00-.9 2.6V22"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/>',
    code2: '<path d="M4 17l6-6-6-6M12 19h8"/>',
    file: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M12 18v-6M9 15l3 3 3-3"/>',
    arrow: '<path d="M7 17L17 7M8 7h9v9"/>'
  };
  const icon = (name) =>
    `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;

  /* ---------- Perfil ---------- */
  document.querySelectorAll("[data-bind]").forEach((el) => {
    el.textContent = data.profile[el.dataset.bind] || "";
  });
  $("#hero-stats").innerHTML = data.profile.stats
    .map((s) => `<li><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></li>`).join("");
  $("#about-text").innerHTML = data.profile.about.map((p) => `<p>${esc(p)}</p>`).join("");

  /* ---------- Mini gráfico do hero ---------- */
  const heroBars = [38, 52, 45, 60, 58, 72, 66, 80, 76, 88];
  $("#hero-chart").innerHTML = heroBars
    .map((v, i) => `<span style="--h:${v}%;--d:${i * 60}ms"></span>`).join("");

  /* ---------- Serviços ---------- */
  $("#services").innerHTML = data.services.map((s) => `
    <article class="card service reveal">
      <div class="service__icon">${icon(s.icon)}</div>
      <h3>${esc(s.title)}</h3>
      <p>${esc(s.text)}</p>
      ${tags(s.tags)}
    </article>`).join("");

  /* ---------- Dashboards ---------- */
  const previewHTML = (d) => {
    if (d.image) {
      return `<img src="${esc(d.image)}" alt="Print do dashboard ${esc(d.title)}" loading="lazy">`;
    }
    const p = d.preview;
    const max = Math.max(...p.bars);
    const pts = p.bars.map((v, i) => `${(i / (p.bars.length - 1)) * 100},${100 - (v / max) * 85}`).join(" ");
    return `
      <div class="preview" style="--accent:${esc(p.accent)}">
        <div class="preview__top">
          <span class="preview__title">${esc(d.title)}</span>
          <span class="preview__pills"><i></i><i></i><i></i></span>
        </div>
        <div class="preview__kpis">
          ${p.kpis.map(([k, v]) => `<div><small>${esc(k)}</small><strong>${esc(v)}</strong></div>`).join("")}
        </div>
        <div class="preview__body">
          <div class="preview__bars">
            ${p.bars.map((v, i) => `<span style="--h:${(v / max) * 100}%;--d:${i * 40}ms"></span>`).join("")}
          </div>
          <div class="preview__side">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" class="preview__line">
              <polyline points="${pts}" />
            </svg>
            <div class="preview__donut"></div>
          </div>
        </div>
      </div>`;
  };

  const categories = ["Todos", ...new Set(data.dashboards.map((d) => d.category))];
  $("#bi-filters").innerHTML = categories.map((c, i) =>
    `<button role="tab" class="chip${i === 0 ? " is-active" : ""}" aria-selected="${i === 0}" data-cat="${esc(c)}">${esc(c)}</button>`
  ).join("");

  $("#dashboards").innerHTML = data.dashboards.map((d) => `
    <article class="dash reveal" data-cat="${esc(d.category)}">
      <div class="dash__media">${previewHTML(d)}</div>
      <div class="dash__info">
        <p class="eyebrow mono">${esc(d.category)}</p>
        <h3>${esc(d.title)}</h3>
        <p>${esc(d.description)}</p>
        <ul class="checks">${d.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>
        ${tags(d.tools)}
        ${d.link ? `<a class="link" href="${esc(d.link)}" target="_blank" rel="noopener">Ver dashboard ${icon("arrow")}</a>` : ""}
      </div>
    </article>`).join("");

  $("#bi-filters").addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    document.querySelectorAll("#bi-filters .chip").forEach((c) => {
      const active = c === btn;
      c.classList.toggle("is-active", active);
      c.setAttribute("aria-selected", active);
    });
    const cat = btn.dataset.cat;
    document.querySelectorAll("#dashboards .dash").forEach((el) => {
      el.hidden = cat !== "Todos" && el.dataset.cat !== cat;
    });
  });

  /* ---------- Projetos ---------- */
  $("#projects").innerHTML = data.projects.map((p) => `
    <article class="card project reveal">
      <h3>${esc(p.title)}</h3>
      <p>${esc(p.text)}</p>
      ${tags(p.tags)}
      ${p.link ? `<a class="link" href="${esc(p.link)}" target="_blank" rel="noopener">Ver projeto ${icon("arrow")}</a>` : ""}
    </article>`).join("");

  /* ---------- Experiência ---------- */
  $("#experience").innerHTML = data.experience.map((c) => `
    <li class="timeline__item reveal">
      <h3 class="timeline__company">${esc(c.company)}</h3>
      <span class="timeline__meta">${esc(c.meta)}</span>
      <div class="timeline__roles">
        ${c.roles.map((r) => `
          <div class="role">
            <div class="role__head">
              <h4>${esc(r.role)}</h4>
              ${r.period ? `<span class="mono">${esc(r.period)}</span>` : ""}
            </div>
            <p>${esc(r.text)}</p>
            ${r.bullets.length ? `<ul class="role__bullets">${r.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>` : ""}
            ${r.tags.length ? tags(r.tags) : ""}
          </div>`).join("")}
      </div>
    </li>`).join("");

  /* ---------- Stack ---------- */
  $("#stack-list").innerHTML = Object.entries(data.stack).map(([group, items]) => `
    <div class="card stack reveal">
      <h3 class="mono">${esc(group)}</h3>
      ${tags(items)}
    </div>`).join("");

  /* ---------- Contato ---------- */
  const p = data.profile;
  const contacts = [
    p.linkedin && { href: p.linkedin, label: "LinkedIn", icon: "linkedin", primary: true },
    p.email && { href: `mailto:${p.email}`, label: p.email, icon: "mail" },
    p.github && { href: p.github, label: "GitHub", icon: "github" },
    p.codewars && { href: p.codewars, label: "Codewars", icon: "code2" },
    p.cv && { href: p.cv, label: "Baixar CV", icon: "file" }
  ].filter(Boolean);
  $("#contact-links").innerHTML = contacts.map((c) => `
    <a class="btn ${c.primary ? "" : "btn--ghost"}" href="${esc(c.href)}" ${c.href.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>
      ${icon(c.icon)} ${esc(c.label)}
    </a>`).join("");

  $("#year").textContent = new Date().getFullYear();
  document.title = `${p.name} · ${p.role}`;

  /* ---------- Menu mobile ---------- */
  const toggle = $(".nav__toggle");
  const links = $("#nav-links");
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open);
  });
  links.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });

  /* ---------- Nav com sombra ao rolar ---------- */
  const nav = $(".nav");
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Animações de entrada ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("is-visible");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }
})();
