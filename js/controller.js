import paginationView from "./paginationView.js";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { async } from "regenerator-runtime";
import * as model from "./model.js";
import formView from "./formView.js";
import togglerView from "./togglerView.js";
import btnView from "./btnView.js";
import formClick from "./formClick.js";
import { CheckView } from "./checkView.js";
const pageLoad = function () {
  paginationView.render(model.state);
  btnView.render(model.state);
  formView.render(model.state);
};

const controlPagination = function (goTo) {
  if (!goTo) return;
  if (goTo === 4) formView.renderAdds();
  model.setPage(goTo);
  paginationView.render(model.state);
  formView.render(model.state);
  btnView.render(model.state);
};

const controlToggler = function () {
  if (model.state.Monthly) model.setYearlyPlan();
  else model.setMonthlyPlan();
};

const controlAdd = function (add) {
  model.setAdd(add);
};

const controlPlanClick = function (plan) {
  model.setPlan(plan);
  console.log(model.state.selectedPlan);
};

const controlChange = function () {
  const id = window.location.hash.slice(-1);
  if (!id) return;
  model.setPage(+id);
  console.log(model.state);
  paginationView.render(model.state);
  formView.render(model.state);
  btnView.render(model.state);
};

const init = function () {
  pageLoad();
  paginationView.addHandlerRender(controlPagination);
  formView.addHandlerRender();
  togglerView.addHandlerRender(controlToggler);
  btnView.addHandlerRender(controlPagination);
  formClick.plansHandlerRender(controlPlanClick);
  formClick.addsHandlerRender(controlAdd);
  formView._renderChange(controlChange);
};

init();
