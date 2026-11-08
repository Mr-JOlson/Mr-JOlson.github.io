(function () {
  document.querySelectorAll("[data-range]").forEach(function (range) {
    var name = range.getAttribute("data-range");
    var radios = document.querySelectorAll('input[name="' + name + '"]');

    function fromRange() {
      radios.forEach(function (radio) {
        if (radio.value === range.value) radio.checked = true;
      });
    }

    range.addEventListener("input", fromRange);
    radios.forEach(function (radio) {
      radio.addEventListener("change", function () {
        if (radio.checked) range.value = radio.value;
      });
    });
  });

  document.querySelectorAll("[data-highlight-group]").forEach(function (group) {
    var root = group.closest(".planetology");
    if (!root) return;
    group.querySelectorAll("input").forEach(function (input) {
      input.addEventListener("change", function () {
        if (input.checked) root.setAttribute("data-highlight", input.value);
      });
    });
  });
})();
