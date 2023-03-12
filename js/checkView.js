import { renderError, clearErr } from "./helper.js";

export class CheckView {
  _input = Array.from(document.querySelectorAll(".form_input"));
  _errorEl = document.querySelectorAll(".error");
  _goTo(data) {
    if (this._data.page === 1) {
      if (this._input.every((inp) => inp.validity.valid)) {
        clearErr(this._errorEl, this._input);

        return data;
      } else
        return this._input.forEach((inp, i) => {
          if (!inp.validity.valid) {
            this._errorEl[i].textContent = renderError(inp);
            inp.classList.add("input-invalid");
          }
        });
    }
    if (this._data.page === 2 && !this._data.selectedPlan) return;
    if (this._data.page === 3 && this._data.selectedAdd.length === 0) return;
    else return data;
  }

  addHandlerRender(handler) {
    this._parentEl.addEventListener(
      "click",
      function (e) {
        const btn = e.target.closest("button");
        if (!btn) return;
        // if (btn.id < this._data) return btn.id;
        handler(btn.id < this._data.page ? +btn.id : this._goTo(+btn.id));
      }.bind(this)
    );
  }
}
