document.querySelector(".count").addEventListener("click", function () {
  let increament = document.querySelector(".input").value;
  increament++;
  document.querySelector(".input").value = increament;
  console.log(increament, typeof increament);
});

// document.querySelector('.complete').style.display = 'block';
