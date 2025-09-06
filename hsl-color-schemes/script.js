const Mode = {
  DARK: "dark",
  LIGHT: "light"
}
let hue = 10;
let saturation = 10;
let mode = Mode.DARK;


const buttonEl = document.querySelector("button");
const bodyEl = document.querySelector("body");

const hueSlider = document.querySelector("#hue");
const hueLabel = document.querySelector("#hue-label")

const saturationSlider = document.querySelector("#saturation");
const saturationLabel = document.querySelector("#saturation-label")

saturationLabel.textContent = saturation + "% Saturation";
hueLabel.textContent = hue + " Hue";


buttonEl.addEventListener("click", () => {
  bodyEl.classList.toggle("light");

  if(mode == Mode.LIGHT){

    mode = Mode.DARK;
  }else{
    mode = Mode.LIGHT;
  }
  setThemeVars(hue, saturation, mode);
})

hueSlider.addEventListener("input", function () {

  hue = this.value;

  setThemeVars(hue, saturation, mode);

  hueLabel.textContent = hue + " Hue";

})

saturationSlider.addEventListener("input", function () {

  saturation = this.value;

  setThemeVars(hue, saturation, mode);

  saturationLabel.textContent = saturation + "% Saturation";
})

function setThemeVars(hue, saturation, mode) {

  let cssVars = {}


  switch (mode) {
    case Mode.DARK:
      cssVars = {
        "--bg-dark": `hsl(${hue}, ${saturation}%, 2%)`,
        "--bg": `hsl(${hue}, ${saturation}%, 5%)`,
        "--bg-light": `hsl(${hue}, ${saturation}%, 10%)`,
        "--accent": `hsl(${hue - 60}, ${saturation}%, 12%)`,
        "--gradient": "linear-gradient(0deg, var(--bg) 95%, var(--bg-light))",
        "--gradient-hover": "linear-gradient(0deg, var(--bg), var(--bg-light)",
        "--highlight": `hsl(${hue}, ${saturation}% 30%)`,
        "--border": `hsl(${hue}, ${saturation}% 30%)`,
        "--border-card": "solid 1px var(--border)",
        "--shadow": ` 0px 2px 2px hsla(${hue}, ${saturation}%, 5%, 0.5), 0px 4px 4px hsla(${hue}, ${saturation}%, 10%, 0.15)`
      }
      break;
    case Mode.LIGHT:
      cssVars = {
        "--bg-dark": `hsl(${hue}, ${saturation}%, 80%)`,
        "--bg": `hsl(${hue}, ${saturation}%, 85%)`,
        "--bg-light": `hsl(${hue}, ${saturation}%, 90%)`,
        "--accent": `hsl(${hue - 60}, ${saturation}%, 75%)`,
        "--gradient": "linear-gradient(0deg, var(--bg) 95%, var(--bg-light))",
        "--gradient-hover": "linear-gradient(0deg, var(--bg), var(--bg-light)",
        "--highlight": `hsl(${hue}, ${saturation}% 100%)`,
        "--border": `hsl(${hue}, ${saturation}% 30%)`,
        "--border-card": "solid 1px var(--bg)",
        "--shadow": ` 0px 2px 2px hsla(${hue}, ${saturation}%, 10%, 0.5), 0px 4px 4px hsla(${hue}, ${saturation}%, 20%, 0.10)`
      }
      break;
    default:

  }

  for(key in cssVars){
    console.log(key)

    bodyEl.style.setProperty(key, cssVars[key]);
  }
}

