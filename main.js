$(document).ready(function () {
  let imgArr = ["imgs/1.jpg", "imgs/2.jpg", "imgs/3.jpg", "imgs/4.jpg"];
  let index = 0;
  $("#rightBtnImg").click(function () {
    index++;
    if (index == 4) {
      index = 0;
    }
    $("#image").attr("src", `${imgArr[index]}`);
  });

  $("#leftBtnImg").click(function () {
    index--;
    if (index == -1) {
      index = 3;
    }
    $("#image").attr("src", `${imgArr[index]}`);
  });

  setInterval(() => {
    index++;
    if (index == 4) {
      index = 0;
    }
    $("#image").attr("src", `${imgArr[index]}`);
  }, 2000);
});
