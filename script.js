// Counter starts
document.querySelector(".count").addEventListener("click", function () {
  let increment = document.querySelector(".input").value;
  increment++;

  document.querySelector(".input").value = increment;
  console.log(increment, typeof increment);

  if (increment > 99) {
    document.querySelector(".body-all").style.backgroundColor = "#8be78b";
    document.querySelector(".body-all").style.border = "none";
    document.querySelector(".count").style.backgroundColor = "white";
    document.querySelector(".reset").style.backgroundColor = "white";
    document.querySelector(".count").style.color = "black";
    document.querySelector(".reset").style.color = "black";
    document.querySelector(".input").style.border = "none";
    document.querySelector(".heading").style.color = "white";
    document.querySelector(".heading").textContent = "Counter Complete";

    document.querySelector(".input").value = 0;
  } else if (increment >= 0 && increment < 99) {
    document.querySelector(".body-all").style.backgroundColor = "white";
    document.querySelector(".body-all").style.borderColor = "black";
    document.querySelector(".count").style.color = "white";
    document.querySelector(".reset").style.color = "white";
    document.querySelector(".heading").style.color = "black";
    document.querySelector(".heading").textContent = "Counter";
    document.querySelector(".count").style.backgroundColor = "black";
    document.querySelector(".reset").style.backgroundColor = "black";
    document.querySelector(".input").style.border = "3px solid black";
    document.querySelector(".body-all").style.border = "3px solid black";
  }
});

document.querySelector(".reset").addEventListener("click", function () {
  document.querySelector("input").value = 0;
  document.querySelector(".body-all").style.backgroundColor = "white";
  document.querySelector(".body-all").style.borderColor = "black";
  document.querySelector(".count").style.color = "white";
  document.querySelector(".reset").style.color = "white";
  document.querySelector(".heading").style.color = "black";
  document.querySelector(".heading").textContent = "Counter";
  document.querySelector(".count").style.backgroundColor = "black";
  document.querySelector(".reset").style.backgroundColor = "black";
  document.querySelector(".input").style.border = "3px solid black";
  document.querySelector(".body-all").style.border = "3px solid black";

});
