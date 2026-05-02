let ProgressFiller = document.getElementById("progress_filler");
let dot = document.getElementsByClassName("dot");
let [orderConfirmStatus, shippStatus, outforDeliveryStatus, deliverStatus] =
  document.getElementsByClassName("tracking_statuses");

function orderComfirm() {
  return new Promise((resolveFunc, rejectFunc) => {
    setTimeout(() => {
      let isProductOrdered = true;
      if (isProductOrdered) {
        resolveFunc("User Ordered Product successfully....");
        ProgressFiller.style.height = "35%";
        document.getElementById("d1").classList.add("active");
      } else {
        rejectFunc("User Not Ordered..?");
      }
    }, 3000);
  });
}

function orderShip() {
  return new Promise((resolveFunc, rejectFunc) => {
    setTimeout(() => {
      let isShipped = true;
      if (isShipped) {
        resolveFunc("Product Shipped in Pune Hub Successfully...");
        ProgressFiller.style.height = "68%";
        document.getElementById("d2").classList.add("active");
      } else {
        rejectFunc("Product not shipped yet..?");
      }
    }, 3000);
  });
}

function outForDelivery() {
  return new Promise((resolveFunc, rejectFunc) => {
    setTimeout(() => {
      let isoutForDelivered = true;
      if (isoutForDelivered) {
        resolveFunc("Product Out for Delivery Successfully...");
        ProgressFiller.style.height = "100%";
        document.getElementById("d3").classList.add("active");
      } else {
        rejectFunc("Product has not been out for delivery..?");
      }
    }, 3000);
  });
}

function deliver() {
  return new Promise((resolveFunc, rejectFunc) => {
    setTimeout(() => {
      let isdelivered = true;
      if (isdelivered) {
        resolveFunc("Product Delivered Successfully...");
        document.getElementById("d4").classList.add("active");
      } else {
        rejectFunc("Product has not been Delivered..?");
      }
    }, 3000);
  });
}

let trackBtn = document.getElementById("track_btn");
trackBtn.addEventListener("click", async() => {
let orderConfirmationResult = await orderComfirm();
orderConfirmStatus.textContent = orderConfirmationResult;
let orderShippingResult = await orderShip();
shippStatus.textContent = orderShippingResult;
let orderOutForDeliveryResult = await outForDelivery();
outforDeliveryStatus.textContent = orderOutForDeliveryResult;
let deliveredResult = await deliver();
deliverStatus.textContent = deliveredResult;
});
