/* ============================================================
   ADIL — shared layout + page renderers.
   Header (black nav bar) and footer are injected here so every
   page stays DRY. Page content renders from the files in /data —
   edit those, not the HTML, for routine updates.
   ============================================================ */
(function () {
  const S = window.SITE;
  const page = document.body.dataset.page || "";

  /* ---------- black navigation bar ---------- */
  const header = document.createElement("header");
  header.className = "site-header";
  header.innerHTML = `
    <div class="header-inner">
      <a class="brand" href="index.html" aria-label="${S.labFullName} home">
        <span class="brand-logo"><img src="${S.logo}" alt="${S.university} logo"></span>
        <span class="brand-text">
          <span class="brand-lab">${S.labFullName} (${S.labShortName})</span>
          <span class="brand-uni">${S.department} · ${S.university}, ${S.campus}</span>
        </span>
      </a>
      <button class="nav-toggle" aria-expanded="false" aria-controls="main-nav">MENU</button>
      <nav class="main-nav" id="main-nav" aria-label="Main">
        <ul>
          ${S.nav.map(n => `<li><a href="${n.href}" ${n.href === page ? 'class="active" aria-current="page"' : ""}>${n.label}</a></li>`).join("")}
        </ul>
      </nav>
    </div>`;
  document.body.prepend(header);

  const toggle = header.querySelector(".nav-toggle");
  const nav = header.querySelector(".main-nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  /* ---------- footer (unchanged design) ---------- */
  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <div class="imigongo" aria-hidden="true"></div>
    <div class="footer-inner">
      <div>
        <h4>${S.labFullName}</h4>
        <p>${S.tagline}.<br>${S.department}<br>${S.university}, ${S.campus}</p>
      </div>
      <div>
        <h4>Visit</h4>
        <ul>
          ${S.nav.slice(0, 6).map(n => `<li><a href="${n.href}">${n.label}</a></li>`).join("")}
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul>
          <li><a href="mailto:${S.email}">${S.email}</a></li>
          <li>${S.address}</li>
          ${S.footerLinks.map(l => `<li><a href="${l.href}" target="_blank" rel="noopener">${l.label}</a></li>`).join("")}
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} ${S.labFullName}, ${S.university}. Established ${S.established}.</span>
      <span>Built for GitHub Pages · content lives in <code>/data</code></span>
    </div>`;
  document.body.append(footer);

  /* ---------- reveal-on-scroll (restrained) ---------- */
  const io = "IntersectionObserver" in window
    ? new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      }), { threshold: 0.08 })
    : null;
  window.reveal = root => {
    (root || document).querySelectorAll(".reveal").forEach(el => io ? io.observe(el) : el.classList.add("in"));
  };

  const el = (id) => document.getElementById(id);
  const esc = (s) => String(s ?? "");

  /* ============================================================
     AUTO-SLIDING PHOTO STRIP (home)
     - advances every 5s; pauses on hover/focus
     - dots + prev/next arrows
     - respects prefers-reduced-motion (no auto-advance)
     ============================================================ */
  if (window.SLIDES && el("photo-slider")) {
    const slides = window.SLIDES;
    const root = el("photo-slider");
    root.innerHTML = `
      <div class="slides-track">
        ${slides.map(s => `
          <div class="slide">
            <img src="${s.img}" alt="${esc(s.alt)}" loading="lazy">
            <div class="slide-caption">${esc(s.caption)}</div>
          </div>`).join("")}
      </div>
      <button class="slider-arrow prev" aria-label="Previous photo">&#8249;</button>
      <button class="slider-arrow next" aria-label="Next photo">&#8250;</button>
      <div class="slider-dots" role="tablist">
        ${slides.map((_, i) => `<button role="tab" aria-label="Go to photo ${i + 1}"${i === 0 ? ' class="active"' : ""}></button>`).join("")}
      </div>`;

    const track = root.querySelector(".slides-track");
    const dots = [...root.querySelectorAll(".slider-dots button")];
    let idx = 0, timer = null;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const go = (i) => {
      idx = (i + slides.length) % slides.length;
      track.style.transform = `translateX(-${idx * 100}%)`;
      dots.forEach((d, j) => d.classList.toggle("active", j === idx));
    };
    const start = () => { if (!reduced && slides.length > 1) timer = setInterval(() => go(idx + 1), 5000); };
    const stop = () => { if (timer) { clearInterval(timer); timer = null; } };

    root.querySelector(".prev").addEventListener("click", () => { stop(); go(idx - 1); start(); });
    root.querySelector(".next").addEventListener("click", () => { stop(); go(idx + 1); start(); });
    dots.forEach((d, i) => d.addEventListener("click", () => { stop(); go(i); start(); }));
    root.addEventListener("mouseenter", stop);
    root.addEventListener("mouseleave", start);
    root.addEventListener("focusin", stop);
    root.addEventListener("focusout", start);
    start();
  }

  /* ---------- Research theme cards ---------- */
  if (window.RESEARCH && el("research-grid")) {
    el("research-grid").innerHTML = window.RESEARCH.map(t => `
      <article class="card reveal" id="${t.id}">
        <span class="kicker">${esc(t.kicker)} · ${esc(t.status)}</span>
        <h3>${esc(t.title)}</h3>
        <p>${esc(t.summary)}</p>
        <p style="font-size:0.93rem">${esc(t.detail)}</p>
        <div class="tagrow">${t.methods.map(m => `<span class="tag">${esc(m)}</span>`).join("")}</div>
      </article>`).join("");
  }
  if (window.RESEARCH && el("home-research")) {
    el("home-research").innerHTML = window.RESEARCH.slice(0, 3).map(t => `
      <article class="card reveal">
        <span class="kicker">${esc(t.kicker)}</span>
        <h3>${esc(t.title)}</h3>
        <p>${esc(t.summary)}</p>
        <a class="card-link" href="research.html#${t.id}">Read about this theme →</a>
      </article>`).join("");
  }

  /* ---------- Projects ---------- */
  const statusPill = s => `<span class="pill pill--${s}">${s}</span>`;
  if (window.PROJECTS && el("home-projects")) {
    el("home-projects").innerHTML = window.PROJECTS.filter(p => p.featured).map(p => `
      <article class="card reveal">
        <span class="kicker">${esc(p.theme)}</span>
        <h3>${esc(p.title)}</h3>
        <p><strong>${esc(p.subtitle)}.</strong> ${esc(p.problem)}</p>
        <div class="tagrow">${p.tags.map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>
        <a class="card-link" href="projects.html#${p.id}">Project details →</a>
      </article>`).join("");
  }
  if (window.PROJECTS && el("projects-list")) {
    const groups = [
      ["current", "Current Projects"],
      ["proposed", "Proposed Projects"],
      ["completed", "Completed Projects"]
    ];
    el("projects-list").innerHTML = groups.map(([status, label]) => {
      const items = window.PROJECTS.filter(p => p.status === status);
      if (!items.length) {
        return status === "proposed" ? "" : `
          <div class="section-head"><h2>${label}</h2>
          <p class="notice">No ${status} projects are listed yet — entries will appear here as the research programme ${status === "current" ? "launches its first funded projects" : "completes its first project cycles"}.</p></div>`;
      }
      return `<div class="section-head"><h2>${label}</h2></div>` + items.map(p => `
        <article class="project reveal" id="${p.id}">
          <div class="project-head">
            <h3>${esc(p.title)}</h3>
            ${statusPill(p.status)}
          </div>
          <p class="subtitle">${esc(p.subtitle)}</p>
          <dl>
            <dt>Problem</dt><dd>${esc(p.problem)}</dd>
            <dt>Approach</dt><dd>${esc(p.solution)}</dd>
            <dt>Beneficiaries</dt><dd>${esc(p.beneficiaries)}</dd>
            <dt>Expected impact</dt><dd>${esc(p.impact)}</dd>
            <dt>Measures of success</dt><dd>${p.kpis.map(esc).join(" · ")}</dd>
            <dt>Timeline</dt><dd>${esc(p.timeline)}</dd>
          </dl>
          <div class="tagrow">${p.tags.map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>
        </article>`).join("");
    }).join("");
  }

  /* ---------- People ---------- */
  if (window.PEOPLE && el("people-groups")) {
    const order = [
      ["director", "Lab Director"],
      ["faculty", "Faculty & Lecturers"],
      ["researchers", "Researchers & Staff"],
      ["students", "Student Researchers"],
      ["collaborators", "Research Collaborators"],
      ["visiting", "Visiting Researchers"]
    ];
    el("people-groups").innerHTML = order.map(([key, label]) => {
      const items = window.PEOPLE[key] || [];
      if (!items.length) return "";
      return `
        <div class="section-head"><h2>${label}</h2></div>
        <div class="grid grid-3" style="margin-bottom:48px">
          ${items.map(p => `
            <article class="card person reveal">
              <div class="photo">${p.photo ? `<img src="${p.photo}" alt="Portrait of ${esc(p.name)}">` : "◆"}</div>
              <h3>${esc(p.name)}</h3>
              <p class="role">${esc(p.title)}</p>
              <p class="bio">${esc(p.bio)}</p>
              <div class="plinks">
                ${p.email ? `<a href="mailto:${p.email}">Email</a>` : ""}
                ${(p.links || []).map(l => `<a href="${l.href}">${esc(l.label)}</a>`).join("")}
              </div>
            </article>`).join("")}
        </div>`;
    }).join("");
  }

  /* ---------- Publications ---------- */
  if (window.PUBLICATIONS && el("pubs-list")) {
    el("pubs-list").innerHTML = window.PUBLICATIONS.map(g => `
      <div class="pub-year">${esc(g.year)}</div>
      ${g.items.map(p => `
        <div class="pub reveal">
          <span class="ptype">${esc(p.type)}</span>
          <div class="ptitle">${p.link ? `<a href="${p.link}">${esc(p.title)}</a>` : esc(p.title)}</div>
          <div class="pmeta">${esc(p.authors)} · ${esc(p.venue)}</div>
        </div>`).join("")}`).join("");
  }

  /* ---------- News ---------- */
  const newsItem = n => `
    <article class="news-item reveal">
      <div>
        <span class="news-date">${esc(n.date)}</span>
        <span class="news-cat">${esc(n.category)}</span>
      </div>
      <div>
        <h3>${esc(n.title)}</h3>
        <p>${esc(n.body)}</p>
      </div>
    </article>`;
  if (window.NEWS && el("news-list")) el("news-list").innerHTML = window.NEWS.map(newsItem).join("");
  if (window.NEWS && el("home-news")) el("home-news").innerHTML = window.NEWS.slice(0, 3).map(newsItem).join("");

  /* ---------- Partners ---------- */
  if (window.PARTNERS && el("partners-groups")) {
    el("partners-groups").innerHTML =
      `<div class="notice reveal">${esc(window.PARTNERS.disclaimer)}</div>` +
      window.PARTNERS.groups.map(g => `
        <div class="partner-group reveal">
          <h3>${esc(g.category)}</h3>
          <ul class="partner-list">
            ${g.items.map(p => `
              <li>
                ${p.confirmed ? '<span class="pflag">Confirmed</span>' : ""}
                <span class="pname">${esc(p.name)}</span>
                <span class="pnote">${esc(p.note)}</span>
              </li>`).join("")}
          </ul>
        </div>`).join("");
  }

  /* ---------- Join ---------- */
  if (window.JOIN && el("join-tracks")) {
    el("join-tracks").innerHTML = window.JOIN.map(t => `
      <div class="join-track reveal">
        <div class="join-head">
          <h3>${esc(t.track)}</h3>
          ${t.open ? '<span class="pill pill--open">Open</span>' : '<span class="pill pill--completed">Not currently open</span>'}
        </div>
        <p>${esc(t.text)}</p>
        <p class="join-cta">→ ${esc(t.cta)} <a href="mailto:${S.email}">${S.email}</a></p>
      </div>`).join("");
  }

  /* ---------- Contact fill-ins ---------- */
  document.querySelectorAll("[data-fill]").forEach(node => {
    const key = node.dataset.fill;
    if (key === "email") { node.textContent = S.email; if (node.tagName === "A") node.href = `mailto:${S.email}`; }
    else if (S[key]) node.textContent = S[key];
  });

  window.reveal();
})();
