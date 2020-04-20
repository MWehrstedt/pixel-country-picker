let div = document.querySelector("#flag");
x = 15;
y = 9;
let color = "black";
let down = false;
for (i = 0; i < x * y; i++) {
  div.appendChild(document.createElement("span")).classList.add("pixel");
}
document.querySelectorAll("#colselect>span").forEach(s => {
  s.addEventListener("click", e => {
    color = e.target.id;
  });
});
document.querySelectorAll(".pixel").forEach(s => {
  s.addEventListener("mouseover", e => {
    if (down) {
      e.target.style.background = color;
      document.querySelector("#selected").innerHTML = validate();
    }
  });
  s.addEventListener("mousedown", e => {
    e.target.style.background = color;
    document.querySelector("#selected").innerHTML = validate();
  });
});
div.addEventListener("mousedown", e => {
  down = true;
});
div.addEventListener("mouseup", e => {
  down = false;
});
function getArr() {
  ret = [];
  document.querySelectorAll(".pixel").forEach(s => {
    ret.push(s.style.background);
  });
  return ret;
}

let flagnames = ["USA", "Japan", "Argentina", "France", "Germany"];
function validate() {
  a = getArr().map(x => {
    return x == "" ? "white" : x;
  });
  for (i = 0; i < flags.length; i++) {
    if (
      JSON.stringify(
        flags[i].map(x => {
          return x == "" ? "white" : x;
        })
      ) == JSON.stringify(a.map(x => x.replace(" none repeat scroll 0% 0%", "")))
    ) {
      return flagnames[i];
    }
  }
  return "none";
}
