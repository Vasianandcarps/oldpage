let n = prompt("количество секунд которые страница будет активна");
let date_in_future = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate(),
  new Date().getHours(),
  new Date().getMinutes(),
  new Date().getSeconds(),
  new Date().getMilliseconds() + n * 1000
);
let x;
function timer() {
  let date = new Date();

  let ms = date_in_future - date;

  let minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((ms % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    "Вы находитесь на странице: " + minutes + "минут " + +seconds + "секунд ";

  if (ms < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Страница устарела!";
  }
  x = setInterval(timer, 1000);
}
