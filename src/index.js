import menu from "./modules/menu";
import slider from "./modules/slider";
import rating from "./modules/rating";

import formSearch from "./modules/formSearch";
import form from "./modules/form";

import modal from "./modules/modal";

menu();
slider();
rating();

formSearch();
form({ idForm: "form-entry" });

modal();
