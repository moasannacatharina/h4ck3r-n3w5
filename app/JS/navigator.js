const tab = document.title;
const menue_item = document.querySelectorAll(".navbar>nav>li");

console.log("JS found");

switch (tab) {
  case "H4ck3r N3w5":
    menue_item[0].style.borderBottom = "2px solid";
    break;
  case "Terms and Conditions":
    menue_item[1].style.borderBottom = "2px solid";
    break;
  case "User Page":
    menue_item[2].style.borderBottom = "2px solid";
    break;
  case "Login Page":
    menue_item[2].style.borderBottom = "2px solid";
    break;
  case "Register new H4ck3r":
    menue_item[3].style.borderBottom = "2px solid";
    break;
}