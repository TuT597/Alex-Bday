const img = document.querySelector("#rotatingLaugh");

let rtdeg = 0;

setInterval(() => {
  rtdeg++;
  img.style.transform = "rotate(" + rtdeg + "deg)";
  img.style.transform = `rotate(${rtdeg}deg)`;
}, 15);
