import { CheckView } from "./checkView.js";

class PaginationView extends CheckView {
  _data;
  _numPages = 4;

  _parentEl = document.querySelector(".button__cont");

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._parentEl.innerHTML = "";
    this._parentEl.insertAdjacentHTML("beforeend", markup);
  }
  showError() {
    if (this._data.page == 1) {
      console.log("true");
    }
  }
  _generateMarkup() {
    if (this._data.page == 1 && this._numPages > 1) {
      return `
      <button  class="prev hidden" id=${this._data.page - 1}>Go Back</button>
      <button type="submit" form="my-form"  class="next" id="${
        this._data.page + 1
      }">Next Step</button>
  
        `;
    }

    if (this._data.page < this._numPages) {
      return `
        <button  class="prev" id="${this._data.page - 1}">Go Back</button>
        <button class="next" id="${this._data.page + 1}">Next Step</button>
        `;
    }
    if (this._data.page === this._numPages) {
      return `
        <button  class="prev" id="${this._data.page - 1}">Go Back</button>
        <button class="next" id="${this._data.page + 1}" >${
        this._data.page === 4 ? "Confirm" : "Next button"
      }</button>
          `;
    }

    if (this._data.page > this._numPages) {
      this._parentEl.style.display = "none";
    }
  }
}

export default new PaginationView();
