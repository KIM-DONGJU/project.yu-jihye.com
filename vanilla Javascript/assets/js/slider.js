document.querySelector(".next-button").addEventListener("click", () => {
  let contents = document.querySelector(".contents");

  if (contents.style.transform === "translate(-50%)") {
    contents.style.transform = "translate(-75%)";
    setTimeout(() => {
      contents.style.transition = "none";
      contents.style.transform = "translate(-25%)";
    }, 300);
  } else {
    contents.style.transition = "0.3s";
    contents.style.transform = "translate(-50%)";
  }
});

document.querySelector(".previous-button").addEventListener("click", () => {
  let contents = document.querySelector(".contents");

  if (
    contents.style.transform === "translate(-25%)" ||
    contents.style.transform === ""
  ) {
    contents.style.transition = "0.3s";
    contents.style.transform = "translate(0)";
    setTimeout(() => {
      contents.style.transition = "none";
      contents.style.transform = "translate(-50%)";
    }, 300);
  } else {
    contents.style.transition = "0.3s";
    contents.style.transform = "translate(-25%)";
  }
});

document.querySelector(".small-next-button").addEventListener("click", () => {
  let contents = document.querySelector(".logo-contents");

  if (contents.style.transform === "translate(-50%)") {
    contents.style.transform = "translate(-75%)";
    setTimeout(() => {
      contents.style.transition = "none";
      contents.style.transform = "translate(-25%)";
    }, 300);
  } else {
    contents.style.transition = "0.3s";
    contents.style.transform = "translate(-50%)";
  }
});

document
  .querySelector(".small-previous-button")
  .addEventListener("click", () => {
    let contents = document.querySelector(".logo-contents");

    if (
      contents.style.transform === "translate(-25%)" ||
      contents.style.transform === ""
    ) {
      contents.style.transition = "0.3s";
      contents.style.transform = "translate(0)";
      setTimeout(() => {
        contents.style.transition = "none";
        contents.style.transform = "translate(-50%)";
      }, 300);
    } else {
      contents.style.transition = "0.3s";
      contents.style.transform = "translate(-25%)";
    }
  });
