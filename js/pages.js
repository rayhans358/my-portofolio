document.addEventListener("DOMContentLoaded", () => {
  fetch("html/about.html")
    .then((res) => res.text())
    .then(
      (data) => (document.getElementById("about-container").innerHTML = data)
    );

  fetch("html/experience.html")
    .then((res) => res.text())
    .then(
      (data) =>
        (document.getElementById("experience-container").innerHTML = data)
    );

  fetch("html/project.html")
    .then((res) => res.text())
    .then(
      (data) => (document.getElementById("project-container").innerHTML = data)
    );
});
