let hue = 10;
let saturation = 10;

const buttonEl = document.querySelector("button");
const bodyEl = document.querySelector("body");

const hueSlider = document.querySelector("#hue");
const saturationSlider = document.querySelector("#saturation");

buttonEl.addEventListener("click", () => {
  bodyEl.classList.toggle("light");
})

hueSlider.addEventListener("change", function(){
  
  hue = this.value;

  bodyEl.style.setProperty("--bg-dark", `hsl(${hue}, ${saturation}%, 2%)`);
  bodyEl.style.setProperty("--bg", `hsl(${hue}, ${saturation}%, 5%)`);
  bodyEl.style.setProperty("--bg-light", `hsl(${hue}, ${saturation}%, 10%)`);
  bodyEl.style.setProperty("--gradient", "linear-gradient(0deg, var(--bg) 95%, var(--bg-light))");
  bodyEl.style.setProperty("--gradient-hover", "linear-gradient(0deg, var(--bg), var(--bg-light)");
  bodyEl.style.setProperty("--highlight", `hsl(${hue}, ${saturation}% 30%)`);
  bodyEl.style.setProperty("--border", `hsl(${hue}, ${saturation}% 30%)`);
  bodyEl.style.setProperty("--border-card", `solid 1px var(--border)`);
  bodyEl.style.setProperty("--shadow", ` 0px 2px 2px hsla(${hue}, ${saturation}%, 5%, 0.5), 0px 4px 4px hsla(${hue}, ${saturation}%, 10%, 0.15)`);

})

saturationSlider.addEventListener("change", function(){
  
  saturation = this.value;

    bodyEl.style.setProperty("--bg-dark", `hsl(${hue}, ${saturation}%, 2%)`);
  bodyEl.style.setProperty("--bg", `hsl(${hue}, ${saturation}%, 5%)`);
  bodyEl.style.setProperty("--bg-light", `hsl(${hue}, ${saturation}%, 10%)`);
  bodyEl.style.setProperty("--gradient", "linear-gradient(0deg, var(--bg) 95%, var(--bg-light))");
  bodyEl.style.setProperty("--gradient-hover", "linear-gradient(0deg, var(--bg), var(--bg-light)");
  bodyEl.style.setProperty("--highlight", `hsl(${hue}, ${saturation}% 30%)`);
  bodyEl.style.setProperty("--border", `hsl(${hue}, ${saturation}% 30%)`);
  bodyEl.style.setProperty("--border-card", `solid 1px var(--border)`);
  bodyEl.style.setProperty("--shadow", ` 0px 2px 2px hsla(${hue}, ${saturation}%, 5%, 0.5), 0px 4px 4px hsla(${hue}, ${saturation}%, 10%, 0.15)`);
})

