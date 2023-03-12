import { CheckView } from "./checkView.js";

class BtnView extends CheckView {
  _data;
  _input = Array.from(document.querySelectorAll(".form_input"));
  _parentEl = document.querySelector(".navigator");
  _errorEl = document.querySelectorAll(".error");
  _change = document.querySelector("a");
  _btns = Array.from(document.querySelectorAll(".number"));

  render(data) {
    this._data = data;
    if (!data) return;
    if (data === 5) this._btns.forEach((d) => console.log(d));
    if (this._data.page === 5) {
      this._btns.forEach((btn) => btn.setAttribute("disabled", true));
      return (this._data = 4);
    }
    this._btns.forEach((btn) => btn.classList.remove("btn__active"));
    document
      .querySelector(`.btn--${this._data.page}`)
      .classList.add("btn__active");
  }
}

export default new BtnView();
