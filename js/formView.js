class FormView {
  _data;
  _forms = document.querySelectorAll(".form");
  _form = document.querySelector("form");
  _errorEl = document.querySelectorAll(".error");
  _input = Array.from(document.querySelectorAll(".form_input"));
  _summaryCont = document.querySelector(".summary");
  _changeEl = document.querySelector("a");

  _renderChange(handler) {
    window.addEventListener("hashchange", handler);
  }

  addHandlerRender() {
    this._form.addEventListener(
      "submit",
      function (e) {
        e.preventDefault();

        this._input.forEach((inp, i) => {
          if (inp.validity.valid) {
            this._errorEl[i].textContent = "";
            inp.classList.remove("input-invalid");
          }
        });
      }.bind(this)
    );
  }

  renderAdds() {
    const markup = this.generateMarkup(this._data);
    this._summaryCont.innerHTML = "";
    this._summaryCont.insertAdjacentHTML("beforeend", markup);
  }

  render(data) {
    if (!data) return;
    this._data = data;
    this._forms.forEach((form) => form.classList.add("hide"));
    document
      .querySelector(`.form--${this._data.page}`)
      .classList.remove("hide");
  }

  generateMarkup(data) {
    const arr = data.selectedAdd.map((d) => d.split(" "));
    const plan = data.selectedPlan.split(" ");
    console.log(plan);
    const add = arr.map((d) => d);
    const monthly = data.Monthly;
    const sum = function (...data) {
      console.log(data);
      return data.reduce((d, b) => d + b);
    };
    // console.log(arr);
    return `

    <div class="summary_header">
    <div>
      <div>
        <h3 class="select_plan">${plan[0]} (${data.planBill})</h3>
        <a href="#3">Change</a>
      </div>
      <p class="bill">$${monthly ? plan[1] : plan[1] * 10}/${
      monthly ? "mo" : "yr"
    }</p>
    </div>

    ${add
      .map(
        (p) => `
    <div class="picked-add">
      <p>${p[0]}</p>
      <p>+${monthly ? p[1] : p[1] * 10}/${monthly ? "mo" : "yr"}</p>
    </div>
    `
      )
      .join("")}
     </div>
     <div class="summary_sum">
      <p>Total(per ${data.planBill})</p>
      <h3>$${sum(
        ...add.map((p) => (monthly ? +p[1] : +p[1] * 10)),
        monthly ? +plan[1] : plan[1] * 10
      )}/${monthly ? "mo" : "yr"}</h3>
      
    </div>
`;
  }
}

export default new FormView();
