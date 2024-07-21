import menu from "./modules/menu";
import slider from "./modules/slider";
import rating from "./modules/rating";
import scroll from "./modules/scroll";

import formSearch from "./modules/formSearch";
import form from "./modules/form";

import modal from "./modules/modal";

menu();
slider();
rating();
scroll();

formSearch();
form({
  idForm: "form3",
});
form({
  idForm: "form2",
});

modal();
