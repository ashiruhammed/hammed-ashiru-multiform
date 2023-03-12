class FormClick {
  _planCont = document.querySelector(".plans");
  _addsCont = document.querySelector(".adds");
  _inputs = document.querySelectorAll(".checkbox");
  _plans = Array.from(document.querySelectorAll(".plan"));
  _adds = document.querySelectorAll(".add");

  addsHandlerRender(handler) {
    this._adds.forEach((add, i) => {
      add.addEventListener(
        "click",
        function (e) {
          const add = e.target.closest(".add");
          if (!add) return;
          add.classList.toggle("active");
          handler(add.dataset.addPick);
          if (this._inputs[i].checked) this._inputs[i].checked = false;
          else this._inputs[i].checked = true;
        }.bind(this)
      );
    });
  }

  plansHandlerRender(handler) {
    this._planCont.addEventListener(
      "click",
      function (e) {
        const plan = e.target.closest(".plan");
        if (!plan) return;
        this._plans.forEach((plan) => plan.classList.remove("active"));
        plan.classList.add("active");

        handler(plan.dataset.planPicked);
      }.bind(this)
    );
  }
}

export default new FormClick();
