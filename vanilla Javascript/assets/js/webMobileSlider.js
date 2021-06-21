document.querySelector(".next-button").addEventListener("click", () => {
  let contents = document.querySelector(".contents");
  const pointer = parseFloat(contents.style.transform.replace(/[^0-9|.]/g, ""));

  if (contents.style.transform === "translate(-75%)") {
    contents.style.transform = "translate(-87.5%)";
    setTimeout(() => {
      contents.style.transition = "none";
      contents.style.transform = "translate(-12.5%)";
    }, 300);
  } else if (contents.style.transform === "") {
    contents.style.transition = "0.3s";
    contents.style.transform = `translate(-25%)`;
  } else {
    contents.style.transition = "0.3s";
    contents.style.transform = `translate(-${pointer + 12.5}%)`;
  }
});

document.querySelector(".previous-button").addEventListener("click", () => {
  let contents = document.querySelector(".contents");
  const pointer = parseFloat(contents.style.transform.replace(/[^0-9|.]/g, ""));

  if (
    contents.style.transform === "translate(-12.5%)" ||
    contents.style.transform === ""
  ) {
    contents.style.transition = "0.3s";
    contents.style.transform = "translate(0)";
    setTimeout(() => {
      contents.style.transition = "none";
      contents.style.transform = "translate(-75%)";
    }, 300);
  } else {
    contents.style.transition = "0.3s";
    contents.style.transform = `translate(-${pointer - 12.5}%)`;
  }
});
