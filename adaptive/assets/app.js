/* AUTOSAR AP Training Guides: theme, navigation, search, page TOC, code copy, Mermaid. */
(function () {
  "use strict";
  var doc = document.documentElement;

  function store(key, value) {
    try { if (value === undefined) return localStorage.getItem(key); localStorage.setItem(key, value); }
    catch (e) { return null; }
  }

  /* ---------- Theme ---------- */
  var themeBtn = document.getElementById("theme-btn");
  function setTheme(t, persist) {
    doc.setAttribute("data-theme", t);
    if (persist) store("theme", t);
    renderMermaid();
  }
  if (themeBtn) themeBtn.addEventListener("click", function () {
    setTheme(doc.getAttribute("data-theme") === "dark" ? "light" : "dark", true);
  });
  if (window.matchMedia) {
    var mq = matchMedia("(prefers-color-scheme: dark)");
    var onChange = function (e) {
      var saved = store("theme");
      if (saved !== "light" && saved !== "dark") setTheme(e.matches ? "dark" : "light", false);
    };
    if (mq.addEventListener) mq.addEventListener("change", onChange);
  }

  /* ---------- Mobile navigation ---------- */
  var menuBtn = document.getElementById("menu-btn");
  var scrim = document.getElementById("scrim");
  function setNav(open) {
    document.body.classList.toggle("nav-open", open);
    if (menuBtn) menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  }
  if (menuBtn) menuBtn.addEventListener("click", function () {
    setNav(!document.body.classList.contains("nav-open"));
  });
  if (scrim) scrim.addEventListener("click", function () { setNav(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setNav(false); });
  var active = document.querySelector(".guide-list a.active");
  if (active && active.scrollIntoView) active.scrollIntoView({ block: "center" });

  /* ---------- Code copy buttons ---------- */
  document.querySelectorAll(".code-block").forEach(function (block) {
    var btn = document.createElement("button");
    btn.className = "copy-btn";
    btn.type = "button";
    btn.textContent = "Copy";
    btn.addEventListener("click", function () {
      var text = block.querySelector("pre").innerText;
      var done = function () { btn.textContent = "Copied"; setTimeout(function () { btn.textContent = "Copy"; }, 1500); };
      if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, function () {});
    });
    block.appendChild(btn);
  });

  /* ---------- Page TOC with scroll spy ---------- */
  var tocLinks = Array.prototype.slice.call(document.querySelectorAll(".toc a"));
  var targets = tocLinks.map(function (a) {
    return document.getElementById(decodeURIComponent(a.getAttribute("href").slice(1)));
  });
  var currentIdx = -1;
  function updateToc() {
    var y = window.scrollY + 90, idx = -1;
    for (var i = 0; i < targets.length; i++) {
      if (targets[i] && targets[i].offsetTop <= y) idx = i; else if (targets[i]) break;
    }
    if (idx === currentIdx) return;
    currentIdx = idx;
    var h2 = -1;
    for (var j = idx; j >= 0; j--) if (tocLinks[j].parentNode.classList.contains("lvl2")) { h2 = j; break; }
    var inSection = false;
    tocLinks.forEach(function (a, k) {
      var li = a.parentNode;
      a.classList.toggle("active", k === idx);
      if (li.classList.contains("lvl2")) inSection = (k === h2);
      else li.classList.toggle("show", inSection);
    });
    var act = tocLinks[idx];
    var box = document.querySelector(".toc");
    if (act && box && box.offsetParent !== null) {
      var r = act.getBoundingClientRect(), b = box.getBoundingClientRect();
      if (r.top < b.top + 40 || r.bottom > b.bottom - 40) box.scrollTop += r.top - b.top - b.height / 3;
    }
  }

  var toTop = document.getElementById("to-top");
  var ticking = false;
  window.addEventListener("scroll", function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      if (tocLinks.length) updateToc();
      if (toTop) toTop.hidden = window.scrollY < 800;
    });
  }, { passive: true });
  if (toTop) toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
  if (tocLinks.length) updateToc();

  /* ---------- Search over all section headings ---------- */
  var input = document.getElementById("search-input");
  var list = document.getElementById("search-results");
  var root = (function () {
    var s = document.querySelector('script[src$="assets/app.js"]');
    return s ? s.getAttribute("src").replace(/assets\/app\.js$/, "") : "";
  })();
  var sel = -1, hits = [];

  function esc(s) { return s.replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function mark(text, terms) {
    var out = esc(text);
    terms.forEach(function (t) {
      if (!t) return;
      out = out.replace(new RegExp("(" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig"), "<mark>$1</mark>");
    });
    return out;
  }
  function search(q) {
    var idx = window.SEARCH_INDEX || [], guides = window.SEARCH_GUIDES || {};
    var norm = function (s) { return s.toLowerCase().replace(/-/g, ""); };
    var terms = norm(q).split(/\s+/).filter(Boolean);
    if (!terms.length) { list.hidden = true; return; }
    hits = [];
    for (var i = 0; i < idx.length && hits.length < 40; i++) {
      var t = norm(idx[i][0]), g = norm(idx[i][1] + " " + (guides[idx[i][1]] || ""));
      if (terms.every(function (w) { return t.indexOf(w) >= 0 || g.indexOf(w) >= 0; })) {
        var score = (terms.every(function (w) { return t.indexOf(w) >= 0; }) ? 0 : 10) + idx[i][3];
        hits.push({ e: idx[i], s: score, o: i });
      }
    }
    hits.sort(function (a, b) { return a.s - b.s || a.o - b.o; });
    hits = hits.slice(0, 25);
    sel = hits.length ? 0 : -1;
    list.innerHTML = hits.length ? hits.map(function (h, k) {
      return '<li><a href="' + root + h.e[2] + '"' + (k === 0 ? ' class="selected"' : "") + ">" +
        mark(h.e[0], terms) + '<span class="sr-guide">' + esc(h.e[1] + " · " + (guides[h.e[1]] || "")) + "</span></a></li>";
    }).join("") : '<li class="sr-empty">No matching section</li>';
    list.hidden = false;
  }
  function move(d) {
    var links = list.querySelectorAll("a");
    if (!links.length) return;
    sel = (sel + d + links.length) % links.length;
    links.forEach(function (a, k) { a.classList.toggle("selected", k === sel); });
    links[sel].scrollIntoView({ block: "nearest" });
  }
  if (input && list) {
    input.addEventListener("input", function () { search(input.value); });
    input.addEventListener("focus", function () { if (input.value) search(input.value); });
    input.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown") { e.preventDefault(); move(1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); move(-1); }
      else if (e.key === "Enter") {
        var a = list.querySelectorAll("a")[sel];
        if (a) { e.preventDefault(); window.location.href = a.href; list.hidden = true; input.blur(); }
      } else if (e.key === "Escape") { list.hidden = true; input.blur(); }
    });
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".search")) list.hidden = true;
    });
    list.addEventListener("click", function () { list.hidden = true; });
    document.addEventListener("keydown", function (e) {
      if (e.key === "/" && document.activeElement !== input && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
        e.preventDefault(); input.focus();
      }
    });
  }

  /* ---------- Mermaid ---------- */
  var mermaidMod = null;
  var diagrams = Array.prototype.slice.call(document.querySelectorAll("pre.mermaid"));
  diagrams.forEach(function (el) { el.setAttribute("data-src", el.textContent); });
  function renderMermaid() {
    if (!diagrams.length || !window.MERMAID_URL) return;
    var load = mermaidMod ? Promise.resolve(mermaidMod) : import(window.MERMAID_URL).then(function (m) {
      mermaidMod = m.default; return mermaidMod;
    });
    load.then(function (mermaid) {
      var dark = doc.getAttribute("data-theme") === "dark";
      mermaid.initialize({ startOnLoad: false, theme: dark ? "dark" : "default", securityLevel: "strict",
        fontFamily: getComputedStyle(document.body).fontFamily });
      diagrams.forEach(function (el) {
        el.removeAttribute("data-processed");
        el.textContent = el.getAttribute("data-src");
      });
      return mermaid.run({ nodes: diagrams });
    }).then(function () {
      if (tocLinks.length) { currentIdx = -1; updateToc(); }
      if (location.hash) {
        var t = document.getElementById(decodeURIComponent(location.hash.slice(1)));
        if (t && !renderMermaid.jumped) { renderMermaid.jumped = true; t.scrollIntoView(); }
      }
    }).catch(function (err) {
      if (window.console) console.warn("Mermaid:", (err && (err.message || err.str)) || err);
    });
  }
  renderMermaid();
})();
