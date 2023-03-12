export const state = {
  page: 1,
  planBill: "Monthly",
  Monthly: true,
  selectedAdd: [],
};

export const setPage = function (page) {
  state.page = page;
};

export const setYearlyPlan = function () {
  state.Monthly = false;
  state.planBill = "Yearly";
  console.log(state);
};

export const setMonthlyPlan = function () {
  state.Monthly = true;
  state.planBill = "Monthly";
  console.log(state);
};

export const setPlan = function (plan) {
  state.selectedPlan = plan;
};

export const setAdd = function (add) {
  const index = state.selectedAdd.findIndex((select) => select === add);
  index > -1 ? state.selectedAdd.splice(index, 1) : state.selectedAdd.push(add);
};
