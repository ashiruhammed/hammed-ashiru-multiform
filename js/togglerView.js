class TogglerView {
  _toggler = document.querySelector(".toggle_button");
  _toggle_button = document.querySelector(".toggle");
  _planYearly = document.querySelectorAll(".yearly");
  _planMonthly = document.querySelectorAll(".monthly");
  _bill = document.querySelectorAll(".billPlan");
  _toggle() {
    this._toggle_button.classList.toggle("active_toggle");
    this._planMonthly.forEach((month) => month.classList.toggle("hide"));
    this._planYearly.forEach((year) => year.classList.toggle("hide"));
    this._bill.forEach((bill) => bill.classList.toggle("clicked_button"));
  }
  addHandlerRender(handler) {
    this._toggler.addEventListener(
      "click",
      function () {
        this._toggle();
        handler();
      }.bind(this)
    );
  }
}

export default new TogglerView();
