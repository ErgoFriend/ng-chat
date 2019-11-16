import {Component, OnInit} from "@angular/core";

@Component({
  selector: "app-bills",
  templateUrl: "./bills.component.html",
  styleUrls: ["./bills.component.css"]
})
export class BillsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const stripe = Stripe("pk_test_AH0rNAnLxypshMFyHI73Egf9");
    const elements = stripe.elements();

    // Element作成時に options から スタイルを調整できます.
    var style = {
      // iconStyle: "solid",
      style: {
        base: {
          iconColor: "#ffa26b",
          color: "#ffba6c",
          fontWeight: 500,
          fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
          fontSize: "16px",
          fontSmoothing: "antialiased",

          ":-webkit-autofill": {
            color: "#ffba6c"
          },
          "::placeholder": {
            color: "#ffba6c"
          }
        },
        invalid: {
          iconColor: "#FFC7EE",
          color: "#FFC7EE"
        }
      }
    };

    // card Element のインスタンスを作成
    var card = elements.create("card", style);
    card.mount("#example1-card");

    var form = document.getElementById("payment-form");
    form.addEventListener("submit", function(event) {
      event.preventDefault();

      stripe.createToken(card).then(function(result) {
        if (result.error) {
          // エラー表示.
          var errorElement = document.getElementById("card-errors");
          errorElement.textContent = result.error.message;
        } else {
          // トークンをサーバに送信
          stripeTokenHandler(result.token);
        }
      });
    });

    function stripeTokenHandler(token) {
      // tokenをフォームへ包含し送信
      var form = document.getElementById("payment-form") as HTMLFormElement;
      var hiddenInput = document.createElement("input");
      hiddenInput.setAttribute("type", "hidden");
      hiddenInput.setAttribute("name", "stripeToken");
      hiddenInput.setAttribute("value", token.id);
      form.appendChild(hiddenInput);

      // Submit します
      form.submit();
    }
  }
}
