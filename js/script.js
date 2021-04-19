function navOpen() {
  let nav = document.getElementById("links");
  if (nav.style.display === "flex") {
    nav.style.display = "none";
  } else {
    nav.style.display = "flex";
  }
}
