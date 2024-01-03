document.querySelectorAll(".nodrag").forEach((element) => {
  element.addEventListener("pointermove", (event) => {
    event.preventDefault();
  })
})