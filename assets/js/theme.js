(function () {
  var root = document.documentElement;
  var button = document.querySelector("[data-theme-toggle]");
  if (!button) return;

  function preferred() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function current() {
    var set = root.getAttribute("data-theme");
    return set === "light" || set === "dark" ? set : preferred();
  }

  function paint(theme) {
    var dark = theme === "dark";
    button.setAttribute("aria-pressed", dark ? "true" : "false");
    button.setAttribute("aria-label", dark ? "Switch to light colors" : "Switch to dark colors");
    var label = button.querySelector(".theme-toggle__label");
    if (label) label.textContent = dark ? "Light" : "Dark";
  }

  paint(current());

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
    if (!root.getAttribute("data-theme")) paint(preferred());
  });

  button.addEventListener("click", function () {
    var next = current() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("physicsy-theme", next);
    } catch (e) {}
    paint(next);
  });
})();
